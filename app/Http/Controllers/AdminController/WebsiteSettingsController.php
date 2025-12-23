<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Models\CMSColor;
use App\Models\Notification;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Events;
use App\Models\LocalMarketProducts;
use App\Models\LocalMarketSeller;
use App\Models\RewardsLogs;
use App\Models\SocialWall;
use App\Models\WebsiteVisit;

class WebsiteSettingsController  extends Controller
{
    public function dashboard(Request $request)
    {
        $events = Events::get();
        $total_Employees =  User::whereIn('user_type', ['admin', 'content_manager'])->count();
        $total_Sellers =  LocalMarketSeller::where('status', 1)->count();
        $total_tourist =  User::where('user_type', 'user')->count();
        $total_products = LocalMarketProducts::where('status', 1)->count();

        $pending_Sellers =  LocalMarketSeller::where('status', 0)->count();
        $pending_products = LocalMarketProducts::where('status', 0)->count();
        $social_wall = SocialWall::where('is_approved', 0)->count();
        $pending_redemption = RewardsLogs::where('status', 0)->count();



        return Inertia::render('Admin/Pages/Dashboard', [
            'events' => $events,
            'total_Employees' =>  $total_Employees,
            'total_Sellers' =>  $total_Sellers,
            'total_tourist' => $total_tourist,
            'total_products' => $total_products,
            'pending_Sellers' => $pending_Sellers,
            'pending_products' => $pending_products,
            'social_wall' => $social_wall,
            'pending_redemption' => $pending_redemption
        ]);
    }

    public function calendar()
    {
        $events = Events::get();

        return Inertia::render('Admin/Pages/Calendar', [
            'events' => $events,

        ]);
    }

    public function settings(Request $request)
    {

        $colors = CMSColor::whereIn('key', ['primary', 'secondary', 'accent'])
            ->get()
            ->keyBy('key')
            ->map(fn($item) => $item->value)
            ->toArray();


        return Inertia::render('Admin/Pages/Settings/WebsiteSettings', [
            'primary'   => $colors['primary'],
            'secondary' => $colors['secondary'],
            'accent'    => $colors['accent'],
        ]);
    }

    public function updateSettings(Request $request)
    {
        $validated = $request->validate([
            'primary' => 'required|string|size:7|starts_with:#',
            'secondary' => 'required|string|size:7|starts_with:#',
            'accent' => 'required|string|size:7|starts_with:#',
        ]);


        try {
            foreach ($validated as $key => $value) {
                CMSColor::where('key', $key)
                    ->update(['value' => $value, 'updated_at' => now()]);
            }

            return back()->with('success', 'Color theme updated successfully!');
        } catch (\Exception $e) {

            return back()->with('error', 'Failed to update color theme: ' . $e->getMessage());
        }
    }


    public function markAsRead($id)
    {
        $notification = Notification::where('id', $id)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        $notification->update(['is_read' => true]);
        return redirect($notification->url ?? '/');
    }

    public function destroy($id)
    {
        $notification = Notification::where('id', $id)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        $notification->delete();

        return back();
    }

    public function monthlyVisits()
    {
        // Get visits count grouped by month for the current year
        $visits = WebsiteVisit::select(
            DB::raw('MONTH(visited_at) as month'),
            DB::raw('COUNT(*) as total')
        )
            ->whereYear('visited_at', now()->year)
            ->groupBy('month')
            ->orderBy('month')
            ->get();

        // Initialize array with 0 for all 12 months
        $monthly = array_fill(1, 12, 0);

        foreach ($visits as $visit) {
            $monthly[$visit->month] = $visit->total;
        }

        return response()->json($monthly);
    }
}
