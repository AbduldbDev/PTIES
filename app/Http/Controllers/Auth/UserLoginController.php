<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class UserLoginController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('Auth/User/Login');
    }

    public function login(LoginRequest $request)
    {
        $this->checkTooManyAttempts($request);

        $credentials = $request->only('email', 'password');
        $remember = $request->boolean('remember');
        $user = User::where('email', $request->email)->first();

        if ($user && !$user->is_verified) {
            return redirect()->route('otp.verify')->with([
                'email' => $request->email,
                'message' => 'Please verify your email address before logging in.'
            ]);
        }

        if (!Auth::attempt($credentials, $remember)) {
            RateLimiter::hit($this->throttleKey($request), $seconds = 60);

            throw ValidationException::withMessages([
                'email' => __('Invalid credentials provided.'),
            ]);
        }

        RateLimiter::clear($this->throttleKey($request));

        $request->session()->regenerate();

        return redirect()->intended('/');
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

        return redirect('/');
    }
}
