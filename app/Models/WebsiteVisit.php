<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cookie;

class WebsiteVisit extends Model
{
    protected $fillable = [
        'visitor_id',
        'ip_address',
        'user_agent',
        'url',
        'visited_at'
    ];

    protected $casts = [
        'visited_at' => 'datetime'
    ];

    public static function trackOncePerDay($request): void
    {
        // Skip admin routes
        if (
            str_contains($request->path(), 'admin') ||
            str_contains($request->path(), 'Admin')
        ) {
            return;
        }

        // Skip non-GET requests
        if (!$request->isMethod('get')) {
            return;
        }

        $visitorId = self::getVisitorId();
        $today = now()->toDateString();

        $alreadyVisited = self::where('visitor_id', $visitorId)
            ->whereDate('visited_at', $today)
            ->exists();

        if (!$alreadyVisited) {
            self::create([
                'visitor_id' => $visitorId,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'url' => $request->fullUrl(),
                'visited_at' => now(),
            ]);
        }
    }

    private static function getVisitorId(): string
    {
        $visitorId = Cookie::get('visitor_id');

        if (!$visitorId) {
            $visitorId = uniqid('visitor_', true);
            Cookie::queue('visitor_id', $visitorId, 60 * 24 * 30);
        }

        return $visitorId;
    }
}
