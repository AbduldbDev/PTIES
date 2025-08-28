<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CMSBanner;
use App\Models\ContentPromotional;
use App\Models\CmsContent;
use App\Models\FAQs;
use App\Models\PakilEstablishments;
use App\Models\PakilGuides;
use App\Models\PakilHistory;
use App\Models\PakilHotlines;
use App\Models\PakilTerminals;

class PageController extends Controller
{
    protected function parseContentValue($value)
    {
        $decoded = json_decode($value, true);
        return (json_last_error() === JSON_ERROR_NONE) ? $decoded : $value;
    }


    public function Home()
    {
        $contents = CmsContent::where('page_key', "home_page")
            ->orderBy('section_key')
            ->orderBy('content_key')
            ->get();

        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }
        $promvid = ContentPromotional::first();
        return Inertia::render('User/Pages/Home', [
            'content' => $pageData['sections'] ?? [],
            'promvid' => $promvid,
        ]);
    }


    public function About()
    {
        $contents = CmsContent::where('page_key', "explore_pakil")
            ->orderBy('section_key')
            ->orderBy('content_key')
            ->get();

        $history = PakilHistory::get();

        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        $banner = CMSBanner::where('key', 'About Pakil')->first();
        return Inertia::render('User/Pages/About', [
            'banner' => $banner,
            'content' => $pageData['sections'] ?? [],
            'history' => $history,
        ]);
    }

    public function AboutTourism()
    {
        $contents = CmsContent::where('page_key', "about_page")
            ->orderBy('section_key')
            ->orderBy('content_key')
            ->get();

        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        $banner = CMSBanner::where('key', 'About Tourism')->first();
        return Inertia::render('User/Pages/Tourism', [
            'banner' => $banner,
            'content' => $pageData['sections'] ?? [],
        ]);
    }

    public function KeyOfficials()
    {
        $banner = CMSBanner::where('key', 'Key Officials')->first();
        return Inertia::render('User/Pages/Officials', [
            'banner' => $banner,
        ]);
    }

    public function OfficialBio()
    {
        $banner = CMSBanner::where('key', 'Key Officials')->first();
        return Inertia::render('User/Pages/Biography', [
            'banner' => $banner,
        ]);
    }

    public function Guide()
    {
        $banner = CMSBanner::where('key', 'Pakil Guide')->first();

        $food = PakilEstablishments::where('type', 'food')
            ->inRandomOrder()
            ->limit(8)
            ->get();


        $accommodation = PakilEstablishments::where('type', 'accommodation')
            ->inRandomOrder()
            ->limit(8)
            ->get();

        return Inertia::render('User/Pages/Guide', [
            'banner' => $banner,
            'food' => $food,
            'accommodation' => $accommodation,
        ]);
    }

    public function terminals()
    {
        $banner = CMSBanner::where('key', 'Terminals')->first();

        $terminals = PakilTerminals::get()->map(function ($terminal) {
            $terminal->routes = $this->parseContentValue($terminal->routes);
            return $terminal;
        });

        return Inertia::render('User/Pages/Terminals', [
            'banner' => $banner,
            'terminals' => $terminals,
        ]);
    }

    public function LocalProducts()
    {
        $banner = CMSBanner::where('key', 'Local Products')->first();
        return Inertia::render('User/Pages/LocalProducts', [
            'banner' => $banner,
        ]);
    }

    public function LocalPersonalities()
    {
        $banner = CMSBanner::where('key', 'Local Products')->first();
        return Inertia::render('User/Pages/LocalPersonalities', [
            'banner' => $banner,
        ]);
    }

    public function Attractions()
    {
        $banner = CMSBanner::where('key', 'Attractions')->first();
        return Inertia::render('User/Pages/Attractions', [
            'banner' => $banner,
        ]);
    }

    public function AttractionDetails()
    {

        return Inertia::render('User/Pages/AttractionDetails');
    }

    public function ContactUs()
    {
        $banner = CMSBanner::where('key', 'Contact Us')->first();
        $guide = PakilGuides::get();
        $hotlines = PakilHotlines::get();
        $faqs = FAQs::get();

        return Inertia::render('User/Pages/Contact', [
            'banner' => $banner,
            'guide' => $guide,
            'hotlines' => $hotlines,
            'faqs' => $faqs,
        ]);
    }

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
        return Inertia::render('User/Pages/socialwall', [
            'banner' => $banner,
        ]);
    }

    public function PakilGuide()
    {
        $banner = CMSBanner::where('key', 'Rewards')->first();
        return Inertia::render('User/Pages/Pakilguide', [
            'banner' => $banner,
        ]);
    }

    public function RewardShop()
    {
        $banner = CMSBanner::where('key', 'Rewards')->first();
        return Inertia::render('User/Pages/rewardshop', [
            'banner' => $banner,
        ]);
    }

    public function Profile()
    {
        $banner = CMSBanner::where('key', 'Profile Section')->first();
        return Inertia::render('User/Pages/Profile', [
            'banner' => $banner,
        ]);
    }

    public function Establishments()
    {
        $banner = CMSBanner::where('key', 'Pakil Establishments')->first();
        $establishments = PakilEstablishments::inRandomOrder()->get();

        return Inertia::render('User/Pages/Establishments', [
            'banner' => $banner,
            'establishments' => $establishments,

        ]);
    }
}
