<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\SocialWall;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class SocialWallController extends Controller
{

    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = SocialWall::latest()->get();

            return Inertia::render('Admin/Pages/SocailWall/AllPost', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = SocialWall::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/SocailWall/AllPost', [
            'items' => $items
        ]);
    }

    public function uploadaaaa(Request $request)
    {
        try {
            $request->validate([
                'image' => $request->image,
                'caption' => $request->caption,
            ]);

            $ImagePath = null;
            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('SociallWall', $filename, 'public');
            }

            SocialWall::create([
                'user_id' => Auth::id(),
                'post_id'  => Auth::id(),
                'image' => $ImagePath,
                'caption' => $request->caption,
            ]);
            return redirect()->back()->with('succes', 'Image Uploaded Sucessfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error', $e->getMessage()]);
        }
    }

    public function upload(Request $request)
    {
        try {
            $validated = $request->validate([
                'caption' => 'required|string|min:10|max:500',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', 
            ]);

            $imagePath = null;
            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $imagePath = $request->file('image')->storeAs('SocialWall', $filename, 'public');
            }
            
            do {
                $postId = Str::upper(Str::random(5));
            } while (SocialWall::where('post_id', $postId)->exists());

            SocialWall::create([
                'user_id' => Auth::id(),
                'post_id' => $postId,
                'image' => $imagePath,
                'caption' => $validated['caption'],
            ]);

            return redirect()->back()->with('succes', 'Image Uploaded Sucessfully');
        } catch (\Exception $e) {

            Log::error('SocialWall upload failed', [
                'user_id' => Auth::id(),
                'error'   => $e->getMessage(),
                'trace'   => $e->getTraceAsString(),
                'request' => $request->all(),
            ]);
            return redirect()->back()->withErrors(['error' => 'Something went wrong while uploading. Please try again.']);
        }
    }
}
