<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CmsContent;
use Illuminate\Support\Facades\Log;


class HomeCMSController extends Controller
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

    public function updateHeroSection(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'slogan' => 'required|string',
            'feature_title' => 'required|string|max:255',
            'feature_img' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:25600',
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

            if ($request->has('highlights')) {
                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'home_page',
                        'section_key' => 'introduction_section',
                        'content_key' => 'highlights',
                    ],
                    [
                        'content_value' => json_encode($request->highlights),
                    ]
                );
            }

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

            return redirect()->back()->with('success', 'Tourism about section updated successfully!');
        } catch (\Throwable $e) {
            return redirect()->back()
                ->with('error', 'Something went wrong while updating the Tourism about section. Please try again later.');
        }
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

    public function UpdateMissionVision(Request $request)
    {
        $request->validate([
            'mission' => 'required|string',
            'vision' => 'required|string',

        ]);

        try {

            $fields = ['mission', 'vision'];
            foreach ($fields as $field) {
                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'about_page',
                        'section_key' => 'mission_vision',
                        'content_key' => $field,
                    ],
                    [
                        'content_value' => $request->$field,
                    ]
                );
            }

            return redirect()->back()->with('success', 'Mission & Vision section updated successfully!');
        } catch (\Throwable $e) {
            return redirect()->back()
                ->with('error', 'Something went wrong while updating the Mission & Vision section. Please try again later.');
        }
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

    public function UpdatePakilIntro(Request $request)
    {
        $request->validate([
            'description' => 'required|string',
            'highlights' => 'nullable|array',
            'image1' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
            'image2' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
            'image3' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
            'image4' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
        ]);

        try {

            $fields = ['description'];
            foreach ($fields as $field) {
                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'explore_pakil',
                        'section_key' => 'introduction',
                        'content_key' => $field,
                    ],
                    [
                        'content_value' => $request->$field,
                    ]
                );
            }

            $imageFields = ['image1', 'image2', 'image3', 'image4'];

            foreach ($imageFields as $imageField) {
                if ($request->hasFile($imageField)) {
                    $path = $request->file($imageField)->store('CMSBanner', 'public');

                    CmsContent::updateOrCreate(
                        [
                            'page_key'    => 'explore_pakil',
                            'section_key' => 'introduction',
                            'content_key' => $imageField,
                        ],
                        [
                            'content_value' => $path,
                        ]
                    );
                }
            }

            if ($request->has('highlights')) {
                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'explore_pakil',
                        'section_key' => 'introduction',
                        'content_key' => 'highlights',
                    ],
                    [
                        'content_value' => json_encode($request->highlights),
                    ]
                );
            }


            return redirect()->back()->with('success', 'Pakil introduction updated successfully!');
        } catch (\Throwable $e) {
            return redirect()->back()
                ->with('error', 'Something went wrong while updating the Pakil introduction section. Please try again later.');
        }
    }
}
