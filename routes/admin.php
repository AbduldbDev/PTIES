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
    Route::get('/Admin/Login', [AdminLoginController::class, 'showLoginForm'])->name('admin.homes');
    Route::post('/Admin/Login', [AdminLoginController::class, 'login'])->name('admin.login');
});

Route::middleware('admin.access:auth')->group(function () {
    Route::get('/Admin', [AccountManagementController::class, 'app'])->name('account.management.app');
    Route::get('/Admin/Profile', [AdminProfileController::class, 'Profile'])->name('account.management.settings');
    Route::post('/Admin/Logout', [AdminLoginController::class, 'logout'])->name('admin.login');

    Route::get('/Admin/Accounts', [AccountManagementController::class, 'index'])->name('account.management.index');
    Route::get('/Admin/Accounts/New', [AccountManagementController::class, 'form'])->name('account.management.form');
    Route::post('/Admin/Accounts/update', [AccountManagementController::class, 'update'])->name('account.management.update');
    Route::get('/Admin/Accounts/Edit/{id}', [AccountManagementController::class, 'edit'])->name('account.management.form');
    Route::delete('/Admin/Accounts/Delete/{id}', [AccountManagementController::class, 'delete'])->name('account.management.delete');
    Route::post('/Admin/Accounts/create', [AccountManagementController::class, 'create'])->name('account.management.create');

    Route::get('/Admin/Settings/Website', [WebsiteSettingsController::class, 'settings'])->name('account.management.settings');
    Route::post('/Admin/Settings/Color/Update', [WebsiteSettingsController::class, 'updateSettings'])->name('account.management.updateSettings');

    Route::get('/Admin/Content/PromotionalVid', [PromotionalvidController::class, 'view'])->name('banners.edit');
    Route::post('/Admin/Content/PromotionalVid/Update', [PromotionalvidController::class, 'update'])->name('banners.update');

    Route::get('/Admin/CMS/Banners', [BannerController::class, 'index'])->name('banners.index');
    Route::get('/Admin/CMS/Banner/Edit/{id}', [BannerController::class, 'edit'])->name('banners.edit');
    Route::post('/Admin/CMS/banner/update', [BannerController::class, 'update'])->name('banners.update');

    Route::get('/Admin/CMS/HeroSection', [HomeCMSController::class, 'HeroSection'])->name('cms.HeroSection');
    Route::get('/Admin/CMS/IntroductionSection', [HomeCMSController::class, 'IntroductionSection'])->name('cms.HeroSection');
    Route::get('/Admin/CMS/TourismSection', [HomeCMSController::class, 'TourismSection'])->name('cms.HeroSection');
    Route::get('/Admin/CMS/MissionVision', [HomeCMSController::class, 'MissionVision'])->name('cms.HeroSection');
    Route::get('/Admin/CMS/PakilIntro', [HomeCMSController::class, 'PakilIntro'])->name('cms.PakilIntro');

    Route::post('/Admin/CMS/UpdateHeroSection', [HomeCMSController::class, 'updateHeroSection'])->name('cms.updateHeroSection');
    Route::post('/Admin/CMS/updateIntroductionSection', [HomeCMSController::class, 'updateIntroductionSection'])->name('cms.updateHeroSection');
    Route::post('/Admin/CMS/UpdateTourismAboutSection', [HomeCMSController::class, 'UpdateTourismAboutSection'])->name('cms.UpdateTourismAboutSection');
    Route::post('/Admin/CMS/UpdateMissionVision', [HomeCMSController::class, 'UpdateMissionVision'])->name('cms.UpdateTourismAboutSection');
    Route::post('/Admin/CMS/UpdatePakilIntro', [HomeCMSController::class, 'UpdatePakilIntro'])->name('cms.UpdatePakilIntro');

    Route::get('/Admin/tour-guides', [TourGuideController::class, 'index'])->name('tourguide.index');
    Route::get('/Admin/tour-guides/new', [TourGuideController::class, 'newtourguide'])->name('tourguide.new');
    Route::get('/Admin/tour-guides/edit/{id}', [TourGuideController::class, 'edit'])->name('tourguide.edit');
    Route::post('/Admin/tour-guides/update/{id}', [TourGuideController::class, 'update'])->name('guides.update');
    Route::post('/Admin/tour-guides/create', [TourGuideController::class, 'create'])->name('tourguide.create');
    Route::delete('/Admin/tour-guides/delete/{id}', [TourGuideController::class, 'delete'])->name('tourguide.delete');

    Route::get('/Admin/terminals', [TerminalController::class, 'index'])->name('terminal.index');
    Route::get('/Admin/terminals/new', [TerminalController::class, 'new'])->name('terminal.new');
    Route::get('/Admin/terminals/edit/{id}', [TerminalController::class, 'edit'])->name('terminal.edit');
    Route::post('/Admin/terminal/update/{id}', [TerminalController::class, 'update'])->name('terminal.update');
    Route::post(' /Admin/terminal/create', [TerminalController::class, 'create'])->name('terminal.create');
    Route::delete('/Admin/terminal/delete/{id}', [TerminalController::class, 'delete'])->name('terminal.delete');

    Route::get('/Admin/hotlines', [HotlinesController::class, 'index'])->name('hotlines.index');
    Route::get('/Admin/hotlines/new', [HotlinesController::class, 'new'])->name('hotlines.new');
    Route::get('/Admin/hotlines/edit/{id}', [HotlinesController::class, 'edit'])->name('hotlines.edit');
    Route::post('/Admin/hotlines/create', [HotlinesController::class, 'create'])->name('hotlines.create');
    Route::post('/Admin/hotlines/update', [HotlinesController::class, 'update'])->name('hotlines.update');
    Route::delete('/Admin/hotlines/delete/{id}', [HotlinesController::class, 'delete'])->name('hotlines.delete');
});
