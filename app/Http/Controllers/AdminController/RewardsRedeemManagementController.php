<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\LogsRedemptions;
use App\Models\RewardsLogs;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Carbon\Carbon;

class RewardsRedeemManagementController extends Controller
{
    public function completed(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = RewardsLogs::with(['user', 'reward'])->where('status', 1)->latest()->get();

            return Inertia::render('Admin/Pages/RewardsRedeem/AllRewards', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
                'status' => "All Completed"
            ]);
        }

        $items = RewardsLogs::with(['user', 'reward'])->where('status', 1)->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/RewardsRedeem/AllRewards', [
            'items' => $items,
            'status' => "All Completed"
        ]);
    }

    public function pending(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = RewardsLogs::with(['user', 'reward'])->where('status', 0)->latest()->get();

            return Inertia::render('Admin/Pages/RewardsRedeem/AllRewards', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
                'status' => "Pending"
            ]);
        }

        $items = RewardsLogs::with(['user', 'reward'])->where('status', 0)->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }



        return Inertia::render('Admin/Pages/RewardsRedeem/AllRewards', [
            'items' => $items,
            'status' => "Pending"
        ]);
    }

    public function details($id)
    {
        $reward = RewardsLogs::with(['user', 'reward'])->findOrFail($id);

        return Inertia::render('Admin/Pages/RewardsRedeem/RewardDetails', [
            'item' => $reward,
        ]);
    }

    public function complete($id)
    {
        $redemption = RewardsLogs::findOrFail($id);

        if ($redemption->status != '0') {
            return back()->with('error', 'This redemption has already been processed.');
        }

        $redemption->update([
            'status' => '1',
            'completed_at' => Carbon::now(),
        ]);

        LogsRedemptions::create([
            'rewards_id' => $redemption->reward_id,
            'user_id' => Auth::id(),
            'details_id' => $redemption->id,
            'status' => 'Completed'
        ]);

        return back()->with('success', 'Redemption marked as completed successfully.');
    }


    public function refund($id)
    {
        $redemption = RewardsLogs::with(['user', 'reward'])->find($id);

        if (!$redemption) {
            return back()->with('error', 'Redemption record not found.');
        }

        $user = $redemption->user;

        if (!$user) {
            return back()->with('error', 'User associated with this redemption not found.');
        }

        $restoredPoints = (int) $redemption->points;
        $user->pakil_points = (int) $user->pakil_points + $restoredPoints;


        $user->save();

        $redemption->update([
            'status' => '2',
        ]);

        LogsRedemptions::create([
            'rewards_id' => $redemption->reward_id,
            'user_id' => Auth::id(),
            'details_id' => $redemption->id,
            'status' => 'Refund'
        ]);


        return back()->with('success', 'Redemption refunded and user points restored successfully.');
    }
}
