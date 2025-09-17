<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CMSBanner;
use App\Models\SocialWall;
use Illuminate\Support\Facades\Log;

class EventsController extends Controller
{
    public function Events()
    {
        $banner = CMSBanner::where('key', 'Events')->first();
        return Inertia::render('User/Pages/Events', [
            'banner' => $banner,
        ]);
    }

    public function EventsSingle()
    {

        return Inertia::render('User/Pages/EventsSingle');
    }

    public function SocialWall()
    {
        $banner = CMSBanner::where('key', 'Social Wall')->first();


        $items = SocialWall::with([
            'user:id,avatar',
            'profile:user_id,first_name'
        ])->where('is_approved', 1)
            ->withCount('likes')
            ->with(['likes' => function ($q) {
                $q->where('user_id', Auth::id());
            }])
            ->get()
            ->map(function ($item) {
                $item->has_liked = $item->likes->isNotEmpty();
                unset($item->likes);
                return $item;
            });

        $TopPost = SocialWall::with([
            'user:id,avatar',
            'profile:user_id,first_name'
        ])->where('is_approved', 1)
            ->withCount('likes')
            ->with(['likes' => function ($q) {
                $q->where('user_id', Auth::id());
            }])
            ->orderByDesc('likes_count')
            ->first();


        Log::info('Top post:', (array) $TopPost->toArray());



        if ($TopPost) {
            $TopPost->has_liked = $TopPost->likes->isNotEmpty();
            unset($TopPost->likes);
        }

        return Inertia::render('User/Pages/socialwall', [
            'banner' => $banner,
            'items' => $items,
            'topPost' => $TopPost,
        ]);
    }
}
