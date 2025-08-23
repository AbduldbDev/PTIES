<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController\AccountManagementController;
use App\Http\Controllers\AdminController\AdminProfileController;
use App\Http\Controllers\AdminController\WebsiteSettingsController;
use App\Http\Controllers\AdminController\BannerController;
use App\Http\Controllers\AdminController\HomeCMSController;
use App\Http\Controllers\AdminController\HotlinesController;
use App\Http\Controllers\AdminController\PromotionalvidController;
use App\Http\Controllers\AdminController\TerminalController;
use App\Http\Controllers\AdminController\TourGuideController;
use App\Http\Controllers\Auth\AdminLoginController;
use Inertia\Inertia;




Route::middleware('admin.access:guest')->group(function () {
    Route::get('/Admin/login', [AdminLoginController::class, 'showLoginForm'])->name('admin.homes');
    Route::post('/Admin/login', [AdminLoginController::class, 'login'])->name('admin.login');
});

Route::middleware('admin.access:auth')->group(function () {
    Route::prefix('/Admin')->name('admin')->group(function () {
        Route::get('/', [AccountManagementController::class, 'dashboard'])->name('dashboard');
        Route::get('/profile', [AdminProfileController::class, 'profile'])->name('profile');
        Route::post('/logout', [AdminLoginController::class, 'logout'])->name('logout');
    });

    Route::prefix('/Admin/accounts')->name('account.management.')->group(function () {
        Route::get('/', [AccountManagementController::class, 'index'])->name('index');
        Route::get('/new', [AccountManagementController::class, 'new'])->name('new');
        Route::get('/edit/{id}', [AccountManagementController::class, 'edit'])->name('edit');
        Route::post('/update', [AccountManagementController::class, 'update'])->name('update');
        Route::post('/create', [AccountManagementController::class, 'create'])->name('create');
        Route::delete('/delete/{id}', [AccountManagementController::class, 'delete'])->name('delete');
    });

    Route::prefix('/Admin/theme/color')->name('theme.color.')->group(function () {
        Route::get('/', [WebsiteSettingsController::class, 'settings'])->name('index');
        Route::post('/update', [WebsiteSettingsController::class, 'updateSettings'])->name('update');
    });

    Route::prefix('/Admin/content/promotional-video')->name('promotional-video.')->group(function () {
        Route::get('/', [PromotionalvidController::class, 'view'])->name('edit');
        Route::post('/update', [PromotionalvidController::class, 'update'])->name('update');
    });

    Route::prefix('/Admin/cms')->name('cms.')->group(function () {
        Route::get('/hero-section', [HomeCMSController::class, 'HeroSection'])->name('HeroSection');
        Route::get('/introduction-section', [HomeCMSController::class, 'IntroductionSection'])->name('IntroductionSection');
        Route::get('/tourism-section', [HomeCMSController::class, 'TourismSection'])->name('TourismSection');
        Route::get('/mission-vision', [HomeCMSController::class, 'MissionVision'])->name('MissionVision');
        Route::get('/pakil-intro', [HomeCMSController::class, 'PakilIntro'])->name('PakilIntro');
    });

    Route::prefix('/Admin/cms/update')->name('cms.update.')->group(function () {
        Route::post('/hero-section', [HomeCMSController::class, 'updateHeroSection'])->name('HeroSection');
        Route::post('/introduction-section', [HomeCMSController::class, 'updateIntroductionSection'])->name('IntroductionSection');
        Route::post('/tourism-about-section', [HomeCMSController::class, 'UpdateTourismAboutSection'])->name('TourismSection');
        Route::post('/mission-vision', [HomeCMSController::class, 'UpdateMissionVision'])->name('MissionVision');
        Route::post('/pakil-intro', [HomeCMSController::class, 'UpdatePakilIntro'])->name('PakilIntro');
    });

    Route::prefix('/Admin/cms/banner')->name('banners.')->group(function () {
        Route::get('/', [BannerController::class, 'index'])->name('index');
        Route::get('/edit/{id}', [BannerController::class, 'edit'])->name('edit');
        Route::post('/update', [BannerController::class, 'update'])->name('update');
    });

    Route::prefix('/Admin/tour-guides')->name('tourguide.')->group(function () {
        Route::get('/', [TourGuideController::class, 'index'])->name('index');
        Route::get('/new', [TourGuideController::class, 'new'])->name('new');
        Route::get('/edit/{id}', [TourGuideController::class, 'edit'])->name('edit');
        Route::post('/update/{id}', [TourGuideController::class, 'update'])->name('update');
        Route::post('/create', [TourGuideController::class, 'create'])->name('create');
        Route::delete('/delete/{id}', [TourGuideController::class, 'delete'])->name('delete');
    });

    Route::prefix('/Admin/terminal')->name('terminal.')->group(function () {
        Route::get('/', [TerminalController::class, 'index'])->name('index');
        Route::get('/new', [TerminalController::class, 'new'])->name('new');
        Route::get('/edit/{id}', [TerminalController::class, 'edit'])->name('edit');
        Route::post('/update/{id}', [TerminalController::class, 'update'])->name('update');
        Route::post('/create', [TerminalController::class, 'create'])->name('create');
        Route::delete('/delete/{id}', [TerminalController::class, 'delete'])->name('delete');
    });

    Route::prefix('/Admin/hotlines')->name('hotlines.')->group(function () {
        Route::get('/', [HotlinesController::class, 'index'])->name('index');
        Route::get('/new', [HotlinesController::class, 'new'])->name('new');
        Route::get('/edit/{id}', [HotlinesController::class, 'edit'])->name('edit');
        Route::post('/create', [HotlinesController::class, 'create'])->name('create');
        Route::post('/update/{id}', [HotlinesController::class, 'update'])->name('update');
        Route::delete('/delete/{id}', [HotlinesController::class, 'delete'])->name('delete');
    });
});
