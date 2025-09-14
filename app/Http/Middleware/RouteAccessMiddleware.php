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
        if ($type === 'guest') {
            if (Auth::check() && Auth::user()->user_type === 'user') {
                return redirect('/');
            }
        }

        if ($type === 'auth') {
            if (!Auth::check() || Auth::user()->user_type !== 'user') {
                return redirect()->guest('/Login');
            }
        }

        return $next($request);
    }
}
