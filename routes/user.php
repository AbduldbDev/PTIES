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
Route::get('/localproducts', [PageController::class, 'LocalProducts'])->name('user.localproducts');
Route::get('/attractions', [PageController::class, 'Attractions'])->name('user.attractions');
Route::get('/attractiondetails', [PageController::class, 'AttractionDetails'])->name('user.attractiondetails');
Route::get('/contact', [PageController::class, 'ContactUs'])->name('user.contact');
Route::middleware('guest')->group(function () {});
