<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController\{
    PageController,
    ContactUsController,
    ProfileController,
    SocialWallController,
    AboutUsController,
    ExploreController,
    EventsController,
    NewsletterController,
    RewardsController,
    UserGamificationController,
    MarketPlaceController
};
use App\Http\Controllers\SellerController\SellerPageController;
use App\Http\Controllers\SellerController\SellerRegistration;
use App\Http\Controllers\SellerController\ProductManagementController;

Route::middleware('user.access:auth')->group(function () {
    Route::prefix('/socialwall')->name('user.socialwall.')->group(function () {
        Route::get('/new', [SocialWallController::class, 'new'])->name('create');
        Route::get('/confirmation', [SocialWallController::class, 'confirmation'])->name('confirmation');
        Route::post('/upload', [SocialWallController::class, 'store'])->name('store');
        Route::post('/like', [SocialWallController::class, 'toggleLike'])->name('toggleLike');
    });

    Route::get('profile', [ProfileController::class, 'index'])->name('user.profile.index');
    Route::post('profile/update/{id}', [ProfileController::class, 'update'])->name('user.profile.update');

    Route::post('/gamification/redeem', [UserGamificationController::class, 'redeem'])->name('gamification.redeem');
    Route::get('/gamification/confirmation', [UserGamificationController::class, 'confirmation'])->name('gamification.confirmation');
    Route::get('/gamification/rejected', [UserGamificationController::class, 'reject'])->name('gamification.reject');
    Route::post('/reward/redeem', [RewardsController::class, 'redeem'])->name('rewards.redeem');

    Route::get('/seller/dashboard', [SellerPageController::class, 'dashboard'])->name('seller.dashboard');
    Route::get('/seller/registration', [SellerPageController::class, 'registration']);
    Route::post('/seller/registration/submit', [SellerRegistration::class, 'store']);
    Route::get('/seller/registration/confirmation', [SellerRegistration::class, 'confirmation'])->name('seller.confirmation');

    Route::post('/seller/product/new', [ProductManagementController::class, 'new']);

    Route::post('/seller/products/create', [ProductManagementController::class, 'store']);
    Route::get('/seller/products/confirmation', [ProductManagementController::class, 'confirmation'])->name('sellerproducts.confirmation');


    Route::post('/seller/shop/update/{id}', [SellerRegistration::class, 'update']);
});
Route::get('/', [PageController::class, 'Home'])->name('user.home');

Route::get('/reward-shop', [RewardsController::class, 'index'])->name('rewards.index');
Route::get('/gamification/{id}', [UserGamificationController::class, 'details'])->name('gamification.details');

Route::prefix('/contact')->name('user.contact.')->group(function () {
    Route::get('/', [ContactUsController::class, 'ContactUs'])->name('index');
    Route::get('/confirmation', [ContactUsController::class, 'confirmation'])->name('confirmation');
    Route::post('/send', [ContactUsController::class, 'send'])->name('send');
});

Route::prefix('/about')->name('user.')->group(function () {
    Route::get('/tourism', [AboutUsController::class, 'AboutTourism'])->name('tourism');
    Route::get('/officials', [AboutUsController::class, 'KeyOfficials'])->name('officials');
    Route::get('/biography/{id}', [AboutUsController::class, 'OfficialBio'])->name('biography');
    Route::get('/past-mayor', [AboutUsController::class, 'PastMayors'])->name('PastMayors');
});

Route::prefix('/explore')->name('explore.')->group(function () {
    Route::get('/about', [ExploreController::class, 'About'])->name('about');
    Route::get('/local-products', [ExploreController::class, 'LocalProducts'])->name('localproducts');
    Route::get('/local-personalities', [ExploreController::class, 'LocalPersonalities'])->name('localpersonalities');
    Route::get('/attractions', [ExploreController::class, 'Attractions'])->name('attractions');
    Route::get('/attraction-details/{id}', [ExploreController::class, 'AttractionDetails'])->name('attractiondetails');
    Route::get('/guide', [ExploreController::class, 'Guide'])->name('guide');
    Route::get('/terminals', [ExploreController::class, 'Terminals'])->name('terminals');
    Route::get('/establishments', [ExploreController::class, 'Establishments'])->name('establishments');
});

Route::prefix('/events')->name('events.')->group(function () {
    Route::get('/', [EventsController::class, 'Events'])->name('events');
    Route::get('/details/{id}', [EventsController::class, 'EventsSingle'])->name('eventssingle');
    Route::get('/socialwall', [EventsController::class, 'SocialWall'])->name('socialwall');
});

Route::prefix('/newsletter')->name('newsletter.')->group(function () {
    Route::post('/subscribe', [NewsletterController::class, 'subscribe'])->name('newsletter.subscribe');
    Route::get('/confirmation', [NewsletterController::class, 'confirmation'])->name('newsletter.confirmation');
});

Route::get('/pakil-guide', [ExploreController::class, 'PakilGuide'])->name('pakilguide');
Route::get('/seller/terms', [SellerPageController::class, 'terms']);



Route::get('/localmarket', [MarketPlaceController::class, 'index']);
Route::get('/localmarket/product/{id}', [MarketPlaceController::class, 'productdetails']);
Route::get('/explore/scanner', [UserGamificationController::class, 'scanner'])->name('users.scanner');
