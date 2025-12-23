<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Str;
use App\Models\WebsiteVisit;

class LogWebsiteVisit
{
    public function handle(Request $request, Closure $next)
    {
        if (
            $request->is('api/*') ||
            $request->is('Admin/*') ||
            $request->is('colors')
        ) {
            return $next($request);
        }

        $visitorId = $request->cookie('visitor_id');

        if (!$visitorId) {
            $visitorId = (string) Str::uuid();
            Cookie::queue(cookie('visitor_id', $visitorId, 60 * 24 * 365));
        }

        $alreadyLogged = WebsiteVisit::where('visitor_id', $visitorId)
            ->where('visited_at', '>=', now()->subHour())
            ->exists();

        if (!$alreadyLogged) {
            WebsiteVisit::create([
                'visitor_id' => $visitorId,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'url'        => $request->fullUrl(),
                'visited_at' => now(),
            ]);
        }

        return $next($request);
    }
}
