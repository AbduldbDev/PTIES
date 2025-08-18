<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CMSBanner;

class PageController extends Controller
{
    public function Home()
    {
        return Inertia::render('User/Pages/Home');
    }

    public function About()
    {
        $banner = CMSBanner::where('key', 'about')->first();
        return Inertia::render('User/Pages/About', [
            'banner' => $banner,
        ]);
    }

    public function AboutTourism()
    {
        return Inertia::render('User/Pages/Tourism');
    }

    public function KeyOfficials()
    {
        return Inertia::render('User/Pages/Officials');
    }

    public function OfficialBio()
    {
        return Inertia::render('User/Pages/Biography');
    }

    public function Guide()
    {
        return Inertia::render('User/Pages/Guide');
    }

    public function Terminals()
    {
        return Inertia::render('User/Pages/Terminals');
    }

    public function LocalProducts()
    {
        return Inertia::render('User/Pages/LocalProducts');
    }

    public function Attractions()
    {
        $banner = CMSBanner::where('key', 'attractions')->first();
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
        $banner = CMSBanner::where('key', 'contact')->first();
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
        $banner = CMSBanner::where('key', 'contact')->first();
        return Inertia::render('User/Pages/EventsSingle', [
            'banner' => $banner,
        ]);
    }

    public function SocialWall()
    {
        $banner = CMSBanner::where('key', 'contact')->first();
        return Inertia::render('User/Pages/socialwall', [
            'banner' => $banner,
        ]);
    }
}
