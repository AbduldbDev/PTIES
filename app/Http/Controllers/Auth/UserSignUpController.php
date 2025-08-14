<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;



class UserSignUpController extends Controller
{
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
                    ->mixedCase()
                    ->letters()
                    ->numbers()
                    ->uncompromised(),
            ],
        ], [
            'password.min'         => 'The password must be at least 8 characters, contain uppercase and lowercase letters, and one number.',
            'password.mixed_case'  => 'The password must be at least 8 characters, contain uppercase and lowercase letters, and one number.',
            'password.letters'     => 'The password must be at least 8 characters, contain uppercase and lowercase letters, and one number.',
            'password.numbers'     => 'The password must be at least 8 characters, contain uppercase and lowercase letters, and one number.',
            'password.symbols'     => 'The password must be at least 8 characters, contain uppercase and lowercase letters, and one number.',
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
            ]);

            Auth::login($user);
            $request->session()->regenerate();

            RateLimiter::clear($this->throttleKey($request));

            return redirect()->route('user.home')
                ->with('success', 'Account created successfully!');
        } catch (\Exception $e) {

            return redirect()->back()->with('error', 'Something went wrong, please try again.');
        }
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
