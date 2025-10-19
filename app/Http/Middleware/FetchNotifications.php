<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Notification;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FetchNotifications
{
    public function handle(Request $request, Closure $next)
    {
        // 🧠 Register the shared data BEFORE returning the response
        if (Auth::check()) {
            Inertia::share([
                'notifications' => function () {
                    return Notification::where('user_id', Auth::id())
                        ->latest()
                        ->take(10)
                        ->get(['id', 'type', 'title', 'message', 'url', 'is_read', 'created_at']);
                },
            ]);
        }

        return $next($request);
    }
}
