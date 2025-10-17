<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\AccountUsers;
use App\Services\OtpService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;

class UserSignUpController extends Controller
{
    protected $otpService;

    public function __construct(OtpService $otpService)
    {
        $this->otpService = $otpService;
    }

    public function showRegistrationForm()
    {
        return Inertia::render('Auth/User/Signup');
    }

    public function register(Request $request)
    {
        $this->checkTooManyAttempts($request);

        $validator = Validator::make($request->all(), [
            'email' => [
                'required',
                'string',
                'email:rfc,dns',
                'max:255',
                'unique:users,email',
            ],
            'password' => [
                'required',
                'confirmed',
                Rules\Password::min(8)
                    ->uncompromised()
                    ->mixedCase()
                    ->letters()
                    ->numbers(),

            ],
        ], [
            'email.required'    => 'We need your email to create your account.',
            'email.email'       => 'Please enter a valid email address.',
            'email.unique'      => 'This email is already registered. Try logging in.',
            'password.required' => 'You must choose a password.',
            'password.confirmed' => 'Password confirmation does not match.',
            'password.*' => 'Password must be at least 8 characters long, include uppercase, lowercase, a number, and not appear in known data breaches.',

        ]);

        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->messages() as $field => $messages) {
                $errors[$field] = $messages[0];
            }
            return back()->withErrors($errors)->withInput();
        }

        try {
            $user = User::create([
                'email' => strtolower($request->email),
                'password' => Hash::make($request->password),
                'is_verified' => false,
            ]);

            AccountUsers::create([
                'user_id' => $user->id,
                'first_name' => $request->firstname,
                'last_name' =>  $request->lastname,
            ]);


            $this->otpService->generateAndSendOtp($user);

            $request->session()->put('otp_verification_user_id', $user->id);
            $request->session()->put('otp_verification_email', $user->email);
            RateLimiter::clear($this->throttleKey($request));
            return redirect()->route('otp.verify')
                ->with('success', 'Account created successfully! Please verify your email with the OTP sent to your inbox.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong, please try again.');
        }
    }

    public function showOtpVerificationForm(Request $request)
    {
        if (!$request->session()->has('otp_verification_user_id')) {
            return redirect()->route('register')->with('error', 'Please register first.');
        }

        $email = $request->session()->get('otp_verification_email');
        return Inertia::render('Auth/User/VerifyOtp', [
            'email' => $email
        ]);
    }

    public function verifyOtp(Request $request)
    {
        $request->validate([
            'otp' => 'required|digits:6',
        ]);

        $userId = $request->session()->get('otp_verification_user_id');
        $userEmail = $request->session()->get('otp_verification_email');

        if (!$userId) {
            return redirect()->route('register')->with('error', 'Session expired. Please register again.');
        }
        $user = User::find($userId);

        if (!$user) {
            return redirect()->route('register')->with('error', 'User not found. Please register again.');
        }

        if ($this->otpService->verifyOtp($user, $request->otp)) {
            $request->session()->forget('otp_verification_user_id');
            $request->session()->forget('otp_verification_email');

            Auth::login($user);
            $request->session()->regenerate();

            return redirect()->route('user.home')
                ->with('success', 'Email verified successfully! You are now logged in.');
        }
        return back()->withErrors(['otp' => 'Invalid or expired OTP.']);
    }

    public function resendOtp(Request $request)
    {

        $userId = $request->session()->get('otp_verification_user_id');

        if (!$userId) {
            return redirect()->route('register')->with('error', 'Session expired. Please register again.');
        }

        $user = User::find($userId);
        if (!$user) {
            return redirect()->route('register')->with('error', 'User not found. Please register again.');
        }

        if (RateLimiter::tooManyAttempts('resend-otp:' . $user->id, 3)) {
            return back()->withErrors(['otp' => 'Too many resend attempts. Please try again later.']);
        }
        RateLimiter::hit('resend-otp:' . $user->id, 60);

        $this->otpService->resendOtp($user);
        return back()->with('success', 'OTP has been resent to your email.');
    }

    protected function checkTooManyAttempts(Request $request)
    {
        if (RateLimiter::tooManyAttempts($this->throttleKey($request), 3)) {
            throw ValidationException::withMessages([
                'email' => __('Too many registration attempts. Please try again in :seconds seconds.', [
                    'seconds' => RateLimiter::availableIn($this->throttleKey($request)),
                ]),
            ]);
        }
    }

    protected function throttleKey(Request $request): string
    {
        return Str::lower($request->input('email')) . '|' . $request->ip();
    }
}
