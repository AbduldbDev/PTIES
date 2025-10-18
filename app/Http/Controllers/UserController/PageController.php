<?php

namespace App\Http\Controllers\UserController;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\CMSBanner;
use App\Models\ContentPromotional;
use App\Models\CMSContent;
use App\Models\Events;
use App\Models\SocialWall;
use App\Models\Rewards;

class PageController extends Controller
{
    protected function parseContentValue($value)
    {
        $decoded = json_decode($value, true);
        return (json_last_error() === JSON_ERROR_NONE) ? $decoded : $value;
    }

    public function Home()
    {
        $contents = CMSContent::where('page_key', "home_page")
            ->orderBy('section_key')
            ->orderBy('content_key')
            ->get();

        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }
        $promvid = ContentPromotional::first();

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

        $events = Events::latest()->take(3)->get();
        return Inertia::render('User/Pages/Home', [
            'content' => $pageData['sections'] ?? [],
            'promvid' => $promvid,
            'topPost' =>  $TopPost,
            'events' =>  $events,
        ]);
    }

    public function terms()
    {
        return Inertia::render('User/Pages/Terms');
    }

    public function policy()
    {
        return Inertia::render('User/Pages/Policy');
    }
}
