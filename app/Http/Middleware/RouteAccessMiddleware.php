<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class RouteAccessMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $type): Response
    {
        // For auth routes - must be logged in AND must be regular user
        if ($type === 'auth') {
            if (!Auth::check()) {
                return redirect('/Login');
            }

            // Only allow if user_type is exactly "user"
            if (Auth::user()->user_type !== "user") {
                abort(403); // Forbidden access for non-user types
                return redirect('/Login');
            }
        }

        // For guest routes - if already logged in as a user, redirect home
        if ($type === 'guest' && Auth::check() && Auth::user()->user_type === "user") {
            return redirect('/');
        }

        return $next($request);
    }
}
