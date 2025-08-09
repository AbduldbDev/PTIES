<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Route::middleware('web')
            ->group(base_path('routes/web.php'));

        Route::middleware('web')
            ->group(base_path('routes/user.php'));

        Route::middleware('web')
            ->group(base_path('routes/admin.php'));

        Route::middleware('api')
            ->prefix('api')
            ->group(base_path('routes/api.php'));

        Inertia::share([
            // Only share what's absolutely necessary
            'errors' => function () {
                return session()->get('errors') ?: (object) [];
            },

            // Example of safe minimal shared data
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'name' => Auth::user()->name,
                        // Never include sensitive user data here
                    ] : null,
                ];
            },
        ]);
    }
}
