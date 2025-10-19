<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\SocialWall;
use App\Models\SociallWallLikes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use App\Models\CMSBanner;
use App\Models\Notification;
use App\Models\User;

class SocialWallController extends Controller
{
    public function new()
    {
        $banner = CMSBanner::where('key', 'Social Wall')->first();
        return Inertia::render('User/Pages/UploadImage', [
            'banner' => $banner,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'caption' => 'required|string|min:10|max:500',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:25600',

            ]);

            $imagePath = null;
            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $imagePath = $request->file('image')->storeAs('SocialWall', $filename, 'public');
            }

            do {
                $postId = Str::upper(Str::random(5));
            } while (SocialWall::where('post_id', $postId)->exists());

            $post =  SocialWall::create([
                'user_id' => Auth::id(),
                'post_id' => $postId,
                'image' => $imagePath,
                'caption' => $request->caption,
            ]);

            $admins = User::whereIn('user_type', ['admin', 'content_manager'])->get();

            foreach ($admins as $admin) {
                Notification::create([
                    'user_id' => $admin->id,
                    'type' => 'Social Wall',
                    'title' => 'New Post on Social Wall',
                    'message' => Str::limit($request->caption, 50),
                    'url' => '/Admin/social-wall/view/' . $post->id,
                ]);
            }


            return redirect()->route('user.socialwall.confirmation');
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }

    public function confirmation()
    {
        return Inertia::render('User/Pages/SocialWallConfirmation');
    }

    public function toggleLike(Request $request)
    {
        try {
            $request->validate([
                'post_id' => 'required|exists:social_wall,id'
            ]);

            $post = SocialWall::findOrFail($request->post_id);
            $user = Auth::user();

            $existingLike = SociallWallLikes::where('user_id', $user->id)
                ->where('post_id', $post->id)
                ->first();

            if ($existingLike) {
                $existingLike->delete();
                $hasLiked = false;
                $message = 'Post unliked successfully';
            } else {
                SociallWallLikes::create([
                    'user_id' => $user->id,
                    'post_id' => $post->id
                ]);
                $hasLiked = true;
                $message = 'Post liked successfully';
            }

            $likeCount = SociallWallLikes::where('post_id', $post->id)->count();
            $post->update(['likes_count' => $likeCount]);

            return response()->json([
                'success' => true,
                'message' => $message,
                'has_liked' => $hasLiked,
                'likes_count' => $likeCount
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update like: ' . $e->getMessage()
            ], 500);
        }
    }
}
