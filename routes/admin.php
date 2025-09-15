<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController\AccountManagementController;
use App\Http\Controllers\AdminController\AdminProfileController;
use App\Http\Controllers\AdminController\WebsiteSettingsController;
use App\Http\Controllers\AdminController\BannerController;
use App\Http\Controllers\AdminController\BarangayInfoController;
use App\Http\Controllers\AdminController\HomeCMSController;
use App\Http\Controllers\AdminController\HotlinesController;
use App\Http\Controllers\AdminController\PromotionalvidController;
use App\Http\Controllers\AdminController\TerminalController;
use App\Http\Controllers\AdminController\TourGuideController;
use App\Http\Controllers\AdminController\CMScontroller;
use App\Http\Controllers\AdminController\CMSUpdatecontroller;
use App\Http\Controllers\AdminController\CMSHistoryController;
use App\Http\Controllers\AdminController\DepartmentMemberController;
use App\Http\Controllers\AdminController\DepartmentStructureController;
use App\Http\Controllers\AdminController\EstablishmentController;
use App\Http\Controllers\AdminController\FAQsController;
use App\Http\Controllers\AdminController\LocalPersonalitiesController;
use App\Http\Controllers\AdminController\LocalProductsController;
use App\Http\Controllers\AdminController\PostController;
use App\Http\Controllers\Auth\AdminLoginController;
use Inertia\Inertia;

Route::middleware('admin.access:guest')->group(function () {});
Route::get('/Admin/login', [AdminLoginController::class, 'showLoginForm'])->name('admin.homes');
Route::post('/Admin/login', [AdminLoginController::class, 'login'])->name('admin.login');

Route::middleware('admin.access:admin')->group(function () {
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
});


Route::middleware('admin.access:auth')->group(function () {
    Route::prefix('/Admin')->name('admin')->group(function () {
        Route::get('/', [AccountManagementController::class, 'dashboard'])->name('dashboard');
        Route::get('/profile', [AdminProfileController::class, 'profile'])->name('profile');
        Route::post('/logout', [AdminLoginController::class, 'logout'])->name('logout');
    });

    Route::prefix('/Admin/content/promotional-video')->name('promotional-video.')->group(function () {
        Route::get('/', [PromotionalvidController::class, 'view'])->name('edit');
        Route::post('/update', [PromotionalvidController::class, 'update'])->name('update');
    });

    Route::prefix('/Admin/cms')->name('cms.')->group(function () {
        Route::get('/hero-section', [CMScontroller::class, 'HeroSection'])->name('HeroSection');
        Route::get('/introduction-section', [CMScontroller::class, 'IntroductionSection'])->name('IntroductionSection');
        Route::get('/tourism-section', [CMScontroller::class, 'TourismSection'])->name('TourismSection');
        Route::get('/mission-vision', [CMScontroller::class, 'MissionVision'])->name('MissionVision');
        Route::get('/pakil-intro', [CMScontroller::class, 'PakilIntro'])->name('PakilIntro');
        Route::get('/citizen-charter', [CMScontroller::class, 'CitizenCharter'])->name('CitizenCharter');
        Route::get('/municipal-statistics', [CMScontroller::class, 'MunicipalStats'])->name('MunicipalStats');
    });

    Route::prefix('/Admin/cms/update')->name('cms.update.')->group(function () {
        Route::post('/hero-section', [CMSUpdatecontroller::class, 'UpdateHeroSection'])->name('HeroSection');
        Route::post('/introduction-section', [CMSUpdatecontroller::class, 'UpdateIntroductionSection'])->name('IntroductionSection');
        Route::post('/tourism-about-section', [CMSUpdatecontroller::class, 'UpdateTourismAboutSection'])->name('TourismSection');
        Route::post('/mission-vision', [CMSUpdatecontroller::class, 'UpdateMissionVision'])->name('MissionVision');
        Route::post('/pakil-intro', [CMSUpdatecontroller::class, 'UpdatePakilIntro'])->name('PakilIntro');
        Route::post('/citizen-charter', [CMSUpdatecontroller::class, 'CitizenCharter'])->name('CitizenCharter');
        Route::post('/municipal-statistics', [CMSUpdatecontroller::class, 'UpdateMunicipalStats'])->name('UpdateMunicipalStats');
    });

    Route::prefix('/Admin/cms/banner')->name('banners.')->group(function () {
        Route::get('/', [BannerController::class, 'index'])->name('index');
        Route::get('/edit/{id}', [BannerController::class, 'edit'])->name('edit');
        Route::post('/update', [BannerController::class, 'update'])->name('update');
    });

    Route::prefix('/Admin/cms/pakil-history')->name('cms.history.')->group(function () {
        Route::get('/', [CMSHistoryController::class, 'index'])->name('index');
        Route::get('/new', [CMSHistoryController::class, 'new'])->name('new');
        Route::get('/edit/{id}', [CMSHistoryController::class, 'edit'])->name('edit');
        Route::post('/create', [CMSHistoryController::class, 'create'])->name('create');
        Route::post('/update/{id}', [CMSHistoryController::class, 'update'])->name('update');
        Route::delete('/delete/{id}', [CMSHistoryController::class, 'delete'])->name('delete');
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

    Route::prefix('/Admin/establishment')->name('establishment.')->group(function () {
        Route::get('/', [EstablishmentController::class, 'index'])->name('index');
        Route::get('/new', [EstablishmentController::class, 'new'])->name('new');
        Route::get('/edit/{id}', [EstablishmentController::class, 'edit'])->name('edit');
        Route::post('/create', [EstablishmentController::class, 'create'])->name('create');
        Route::post('/update/{id}', [EstablishmentController::class, 'update'])->name('update');
        Route::delete('/delete/{id}', [EstablishmentController::class, 'delete'])->name('delete');
    });

    Route::prefix('/Admin/faqs')->name('faqs.')->group(function () {
        Route::get('/', [FAQsController::class, 'index'])->name('index');
        Route::get('/new', [FAQsController::class, 'new'])->name('new');
        Route::get('/edit/{id}', [FAQsController::class, 'edit'])->name('edit');
        Route::post('/create', [FAQsController::class, 'create'])->name('create');
        Route::post('/update/{id}', [FAQsController::class, 'update'])->name('update');
        Route::delete('/delete/{id}', [FAQsController::class, 'delete'])->name('delete');
    });

    Route::prefix('/Admin/barangay-info')->name('barangayinfo.')->group(function () {
        Route::get('/', [BarangayInfoController::class, 'index'])->name('index');
        Route::get('/new', [BarangayInfoController::class, 'new'])->name('new');
        Route::get('/edit/{id}', [BarangayInfoController::class, 'edit'])->name('edit');
        Route::post('/create', [BarangayInfoController::class, 'create'])->name('create');
        Route::post('/update/{id}', [BarangayInfoController::class, 'update'])->name('update');
        Route::delete('/delete/{id}', [BarangayInfoController::class, 'delete'])->name('delete');
    });

    Route::prefix('/Admin/local-personalities')->name('localproducts.')->group(function () {
        Route::get('/', [LocalPersonalitiesController::class, 'index'])->name('index');
        Route::get('/new', [LocalPersonalitiesController::class, 'new'])->name('new');
        Route::get('/edit/{id}', [LocalPersonalitiesController::class, 'edit'])->name('edit');
        Route::post('/create', [LocalPersonalitiesController::class, 'create'])->name('create');
        Route::post('/update/{id}', [LocalPersonalitiesController::class, 'update'])->name('update');
        Route::delete('/delete/{id}', [LocalPersonalitiesController::class, 'delete'])->name('delete');
    });

    Route::prefix('/Admin/local-products')->name('localproducts.')->group(function () {
        Route::get('/', [LocalProductsController::class, 'index'])->name('index');
        Route::get('/new', [LocalProductsController::class, 'new'])->name('new');
        Route::get('/edit/{id}', [LocalProductsController::class, 'edit'])->name('edit');
        Route::post('/create', [LocalProductsController::class, 'create'])->name('create');
        Route::post('/update/{id}', [LocalProductsController::class, 'update'])->name('update');
        Route::delete('/delete/{id}', [LocalProductsController::class, 'delete'])->name('delete');
    });

    Route::prefix('/Admin/social-wall')->name('socailwall.')->group(function () {
        Route::get('/pending', [PostController::class, 'pending'])->name('pending');
        Route::get('/approved', [PostController::class, 'approved'])->name('approved');
        Route::get('/rejected', [PostController::class, 'rejected'])->name('rejected');
        Route::get('/view/{id}', [PostController::class, 'view'])->name('view');
        Route::post('/approve/{id}', [PostController::class, 'approve'])->name('approve');
        Route::post('/reject/{id}', [PostController::class, 'reject'])->name('reject');
        Route::delete('/delete/{id}', [PostController::class, 'delete'])->name('delete');
    });

    Route::prefix('/Admin/structure/department')->name('departments.')->group(function () {
        Route::get('/', [DepartmentStructureController::class, 'index'])->name('index');
        Route::get('/new', [DepartmentStructureController::class, 'new'])->name('new');
        Route::get('/edit/{id}', [DepartmentStructureController::class, 'edit'])->name('edit');
        Route::post('/create', [DepartmentStructureController::class, 'create'])->name('create');
        Route::post('/update/{id}', [DepartmentStructureController::class, 'update'])->name('update');
        Route::delete('/delete/{id}', [DepartmentStructureController::class, 'delete'])->name('delete');
    });

    Route::prefix('/Admin/structure/members')->name('deptstructure.')->group(function () {
        Route::get('/', [DepartmentMemberController::class, 'index'])->name('index');
        Route::get('/new', [DepartmentMemberController::class, 'new'])->name('new');
        Route::get('/edit/{id}', [DepartmentMemberController::class, 'edit'])->name('edit');
        Route::post('/create', [DepartmentMemberController::class, 'create'])->name('create');
        Route::post('/update/{id}', [DepartmentMemberController::class, 'update'])->name('update');
        Route::delete('/delete/{id}', [DepartmentMemberController::class, 'delete'])->name('delete');
    });
});
