<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CmsContent;
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
        $contents = CmsContent::where('page_key', "home_page")
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
        $contents = CmsContent::where('page_key', "home_page")
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
        $contents = CmsContent::where('page_key', "about_page")
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
        $contents = CmsContent::where('page_key', "about_page")
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
        $contents = CmsContent::where('page_key', "explore_pakil")
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
        $contents = CmsContent::where('page_key', "about_page")
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
}
