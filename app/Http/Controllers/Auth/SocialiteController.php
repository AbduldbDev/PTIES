<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\AccountUsers;

use Laravel\Socialite\Facades\Socialite;


class SocialiteController extends Controller
{

    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();
            $user = User::where('email', $googleUser->getEmail())->first();
            $avatarUrl = $googleUser->getAvatar();

            $nameParts = explode(' ', $googleUser->getName());
            $firstName = $nameParts[0] ?? '';
            $lastName = $nameParts[count($nameParts) - 1] ?? '';


            $user = User::updateOrCreate(
                ['email' => $googleUser->getEmail()],
                [
                    'google_id' => $googleUser->getId(),
                    'avatar' => $avatarUrl,
                    'password' => bcrypt(Str::random(16)),
                    'is_verified' => true,
                ]
            );

            AccountUsers::updateOrCreate(
                ['user_id' => $user->id,],
                [
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                ]
            );


            Auth::login($user, true);
            return redirect()->intended('/');
        } catch (\Exception $e) {
            return redirect('/Login')->with('error', 'Failed to login using Google.');
        }
    }
}
