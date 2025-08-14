<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SecurityHeaders
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        $response->headers->set(
            'Content-Security-Policy',
            "default-src 'self';
             script-src 'self' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com;
             style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
             font-src 'self' https://fonts.gstatic.com;
             img-src 'self' data: https:;
             connect-src 'self';
             frame-ancestors 'none';
             object-src 'none';
             base-uri 'self';"
        );
        $response->headers->set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
        $response->headers->set('Cross-Origin-Opener-Policy', 'same-origin');
        $response->headers->set('X-Frame-Options', 'DENY');
        $response->headers->set('X-XSS-Protection', '1; mode=block');
        return $next($request);
    }
}
