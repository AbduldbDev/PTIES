<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

class TrackingServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->trackVisits();
    }

    private function trackVisits(): void
    {
        // Only track for web routes that don't contain 'admin'
        Route::matched(function ($routeMatched) {
            $request = request();
            $route = $routeMatched->route;

            // Skip admin routes and non-GET requests
            if (
                str_contains($request->path(), 'admin') ||
                str_contains($request->path(), 'Admin') ||
                !$request->isMethod('get')
            ) {
                return;
            }

            $this->recordVisit($request);
        });
    }

    private function recordVisit($request): void
    {
        $visitorId = $this->getVisitorId();
        $today = now()->toDateString();

        $alreadyVisited = DB::table('website_visits')
            ->where('visitor_id', $visitorId)
            ->whereDate('visited_at', $today)
            ->exists();

        if (!$alreadyVisited) {
            DB::table('website_visits')->insert([
                'visitor_id' => $visitorId,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'visited_at' => now(),
                'url' => $request->fullUrl(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    private function getVisitorId(): string
    {
        $visitorId = Cookie::get('visitor_id');

        if (!$visitorId) {
            // Create a more compact but unique visitor ID
            $visitorId = md5(request()->ip() . request()->userAgent() . time() . Str::random(16));
            Cookie::queue('visitor_id', $visitorId, 60 * 24 * 30); // 30 days
        }

        return $visitorId;
    }
}
