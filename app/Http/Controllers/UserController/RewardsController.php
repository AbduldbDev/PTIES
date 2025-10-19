<?php

namespace App\Http\Controllers\UserController;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CMSBanner;
use App\Models\Rewards;
use App\Models\RewardsLogs;
use App\Models\User;
use App\Models\Notification;
use Inertia\Inertia;

class RewardsController extends Controller
{
    public function index()
    {
        $banner = CMSBanner::where('key', 'Rewards')->first();
        $rewards = Rewards::inRandomOrder()->get();

        return Inertia::render('User/Pages/rewardshop', [
            'banner' => $banner,
            'items' => $rewards
        ]);
    }

    public function redeem(Request $request)
    {
        try {
            $request->validate([
                'reward_id' => 'required',
            ]);

            $reward = Rewards::where('id', $request->reward_id)->first();
            $user = User::where('id', Auth::id())->first();
            $check = RewardsLogs::where('reward_id', $reward->id)->where('user_id', $user->id)->first();

            if ($check) {
                return redirect()->back()->with('error', 'Reward Already Claimed.');
            }

            if (!$reward) {
                return redirect()->back()->with('error', 'Reward not found.');
            }

            if ($user->pakil_points < $reward->price) {
                return redirect()->back()->with('error', 'Insufficient Pakil Points to redeem this reward.');
            }


            if ($reward->status == 0) {
                return redirect()->back()->with('error', 'Reward currently unavailble.');
            }

            $UserPoints = $user->pakil_points - $reward->price;

            $user->update([
                'pakil_points' => $UserPoints,
            ]);

            $rewards = RewardsLogs::create([
                'reward_id' => $reward->id,
                'user_id' => Auth::id(),
                'points' =>   $reward->price,
            ]);

            $admins = User::whereIn('user_type', ['admin', 'content_manager'])->get();

            foreach ($admins as $admin) {
                Notification::create([
                    'user_id' => $admin->id,
                    'type' => 'Rewards',
                    'title' => 'Pending Redemption',
                    'message' => 'New pending reward redemption from: ' . Str::limit($rewards->user->email, 50),
                    'url' => '/Admin/rewards/redeem/details/' . $rewards->id,
                ]);
            }

            return redirect()->back()->with('success', 'Points redeem successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
