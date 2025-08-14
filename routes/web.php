<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController\AccountManagementController;
use App\Http\Controllers\UserController\UserLayout;
use App\Http\Controllers\UserController\UserLoginController;
use App\Http\Controllers\UserController\CookieConsentController;

Route::get('/Admin/AccountManagement', [AccountManagementController::class, 'index'])->name('account.management.index');
Route::get('/Admin/AccountManagement/New', [AccountManagementController::class, 'form'])->name('account.management.form');
Route::delete('/Admin/AccountManagement/Delete/{id}', [AccountManagementController::class, 'delete'])->name('account.management.delete');
Route::get('/Admin', [AccountManagementController::class, 'app'])->name('account.management.app');


Route::get('/Login', [UserLoginController::class, 'loginform'])->name('user.login.form');
Route::get('/Signup', [UserLoginController::class, 'signupform'])->name('user.signup.form');

Route::post('/Signup/Submit', [UserLoginController::class, 'register'])->name('user.login.submit');


Route::get('/', function () {
    return Inertia::render('User/Pages/App');
})->name('user.home');

Route::get('/colors', [UserLayout::class, 'getThemeColors']);

// Route::get('/colors', function () {
//     return response()->json([
//         'primary' => '#f60002',   // Blue
//         'secondary' => '#ffed4a', // Yellow
//         'accent' => '#e3342f',    // Red
//     ]);
// });

Route::post('/cookies/accept', [CookieConsentController::class, 'accept'])->name('cookies.accept');
Route::post('/cookies/decline', [CookieConsentController::class, 'decline'])->name('cookies.decline');


Route::post('/Admin/AccountManagement/create', [AccountManagementController::class, 'create'])->name('account.management.create');


































Route::get('/Admin/Login', function () {
    return Inertia::render('Auth/Admin/Login');
})->name('admin.homes');




Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('User/Pages/about');
    })->name('dashboard');
});


require __DIR__ . '/auth.php';
