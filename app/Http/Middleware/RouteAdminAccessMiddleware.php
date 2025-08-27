<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class RouteAdminAccessMiddleware
{
    public function handle(Request $request, Closure $next, $type): Response
    {
        $allowedRoles = ['admin', 'content_manager'];

        if ($type === 'auth') {
            if (!Auth::check()) {
                return redirect('/Admin/login');
            }

            if (!in_array(Auth::user()->user_type, $allowedRoles)) {
                return redirect('/Admin/login');
            }
        }

        if ($type === 'guest') {
            if (Auth::check() && in_array(Auth::user()->user_type, $allowedRoles)) {
                return redirect('/Admin');
            }
        }

        if ($type === 'admin') {
            if (!Auth::check() || Auth::user()->user_type !== 'admin') {
                return redirect('/Admin');
            }
        }

        return $next($request);
    }
}
