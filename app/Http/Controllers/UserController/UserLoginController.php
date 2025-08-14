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

    

    // public function register(Request $request): RedirectResponse
    // {
    //     // Validate input
    //     $request->validate([
    //         'email' => 'required|string|email|max:255|unique:users,email', // fixed lowercase issue
    //         'password' => ['required', 'confirmed', Rules\Password::defaults()],
    //     ]);

    //     try {
    //         // Create the user
    //         $user = User::create([
    //             'email' => strtolower($request->email), // convert to lowercase manually
    //             'password' => Hash::make($request->password),
    //         ]);

    //         // Log the user in
    //         Auth::login($user);

    //         // Redirect to the route
    //         return redirect()->route('user.home')
    //             ->with('success', 'Account created successfully!');
    //     } catch (\Exception $e) {
    //         // Optional: log the error for debugging
    //         \Log::error('User registration failed: ' . $e->getMessage());

    //         return redirect()->back()->with('error', 'Something went wrong, please try again.');
    //     }
    // }
}
