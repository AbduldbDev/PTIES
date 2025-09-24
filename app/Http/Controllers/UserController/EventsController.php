<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CMSBanner;
use App\Models\Events;
use App\Models\SocialWall;
use Illuminate\Console\Scheduling\Event;
use Illuminate\Support\Facades\Log;

class EventsController extends Controller
{
    protected function parseContentValue($value)
    {
        $decoded = json_decode($value, true);
        return (json_last_error() === JSON_ERROR_NONE) ? $decoded : $value;
    }

    public function Events()
    {
        $banner = CMSBanner::where('key', 'Events')->first();
        $events = Events::get();

        return Inertia::render('User/Pages/Events', [
            'banner' => $banner,
            'items' => $events,
        ]);
    }

    public function EventsSingle($id)
    {
        $event = Events::findOrFail($id);
        $event->schedules = $this->parseContentValue($event->schedules);
        return Inertia::render('User/Pages/EventsSingle', [
            'event' => $event,
        ]);
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
