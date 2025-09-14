<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\OtpVerificationMail;
use Carbon\Carbon;

class OtpService
{
    public function generateAndSendOtp(User $user)
    {

        $otp = rand(100000, 999999);
        $otpExpiresAt = Carbon::now()->addMinutes(5);

        $user->update([
            'otp' => $otp,
            'otp_expires_at' => $otpExpiresAt,
        ]);
        Mail::to($user->email)->send(new OtpVerificationMail($otp));

        return $otp;
    }

    public function verifyOtp(User $user, $enteredOtp)
    {
        if (!$user->otp || !$user->otp_expires_at) {
            return false;
        }

        if (Carbon::now()->gt($user->otp_expires_at)) {
            return false;
        }

        if ($user->otp === $enteredOtp) {
            $user->update([
                'is_verified' => true,
                'otp' => null,
                'otp_expires_at' => null,
            ]);
            return true;
        }

        return false;
    }

    public function resendOtp(User $user)
    {
        return $this->generateAndSendOtp($user);
    }
}
