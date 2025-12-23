<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CMSContent;
use Inertia\Inertia;


class CMScontroller extends Controller
{
    protected function parseContentValue($value)
    {
        $decoded = json_decode($value, true);
        return (json_last_error() === JSON_ERROR_NONE) ? $decoded : $value;
    }

    public function HeroSection()
    {
        $contents = CMSContent::where('page_key', "home_page")
            ->where('section_key', 'hero')
            ->orderBy('content_key')
            ->get();


        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        return Inertia::render('Admin/Pages/CMS/HeroSection', [
            'content' => $pageData['sections'] ?? []
        ]);
    }

    public function IntroductionSection()
    {
        $contents = CMSContent::where('page_key', "home_page")
            ->where('section_key', 'introduction_section')
            ->orderBy('content_key')
            ->get();


        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        return Inertia::render('Admin/Pages/CMS/IntroSection', [
            'content' => $pageData['sections'] ?? []
        ]);
    }

    public function TourismSection()
    {
        $contents = CMSContent::where('page_key', "about_page")
            ->where('section_key', 'about')
            ->orderBy('content_key')
            ->get();


        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        return Inertia::render('Admin/Pages/CMS/TourismAbout', [
            'content' => $pageData['sections'] ?? []
        ]);
    }

    public function MissionVision()
    {
        $contents = CMSContent::where('page_key', "about_page")
            ->where('section_key', 'mission_vision')
            ->orderBy('content_key')
            ->get();


        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        return Inertia::render('Admin/Pages/CMS/MissionVision', [
            'content' => $pageData['sections'] ?? []
        ]);
    }

    public function PakilIntro()
    {
        $contents = CMSContent::where('page_key', "explore_pakil")
            ->where('section_key', 'introduction')
            ->orderBy('content_key')
            ->get();


        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        return Inertia::render('Admin/Pages/CMS/AboutIntro', [
            'content' => $pageData['sections'] ?? []
        ]);
    }

    public function CitizenCharter()
    {
        $contents = CMSContent::where('page_key', "about_page")
            ->where('section_key', 'citizen_charter')
            ->orderBy('content_key')
            ->get();


        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        return Inertia::render('Admin/Pages/CMS/CitizenCharter', [
            'content' => $pageData['sections'] ?? []
        ]);
    }

    public function MunicipalStats()
    {
        $contents = CMSContent::where('page_key', "explore_pakil")
            ->where('section_key', 'municipal_stats')
            ->orderBy('content_key')
            ->get();


        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        return Inertia::render('Admin/Pages/CMS/MunicipalStats', [
            'content' => $pageData['sections'] ?? []
        ]);
    }

    public function FestivalSection()
    {
        $contents = CMSContent::where('page_key', "explore_pakil")
            ->where('section_key', 'festival')
            ->orderBy('content_key')
            ->get();


        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        return Inertia::render('Admin/Pages/CMS/FestivalSection', [
            'content' => $pageData['sections'] ?? []
        ]);
    }
}
