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
    public function handle(Request $request, Closure $next,  $type): Response
    {

        if ($type === 'auth' && !Auth::check()) {
            return redirect('/Login');
        }


        if ($type === 'guest' && Auth::check()) {
            return redirect('/');
        }

        return $next($request);
    }
}
