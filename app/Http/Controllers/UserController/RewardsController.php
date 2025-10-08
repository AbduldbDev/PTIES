<?php

namespace App\Http\Controllers\UserController;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CMSBanner;
use App\Models\Rewards;
use App\Models\RewardsLogs;
use App\Models\User;
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
                return redirect()->back()->with('error', 'Points Already Claimed');
            }

            if (!$reward) {
                return redirect()->back()->with('error', 'No Rewards found');
            }

            if ($user->pakil_points < $reward->price) {
                return redirect()->back()->with('error', 'Points required not meet');
            }

            if ($reward->status == 0) {
                return redirect()->back()->with('error', 'Reward currently unavailble');
            }

            $UserPoints = $user->pakil_points - $reward->price;

            $user->update([
                'pakil_points' => $UserPoints,
            ]);

            RewardsLogs::create([
                'reward_id' => $reward->id,
                'user_id' => Auth::id(),
            ]);

            return redirect()->back()->with('success', 'Points redeem successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
