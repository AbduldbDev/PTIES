<?php

namespace App\Http\Controllers\UserController;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\BarangayInfo;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CMSBanner;
use App\Models\ContentPromotional;
use App\Models\CMSContent;
use App\Models\Department;
use App\Models\FAQs;
use App\Models\PakilEstablishments;
use App\Models\PakilGuides;
use App\Models\PakilHistory;
use App\Models\PakilHotlines;
use App\Models\PakilTerminals;
use App\Models\LocalPersonalities;
use App\Models\LocalProducts;
use App\Models\Officials;
use App\Models\SocialWall;

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

        return Inertia::render('User/Pages/Home', [
            'content' => $pageData['sections'] ?? [],
            'promvid' => $promvid,
            'topPost' =>  $TopPost,
        ]);
    }


    public function RewardShop()
    {
        $banner = CMSBanner::where('key', 'Rewards')->first();
        return Inertia::render('User/Pages/rewardshop', [
            'banner' => $banner,
        ]);
    }
}
