<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\User;
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

            $user = User::updateOrCreate(
                ['email' => $googleUser->getEmail()],
                [
                    'google_id' => $googleUser->getId(),
                    'avatar' => $avatarUrl,
                    'password' => bcrypt(Str::random(16)),
                ]
            );

            Auth::login($user);

            return redirect()->route('user.home');
        } catch (\Exception $e) {
            return redirect('/login')->with('error', 'Failed to login using Google.');
        }
    }
}
