<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CmsContent;
use Illuminate\Support\Facades\Log;


class HomeCMSController extends Controller
{
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

    public function updateHeroSection(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'slogan' => 'required|string',
            'feature_title' => 'required|string|max:255',
            'feature_img' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        try {
            $fields = ['title', 'subtitle', 'slogan', 'feature_title'];

            foreach ($fields as $field) {
                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'home_page',
                        'section_key' => 'hero',
                        'content_key' => $field,
                    ],
                    [
                        'content_value' => $request->$field,
                    ]
                );
            }

            if ($request->hasFile('feature_img')) {
                $path = $request->file('feature_img')->store('CMSBanner', 'public');

                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'home_page',
                        'section_key' => 'hero',
                        'content_key' => 'feature_img',
                    ],
                    [
                        'content_value' => $path,
                    ]
                );
            }

            return redirect()->back()->with('success', 'Hero section updated successfully!');
        } catch (\Throwable $e) {

            return redirect()->back()
                ->withInput()
                ->with('error', 'Something went wrong while updating the hero section. Please try again later.');
        }
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

    public function updateIntroductionSection(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'facts' => 'required|string',
            'image1' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
            'image2' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
            'image3' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
            'highlights' => 'nullable|array',
        ]);

        try {
            // Update text fields
            $fields = ['title', 'description', 'facts'];
            Log::info('Files received:', $request->allFiles());
            foreach ($fields as $field) {
                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'home_page',
                        'section_key' => 'introduction_section',
                        'content_key' => $field,
                    ],
                    [
                        'content_value' => $request->$field,
                    ]
                );
            }

            // Save highlights as JSON
            if ($request->has('highlights')) {
                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'home_page',
                        'section_key' => 'introduction_section',
                        'content_key' => 'highlights',
                    ],
                    [
                        'content_value' => json_encode($request->highlights), // Encode as JSON
                    ]
                );
            }

            // Handle multiple images
            $imageFields = ['image1', 'image2', 'image3'];

            foreach ($imageFields as $imageField) {
                if ($request->hasFile($imageField)) {
                    $path = $request->file($imageField)->store('CMSBanner', 'public');

                    CmsContent::updateOrCreate(
                        [
                            'page_key'    => 'home_page',
                            'section_key' => 'introduction_section',
                            'content_key' => $imageField,
                        ],
                        [
                            'content_value' => $path,
                        ]
                    );
                }
            }

            return redirect()->back()->with('success', 'Introduction section updated successfully!');
        } catch (\Throwable $e) {
            return redirect()->back()
                ->with('error', 'Something went wrong while updating the Introduction section. Please try again later.');
        }
    }


    public function UpdateTourismAboutSection(Request $request)
    {
        $request->validate([
            'description' => 'required|string',
            'facts' => 'required|string',
            'image1' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
            'image2' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
            'image3' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
            'responsibilities' => 'nullable|array',
            'goals' => 'nullable|array',
        ]);

        try {

            $fields = ['description', 'facts'];
            foreach ($fields as $field) {
                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'about_page',
                        'section_key' => 'about',
                        'content_key' => $field,
                    ],
                    [
                        'content_value' => $request->$field,
                    ]
                );
            }

            if ($request->has('responsibilities')) {
                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'about_page',
                        'section_key' => 'about',
                        'content_key' => 'responsibilities',
                    ],
                    [
                        'content_value' => json_encode($request->responsibilities),
                    ]
                );
            }

            if ($request->has('goals')) {
                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'about_page',
                        'section_key' => 'about',
                        'content_key' => 'goals',
                    ],
                    [
                        'content_value' => json_encode($request->goals),
                    ]
                );
            }



            $imageFields = ['image1', 'image2', 'image3'];

            foreach ($imageFields as $imageField) {
                if ($request->hasFile($imageField)) {
                    $path = $request->file($imageField)->store('CMSBanner', 'public');

                    CmsContent::updateOrCreate(
                        [
                            'page_key'    => 'about_page',
                            'section_key' => 'about',
                            'content_key' => $imageField,
                        ],
                        [
                            'content_value' => $path,
                        ]
                    );
                }
            }

            return redirect()->back()->with('success', 'Introduction section updated successfully!');
        } catch (\Throwable $e) {
            return redirect()->back()
                ->with('error', 'Something went wrong while updating the Introduction section. Please try again later.');
        }
    }

    protected function parseContentValue($value)
    {
        $decoded = json_decode($value, true);
        return (json_last_error() === JSON_ERROR_NONE) ? $decoded : $value;
    }
}
