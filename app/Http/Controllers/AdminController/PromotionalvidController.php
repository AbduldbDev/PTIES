<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\ContentPromotional;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PromotionalvidController extends Controller
{
    public function view()
    {
        $details = ContentPromotional::first();
        return Inertia::render('Admin/Pages/Contents/PromotionalVid', [
            'details' => $details,
        ]);
    }


    public function update(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'slogan' => 'required|string|max:255',
                'description' => 'required|string',
                'highlights' => 'required|array',
                'highlights.*' => 'string|max:255',
                'thumbnail' => 'required|max:5120',
                'video' => 'required|file|mimetypes:video/mp4,video/quicktime,video/x-msvideo,video/x-wmv,video/x-matroska|max:25600',
            ]);

            $content = ContentPromotional::firstOrNew(['id' => 1]);
            $imagePath = $content->thumbnail;
            if ($request->hasFile('thumbnail')) {
                if ($content->thumbnail && Storage::disk('public')->exists($content->thumbnail)) {
                    Storage::disk('public')->delete($content->thumbnail);
                }
                $imagePath = $request->file('thumbnail')->store('ContentImages', 'public');
            }
            $videoPath = $content->video;
            if ($request->hasFile('video')) {
                if ($content->video && Storage::disk('public')->exists($content->video)) {
                    Storage::disk('public')->delete($content->video);
                }
                $videoPath = $request->file('video')->store('ContentVideos', 'public');
            }

            ContentPromotional::updateOrCreate(
                ['id' => 1],
                [
                    'title' => $request->title,
                    'slogan' => $request->slogan,
                    'description' => $request->description,
                    'highlights' => $request->highlights,
                    'thumbnail' => $imagePath,
                    'video' => $videoPath,
                ]
            );

            return redirect()->back()->with('success', 'Promotional video updated successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
