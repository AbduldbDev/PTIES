<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CMSBanner;
use App\Models\ContentPromotional;
use App\Models\CmsContent;

class PageController extends Controller
{
    public function Home()
    {
        $contents = CmsContent::where('page_key', "home_page")
            ->orderBy('section_key')
            ->orderBy('content_key')
            ->get();

        // Transform to grouped structure
        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        return Inertia::render('User/Pages/Home', [
            'content' => $pageData['sections'] ?? []
        ]);
    }

    protected function parseContentValue($value)
    {
        $decoded = json_decode($value, true);
        return (json_last_error() === JSON_ERROR_NONE) ? $decoded : $value;
    }

    public function About()
    {
        $banner = CMSBanner::where('key', 'About Pakil')->first();
        return Inertia::render('User/Pages/About', [
            'banner' => $banner,
        ]);
    }

    public function AboutTourism()
    {
        $banner = CMSBanner::where('key', 'About Tourism')->first();
        return Inertia::render('User/Pages/Tourism', [
            'banner' => $banner,
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
        return Inertia::render('User/Pages/Guide', [
            'banner' => $banner,
        ]);
    }

    public function Terminals()
    {
        $banner = CMSBanner::where('key', 'Terminals')->first();
        return Inertia::render('User/Pages/Terminals', [
            'banner' => $banner,
        ]);
    }

    public function LocalProducts()
    {
        $banner = CMSBanner::where('key', 'Local Products')->first();
        return Inertia::render('User/Pages/LocalProducts', [
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
        return Inertia::render('User/Pages/Contact', [
            'banner' => $banner,
        ]);
    }

    public function Events()
    {
        $banner = CMSBanner::where('key', 'contact')->first();
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
}
