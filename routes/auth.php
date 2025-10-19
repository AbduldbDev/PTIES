<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\UserLoginController;
use App\Http\Controllers\Auth\UserSignUpController;
use App\Http\Controllers\Auth\SocialiteController;


Route::middleware('auth')->group(function () {
    Route::post('/logout', [UserLoginController::class, 'logout']);
});

Route::middleware('user.access:guest')->group(function () {
    Route::get('/Login', [UserLoginController::class, 'showLoginForm'])->name('login');
    Route::post('/Login', [UserLoginController::class, 'login']);

    Route::get('/Signup', [UserSignUpController::class, 'showRegistrationForm'])->name('register');
    Route::post('/Signup', [UserSignUpController::class, 'register']);


    Route::get('auth/google', [SocialiteController::class, 'redirectToGoogle']);
    Route::get('auth/google/callback', [SocialiteController::class, 'handleGoogleCallback']);

    Route::get('/forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');

    Route::get('/verify-otp', [UserSignUpController::class, 'showOtpVerificationForm'])->name('otp.verify');
    Route::post('/verify-otp', [UserSignUpController::class, 'verifyOtp']);
    Route::post('/resend-otp', [UserSignUpController::class, 'resendOtp'])->name('otp.resend');
});
