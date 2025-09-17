<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CMSBanner;
use App\Models\Officials;
use App\Models\CMSContent;
use App\Models\Department;

class AboutUsController extends Controller
{
    public function AboutTourism()
    {
        $contents = CMSContent::where('page_key', "about_page")
            ->orderBy('section_key')
            ->orderBy('content_key')
            ->get();

        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        $departments = Department::with(['members'])
            ->whereNull('parent_id')
            ->get();

        function loadChildrenWithMembers($department)
        {
            $department->load(['children.members']);
            if ($department->children) {
                foreach ($department->children as $child) {
                    loadChildrenWithMembers($child);
                }
            }
            return $department;
        }

        foreach ($departments as $department) {
            loadChildrenWithMembers($department);
        }

        $banner = CMSBanner::where('key', 'About Tourism')->first();
        return Inertia::render('User/Pages/Tourism', [
            'banner' => $banner,
            'content' => $pageData['sections'] ?? [],
            'departments' => $departments,
        ]);
    }

    public function KeyOfficials()
    {
        $banner = CMSBanner::where('key', 'Key Officials')->first();

        $officials = Officials::orderByRaw(
            "CASE 
            WHEN position = 'Municipal Mayor' THEN 1
            WHEN position = 'Municipal Vice Mayor' THEN 2
            WHEN position = 'SB Member' THEN 3
            ELSE 4
        END"
        )
            ->orderBy('name')
            ->get()
            ->groupBy('position');

        return Inertia::render('User/Pages/Officials', [
            'banner' => $banner,
            'officials' => $officials,
        ]);
    }


    public function OfficialBio($id)
    {
        $banner = CMSBanner::where('key', 'Key Officials')->first();


        $official = Officials::findOrFail($id);

        return Inertia::render('User/Pages/Biography', [
            'banner' => $banner,
            'item' => $official,
        ]);
    }

    protected function parseContentValue($value)
    {
        $decoded = json_decode($value, true);
        return (json_last_error() === JSON_ERROR_NONE) ? $decoded : $value;
    }
}
