<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class NewPasswordController extends Controller
{
    /**
     * Show the password reset page.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('Auth/User/ResetPassword', [
            'email' => $request->email,
            'token' => $request->route('token'),
        ]);
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // Validate password + required reset fields
        $validator = Validator::make($request->all(), [
            'token' => ['required', 'string'],
            'email' => ['required', 'string', 'email', 'exists:users,email'],
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
            'email.exists'          => 'No account found with that email address.',
            'password.min'          => 'The password must be at least 8 characters, contain uppercase and lowercase letters, and one number.',
            'password.mixed_case'   => 'The password must be at least 8 characters, contain uppercase and lowercase letters, and one number.',
            'password.letters'      => 'The password must be at least 8 characters, contain uppercase and lowercase letters, and one number.',
            'password.numbers'      => 'The password must be at least 8 characters, contain uppercase and lowercase letters, and one number.',
            'password.symbols'      => 'The password must be at least 8 characters, contain uppercase and lowercase letters, and one number.',
        ]);

        if ($validator->fails()) {
            $errors = [];
            foreach ($validator->errors()->messages() as $field => $messages) {
                $errors[$field] = $messages[0];
            }
            return back()->withErrors($errors)->withInput();
        }

        // Reset the password
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        // Debug what’s happening if it fails
        if ($status !== Password::PASSWORD_RESET) {
            logger()->error('Password reset failed', [
                'status' => $status,
                'email'  => $request->email,
            ]);
            return back()->withErrors(['email' => __($status)]);
        }

        return redirect()
            ->route('login')
            ->with('success', __('Your password has been reset successfully.'));
    }
}
