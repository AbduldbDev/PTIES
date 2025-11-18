<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use App\Models\WebsiteVisit;
use Carbon\Carbon;
use Stevebauman\Location\Facades\Location;

class TrackVisits
{
    public function handle(Request $request, Closure $next): Response
    {
        if (
            !$request->isMethod('get') ||
            Str::startsWith(strtolower($request->path()), 'Admin')
        ) {
            return $next($request);
        }


        $visitorIp = $request->ip();
        $oneHourAgo = Carbon::now()->subHour();

        // Check if this IP has visited in the past hour
        $recentVisit = WebsiteVisit::where('ip_address', $visitorIp)
            ->where('visited_at', '>=', $oneHourAgo)
            ->exists();

        if (!$recentVisit) {
            // Get location data
            $location = Location::get($visitorIp);
            $locationText = $location
                ? trim("{$location->countryName}, {$location->cityName}", ', ')
                : 'Unknown';

            // Insert the visit
            WebsiteVisit::insert([
                'visitor_id' => $visitorIp,
                'ip_address' => $visitorIp,
                'user_agent' => $request->userAgent(),
                'url' => $request->fullUrl(),
                'visited_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        return $next($request);
    }
}
