<?php

namespace App\Http\Middleware;

use App\Models\WebsiteVisit;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class TrackWebsiteVisit
{
    public function handle(Request $request, Closure $next): Response
    {
        // Skip tracking for admin routes
        if ($this->isAdminRoute($request)) {
            return $next($request);
        }

        // Skip tracking for non-GET requests
        if (!$request->isMethod('get')) {
            return $next($request);
        }

        $this->trackVisit($request);

        return $next($request);
    }

    private function isAdminRoute(Request $request): bool
    {
        return str_contains($request->path(), 'admin') ||
            str_contains($request->path(), 'Admin');
    }

    private function trackVisit(Request $request): void
    {
        $visitorId = $this->getVisitorId();
        $today = now()->toDateString();

        $alreadyVisited = DB::table('website_visits')
            ->where('visitor_id', $visitorId)
            ->whereDate('visited_at', $today)
            ->exists();

        if (!$alreadyVisited) {
            WebsiteVisit::create([
                'visitor_id' => $visitorId,
                'ip_address' => $request->ip(),
                'user_agent' => substr($request->userAgent(), 0, 500),
                'visited_at' => now(),
                'url' => substr($request->fullUrl(), 0, 1000),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    private function getVisitorId(): string
    {
        $visitorId = Cookie::get('visitor_id');

        if (!$visitorId) {
            $visitorId = Str::random(20);
            Cookie::queue(
                Cookie::make('visitor_id', $visitorId, 60 * 24 * 30, null, null, false, false)
            );
        }

        // Always ensure it’s max 20 chars
        return substr($visitorId, 0, 20);
    }
}
