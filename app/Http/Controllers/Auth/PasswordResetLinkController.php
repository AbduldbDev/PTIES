<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class PasswordResetLinkController extends Controller
{
    /**
     * Show the password reset link request page.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('Auth/User/ForgotPassword', [
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Handle an incoming password reset link request securely.
     */
    public function store(Request $request): RedirectResponse
    {
        // 1️⃣ Rate limit to prevent abuse
        $this->ensureIsNotRateLimited($request);

        // 2️⃣ Validate email and normalize it
        $request->merge([
            'email' => strtolower(trim($request->email)),
        ]);

        $request->validate([
            'email' => 'required|email',
        ]);

        // 3️⃣ Always send the same response to prevent user enumeration
        $status = Password::sendResetLink($request->only('email'));
        if ($status === Password::RESET_LINK_SENT) {
            return back()->with('success', __($status)); // ✅ Pass success message
        } else {
            return back()->with('error', __($status)); // ✅ Pass error message
        }

        RateLimiter::hit($this->throttleKey($request));


        return back()->with('status', __('If the account exists, a reset link has been sent.'));
    }

    /**
     * Ensure the request is not rate limited.
     */
    protected function ensureIsNotRateLimited(Request $request): void
    {
        if (RateLimiter::tooManyAttempts($this->throttleKey($request), 5)) {
            abort(429, __('Too many attempts. Please try again later.'));
        }
    }

    /**
     * Generate a unique rate limit key for this request.
     */
    protected function throttleKey(Request $request): string
    {
        return Str::lower($request->input('email')) . '|' . $request->ip();
    }
}
