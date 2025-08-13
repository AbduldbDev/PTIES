<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Response;


class UserLoginController extends Controller
{
    public function loginform()
    {
        return Inertia::render('Auth/User/Login');
    }

    public function signupform()
    {
        return Inertia::render('Auth/User/Signup');
    }

    public function register(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        try {
            $user = User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            Auth::login($user);

            return redirect()->route('user.home')
                ->with('success', 'Account created successfully!');
        } catch (\Exception $e) {
            return redirect()->route('user.home')->with('error', 'Something went wrong, please try again.');
        }
    }
}
