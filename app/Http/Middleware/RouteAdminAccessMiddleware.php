<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class RouteAdminAccessMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $type): Response
    {
        // For auth routes - must be logged in AND must be admin/content_manager
        if ($type === 'auth') {
            if (!Auth::check()) {
                return redirect('/Admin/Login');
            }

            // Check user type for auth routes
            if (!in_array(Auth::user()->user_type, ['admin', 'content_manager'])) {
                return redirect('/Admin/Login');
            }
        }

        // For guest routes - if already logged in as admin/content_manager, redirect to admin
        if ($type === 'guest' && Auth::check() && in_array(Auth::user()->user_type, ['admin', 'content_manager'])) {
            return redirect('/Admin');
        }

        return $next($request);
    }
}
