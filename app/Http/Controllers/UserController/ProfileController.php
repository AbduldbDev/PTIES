<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\AccountUsers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CMSBanner;
use App\Models\PointsLog;
use App\Models\SocialWall;
use App\Models\User;

class ProfileController extends Controller
{

    public function index()
    {
        $banner = CMSBanner::where('key', 'Profile Section')->first();
        $profile = AccountUsers::with('user')
            ->where('user_id', Auth::id())
            ->first();

        $posts = SocialWall::where('user_id', Auth::id())->withCount('likes')->get();
        $visit = PointsLog::with('attraction')->where('user_id', Auth::id())->get();

        return Inertia::render('User/Pages/Profile', [
            'banner' => $banner,
            'item' => $profile,
            'posts' => $posts,
            'visit' =>  $visit
        ]);
    }


    public function update(Request $request, $id)
    {
        $account = AccountUsers::where('user_id', $id)->firstOrFail();

        $validated = $request->validate([
            'first_name'   => 'required|string|max:255',
            'middle_name'  => 'nullable|string|max:255',
            'last_name'    => 'required|string|max:255',
            'phone'        => 'nullable|string|max:20',
            'address'      => 'nullable|string|max:255',
            'avatar' => 'nullable|image|mimes:webp,jpg,jpeg,png,gif|max:25600',
        ]);

        if ($request->hasFile('avatar')) {
            $user = User::where('id', $id)->first();
            $path = $request->file('avatar')->store('avatars', 'public');

            $validated['avatar'] = '/storage/' . $path;

            if ($user->avatar) {
                $oldPath = str_replace('/storage/', '', $user->avatar);

                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->delete($oldPath);
                }
            }
            $user->update([
                'avatar'      => $validated['avatar'],
            ]);
        }



        $account->update($validated);

        return redirect()->back()->with('success', 'Profile updated successfully.');
    }
}
