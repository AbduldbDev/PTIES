<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use App\Models\LocalMarketSeller; // Add this import

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
        // Check if user is a seller
        $isSeller = false;
        if ($request->user()) {
            $isSeller = LocalMarketSeller::where('user_id', $request->user()->id)->where('status', 1)->exists();
        }

        return array_merge(parent::share($request), [
            'cookieConsent' => $request->cookie('cookie_consent'),
            'auth' => [
                'user' => $request->user() ? [
                    'id' => $request->user()->id,
                    'image' => $request->user()->avatar,
                    'user_type' => $request->user()->user_type,
                    'email' => $request->user()->email,
                    'pakil_points' => $request->user()->pakil_points,
                    'profile' => $this->getUserProfileData($request->user()),
                    'is_seller' => $isSeller,
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

    private function getUserProfileData($user)
    {
        if (!$user) {
            return null;
        }

        switch ($user->user_type) {
            case 'admin':
            case 'employee':
                $profile = $user->profile;
                break;
            case 'user':
                $profile = $user->userProfile;
                break;
            case 'seller':
                $profile = $user->sellerProfile;
                break;
            default:
                $profile = null;
        }

        if (!$profile) {
            return null;
        }

        return [
            'first_name' => $profile->first_name ?? null,
            'middle_name' => $profile->middle_name ?? null,
            'last_name' => $profile->last_name ?? null,
        ];
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
