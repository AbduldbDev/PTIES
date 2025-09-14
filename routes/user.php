<?php

use App\Http\Controllers\Auth\SocialiteController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController\PageController;
use App\Http\Controllers\UserController\ContactusController;
use App\Http\Controllers\UserController\ProfileController;
use App\Http\Controllers\UserController\SocialWallController;

Route::middleware('user.access:auth')->group(function () {

    Route::prefix('/socialwall')->name('user.socialwall.')->group(function () {
        Route::get('/new', [SocialWallController::class, 'new'])->name('create');
        Route::post('/upload', [SocialWallController::class, 'store'])->name('store');
        Route::post('/like', [SocialWallController::class, 'toggleLike'])->name('toggleLike');
    });

    Route::get('/profile', [ProfileController::class, 'index'])->name('user.profile');
});


Route::prefix('/contact-us')->name('contact.')->group(function () {
    Route::get('/confirmation', [ContactusController::class, 'confirmation'])->name('confirmation');
    Route::post('/send', [ContactusController::class, 'send'])->name('send');
});

Route::get('/', [PageController::class, 'Home'])->name('user.home');
Route::get('/about', [PageController::class, 'About'])->name('user.about');
Route::get('/tourism', [PageController::class, 'AboutTourism'])->name('user.tourism');
Route::get('/officials', [PageController::class, 'KeyOfficials'])->name('user.officials');
Route::get('/biography', [PageController::class, 'OfficialBio'])->name('user.biography');
Route::get('/guide', [PageController::class, 'Guide'])->name('user.guide');
Route::get('/terminals', [PageController::class, 'Terminals'])->name('user.terminals');
Route::get('/localproducts', [PageController::class, 'LocalProducts'])->name('user.localproducts');
Route::get('/localpersonalities', [PageController::class, 'LocalPersonalities'])->name('user.LocalPersonalities');
Route::get('/attractions', [PageController::class, 'Attractions'])->name('user.attractions');
Route::get('/attractiondetails', [PageController::class, 'AttractionDetails'])->name('user.attractiondetails');
Route::get('/contact', [PageController::class, 'ContactUs'])->name('user.contact');
Route::get('/events', [PageController::class, 'Events'])->name('user.events');
Route::get('/eventsingle', [PageController::class, 'EventsSingle'])->name('user.EventsSingle');
Route::get('/socialwall', [PageController::class, 'SocialWall'])->name('user.socialwall');
Route::get('/pakilguide', [PageController::class, 'PakilGuide'])->name('user.pakilguide');
Route::get('/rewardshop', [PageController::class, 'RewardShop'])->name('user.rewardshop');
Route::get('/establishments', [PageController::class, 'Establishments'])->name('user.establishments');
