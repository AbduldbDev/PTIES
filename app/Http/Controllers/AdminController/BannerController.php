<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\CMSBanner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BannerController extends Controller
{
    public function index()
    {
        $banners = CMSBanner::get();

        return Inertia::render('Admin/Pages/CMS/Banners', [
            'items' => $banners
        ]);
    }

    public function edit($id)
    {
        $details = CMSBanner::findorFail($id);
        return Inertia::render('Admin/Pages/CMS/BannerEdit', [
            'details' => $details
        ]);
    }

    
    public function update(Request $request)
    {
        try {
            $request->validate([
                'id' => 'required',
                'title' => 'required|max:255',
                'subtitle' => 'required|max:255',
                'desc' => 'required|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5120',
            ]);

            $banner = CMSBanner::findOrFail($request->id);
            $banner->title = $request->title;
            $banner->subtitle = $request->subtitle;
            $banner->desc = $request->desc;

            if ($request->hasFile('image')) {
                if ($banner->image && Storage::disk('public')->exists($banner->image)) {
                    Storage::disk('public')->delete($banner->image);
                }

                $imagePath = $request->file('image')->store('CMSBanner', 'public');
                $banner->image = $imagePath;
            }

            $banner->save();

            return redirect()->back()->with('success', 'Banner updated successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
