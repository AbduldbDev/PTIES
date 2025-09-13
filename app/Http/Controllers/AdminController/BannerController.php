<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\CMSBanner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BannerController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = CMSBanner::latest()->get();

            return Inertia::render('Admin/Pages/CMS/Banners', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = CMSBanner::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/CMS/Banners', [
            'items' => $items,
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

                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $imagePath = $request->file('image')->storeAs('CMSBanner', $filename, 'public');

                $banner->image = $imagePath;
            }

            $banner->save();

            return redirect()->back()->with('success', 'Banner updated successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
