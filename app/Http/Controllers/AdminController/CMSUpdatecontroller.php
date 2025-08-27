<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CmsContent;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class CMSUpdatecontroller extends Controller
{
    public function UpdateHeroSection(Request $request)
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

    public function UpdateIntroductionSection(Request $request)
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

    public function UpdateTourismAboutSection(Request $request)
    {
        $request->validate([
            'description' => 'required|string',
            'facts' => 'required|string',
            'image1' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
            'image2' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
            'image3' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
            'responsibilities' => 'required|array',
            'goals' => 'required|array',
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

    public function UpdatePakilIntro(Request $request)
    {
        $request->validate([
            'description' => 'required|string',
            'highlights' => 'required|array',
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
    public function CitizenCharter(Request $request)
    {
        $request->validate([
            'description' => 'required|string',
            'updated' => 'required|string',
            'size' => 'required|string',
            'pdf' => 'nullable|mimes:pdf|max:10240', // Reduced to 10MB max
        ]);

        try {
            // Update text fields
            $fields = ['description', 'size', 'updated'];
            foreach ($fields as $field) {
                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'about_page',
                        'section_key' => 'citizen_charter',
                        'content_key' => $field,
                    ],
                    [
                        'content_value' => $request->$field,
                    ]
                );
            }

            // Handle PDF file upload
            if ($request->hasFile('pdf')) {
                $path = $request->file('pdf')->store('CMSDocs', 'public');

                CmsContent::updateOrCreate(
                    [
                        'page_key'    => 'about_page',
                        'section_key' => 'citizen_charter',
                        'content_key' => 'pdf',
                    ],
                    [
                        'content_value' => $path,
                    ]
                );
            }

            return redirect()->back()->with('success', 'Pakil citizen charter updated successfully!');
        } catch (\Throwable $e) {
            return redirect()->back()
                ->withErrors(['error' => $e->getMessage()])
                ->withInput();
        }
    }
}
