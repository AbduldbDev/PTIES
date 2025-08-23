<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminLoginController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('Auth/Admin/Login');
    }

    public function login(LoginRequest $request)
    {
        $this->checkTooManyAttempts($request);

        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials, $request->boolean('remember'))) {
            RateLimiter::hit($this->throttleKey($request), $seconds = 60);

            throw ValidationException::withMessages([
                'email' => __('Invalid credentials provided.'),
            ]);
        }

        // Check if the authenticated user has the required user type
        $user = Auth::user();
        if (!$user || !in_array($user->user_type, ['admin', 'content_manager'])) {
            Auth::logout(); // Log out the user if they don't have the right type
            RateLimiter::hit($this->throttleKey($request), $seconds = 60);

            throw ValidationException::withMessages([
                'email' => __('You are not authorized to access this area.'),
            ]);
        }

        RateLimiter::clear($this->throttleKey($request));

        $request->session()->regenerate();

        return redirect()->intended('/Admin');
    }

    protected function checkTooManyAttempts(Request $request)
    {
        if (RateLimiter::tooManyAttempts($this->throttleKey($request), 5)) {
            throw ValidationException::withMessages([
                'email' => __('Too many login attempts. Please try again in :seconds seconds.', [
                    'seconds' => RateLimiter::availableIn($this->throttleKey($request)),
                ]),
            ]);
        }
    }

    protected function throttleKey(Request $request): string
    {
        return Str::lower($request->input('email')) . '|' . $request->ip();
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/Admin/login');
    }
}
