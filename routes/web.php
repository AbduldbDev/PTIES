<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController\AccountManagementController;
use App\Http\Controllers\UserController\UserLayout;

use App\Http\Controllers\UserController\CookieConsentController;



Route::get('/colors', [UserLayout::class, 'getThemeColors']);
Route::post('/cookies/accept', [CookieConsentController::class, 'accept'])->name('cookies.accept');
Route::post('/cookies/decline', [CookieConsentController::class, 'decline'])->name('cookies.decline');


require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/user.php';
