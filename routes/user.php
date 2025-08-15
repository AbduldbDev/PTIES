<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController\PageController;


Route::middleware('auth')->group(function () {});
Route::get('/', [PageController::class, 'Home'])->name('user.home');
Route::get('/about', [PageController::class, 'About'])->name('user.about');
Route::get('/tourism', [PageController::class, 'AboutTourism'])->name('user.tourism');
Route::get('/officials', [PageController::class, 'KeyOfficials'])->name('user.officials');
Route::get('/biography', [PageController::class, 'OfficialBio'])->name('user.biography');
Route::get('/guide', [PageController::class, 'Guide'])->name('user.guide');
Route::get('/terminals', [PageController::class, 'Terminals'])->name('user.terminals');


Route::middleware('guest')->group(function () {});
