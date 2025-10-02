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
    UserGamificationController
};

Route::middleware('user.access:auth')->group(function () {
    Route::prefix('/socialwall')->name('user.socialwall.')->group(function () {
        Route::get('/new', [SocialWallController::class, 'new'])->name('create');
        Route::get('/confirmation', [SocialWallController::class, 'confirmation'])->name('confirmation');
        Route::post('/upload', [SocialWallController::class, 'store'])->name('store');
        Route::post('/like', [SocialWallController::class, 'toggleLike'])->name('toggleLike');
    });

    Route::get('profile', [ProfileController::class, 'index'])->name('user.profile.index');
    Route::post('profile/update/{id}', [ProfileController::class, 'update'])->name('user.profile.update');
});

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

Route::prefix('/explore')->name('user.')->group(function () {
    Route::get('/about', [ExploreController::class, 'About'])->name('about');
    Route::get('/local-products', [ExploreController::class, 'LocalProducts'])->name('localproducts');
    Route::get('/local-personalities', [ExploreController::class, 'LocalPersonalities'])->name('localpersonalities');
    Route::get('/attractions', [ExploreController::class, 'Attractions'])->name('attractions');
    Route::get('/attraction-details/{id}', [ExploreController::class, 'AttractionDetails'])->name('attractiondetails');
    Route::get('/guide', [ExploreController::class, 'Guide'])->name('guide');
    Route::get('/terminals', [ExploreController::class, 'Terminals'])->name('terminals');
    Route::get('/establishments', [ExploreController::class, 'Establishments'])->name('establishments');
});

Route::prefix('/events')->name('user.')->group(function () {
    Route::get('/', [EventsController::class, 'Events'])->name('events');
    Route::get('/details/{id}', [EventsController::class, 'EventsSingle'])->name('eventssingle');
    Route::get('/socialwall', [EventsController::class, 'SocialWall'])->name('socialwall');
});

Route::get('/pakil-guide', [ExploreController::class, 'PakilGuide'])->name('pakilguide');
Route::get('/reward-shop', [PageController::class, 'RewardShop'])->name('user.rewardshop');

Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe'])->name('newsletter.subscribe');
Route::get('/newsletter/confirmation', [NewsletterController::class, 'confirmation'])->name('newsletter.confirmation');
Route::get('/', [PageController::class, 'Home'])->name('user.home');

Route::get('/explore/scanner', [UserGamificationController::class, 'scanner'])->name('users.scanner');
