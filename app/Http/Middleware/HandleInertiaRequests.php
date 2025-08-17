<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'cookieConsent' => $request->cookie('cookie_consent'),
            'auth' => [
                'user' => $request->user() ? [
                    'image' => $request->user()->avatar,
                    'email' => $request->user()->email,
                    'profile' => $request->user()->profile ? [
                        'first_name' => $request->user()->profile->first_name,
                        'middle_name' => $request->user()->profile->middle_name,
                        'last_name' => $request->user()->profile->last_name,
                    ] : null
                ] : null,
            ],

            // Filter Ziggy routes based on user role
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                    'routes' => $this->filterRoutes($request),
                ]);
            },

            'flash' => [
                'success' => fn() => $request->session()->get('success'),
                'error' => fn() => $request->session()->get('error'),

            ],

            'errors' => fn() => $request->session()->get('errors')
                ? $request->session()->get('errors')->getBag('default')->getMessages()
                : (object) [],
        ]);
    }

    protected function filterRoutes(Request $request)
    {
        // $allRoutes = Ziggy::getRoutes();

        // if ($request->user()?->isAdmin()) {
        //     return $allRoutes; // Admins see all routes
        // }

        // return array_filter($allRoutes, function ($route, $key) {
        //     // Allow only public routes
        //     return !str_starts_with($key, 'admin.')
        //         && !str_starts_with($route['uri'], 'admin/');
        // }, ARRAY_FILTER_USE_BOTH);
    }
}
