<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckVerified
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check() && !Auth::user()->is_verified) {
            return redirect()->route('otp.verify')
                ->with('error', 'Please verify your email address to access this page.');
        }

        return $next($request);
    }
}
