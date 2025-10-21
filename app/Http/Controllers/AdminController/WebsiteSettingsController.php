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
    public function monthlyVisits(Request $request)
    {
        // Get the current date and calculate the start date for the last 12 months
        $endDate = Carbon::now();
        $startDate = Carbon::now()->subMonths(11)->startOfMonth();

        // Query to get monthly visits and unique visitors
        $monthlyData = DB::table('website_visits')
            ->select(
                DB::raw('YEAR(visited_at) as year'),
                DB::raw('MONTH(visited_at) as month'),
                DB::raw('COUNT(*) as visits'),
                DB::raw('COUNT(DISTINCT visitor_id) as unique_visitors')
            )
            ->whereBetween('visited_at', [$startDate, $endDate])
            ->groupBy('year', 'month')
            ->orderBy('year', 'asc')
            ->orderBy('month', 'asc')
            ->get();

        // Create an array with all months from start to end date
        $allMonths = [];
        $currentDate = $startDate->copy();

        while ($currentDate <= $endDate) {
            $allMonths[$currentDate->format('Y-m')] = [
                'year' => $currentDate->year,
                'month' => $currentDate->month,
                'month_name' => $currentDate->format('M'),
                'visits' => 0,
                'unique_visitors' => 0
            ];
            $currentDate->addMonth();
        }

        // Merge actual data with all months
        foreach ($monthlyData as $data) {
            $key = $data->year . '-' . str_pad($data->month, 2, '0', STR_PAD_LEFT);
            if (isset($allMonths[$key])) {
                $allMonths[$key]['visits'] = $data->visits;
                $allMonths[$key]['unique_visitors'] = $data->unique_visitors;
            }
        }

        // Convert to array and ensure current month is last (for left-to-right display)
        $result = array_values($allMonths);

        // Format the response
        $formattedData = array_map(function ($monthData) {
            return [
                'month' => $monthData['month_name'],
                'visits' => (int) $monthData['visits'],
                'uniqueVisitors' => (int) $monthData['unique_visitors']
            ];
        }, $result);

        return response()->json($formattedData);
    }

    // Alternative method that returns data with current month on the left
    public function monthlyVisitsReverse(Request $request)
    {
        // Get the current date and calculate the start date for the last 12 months
        $endDate = Carbon::now();
        $startDate = Carbon::now()->subMonths(11)->startOfMonth();

        // Query to get monthly visits and unique visitors
        $monthlyData = DB::table('website_visits')
            ->select(
                DB::raw('YEAR(visited_at) as year'),
                DB::raw('MONTH(visited_at) as month'),
                DB::raw('COUNT(*) as visits'),
                DB::raw('COUNT(DISTINCT visitor_id) as unique_visitors')
            )
            ->whereBetween('visited_at', [$startDate, $endDate])
            ->groupBy('year', 'month')
            ->orderBy('year', 'asc')
            ->orderBy('month', 'asc')
            ->get();

        // Create an array with all months from start to end date
        $allMonths = [];
        $currentDate = $startDate->copy();

        while ($currentDate <= $endDate) {
            $allMonths[$currentDate->format('Y-m')] = [
                'year' => $currentDate->year,
                'month' => $currentDate->month,
                'month_name' => $currentDate->format('M'),
                'visits' => 0,
                'unique_visitors' => 0
            ];
            $currentDate->addMonth();
        }

        // Merge actual data with all months
        foreach ($monthlyData as $data) {
            $key = $data->year . '-' . str_pad($data->month, 2, '0', STR_PAD_LEFT);
            if (isset($allMonths[$key])) {
                $allMonths[$key]['visits'] = $data->visits;
                $allMonths[$key]['unique_visitors'] = $data->unique_visitors;
            }
        }

        // Reverse the array so current month is on the left
        $reversedData = array_reverse(array_values($allMonths));

        // Format the response
        $formattedData = array_map(function ($monthData) {
            return [
                'month' => $monthData['month_name'],
                'visits' => (int) $monthData['visits'],
                'uniqueVisitors' => (int) $monthData['unique_visitors']
            ];
        }, $reversedData);

        return response()->json($formattedData);
    }

    // Method to get visits for specific year (default current year)
    public function yearlyVisits(Request $request, $year = null)
    {
        $year = $year ?? Carbon::now()->year;

        $monthlyData = DB::table('website_visits')
            ->select(
                DB::raw('MONTH(visited_at) as month'),
                DB::raw('COUNT(*) as visits'),
                DB::raw('COUNT(DISTINCT visitor_id) as unique_visitors')
            )
            ->whereYear('visited_at', $year)
            ->groupBy('month')
            ->orderBy('month', 'asc')
            ->get();

        // Create array for all 12 months
        $allMonths = [];
        for ($i = 1; $i <= 12; $i++) {
            $date = Carbon::create($year, $i, 1);
            $allMonths[$i] = [
                'month' => $date->format('M'),
                'visits' => 0,
                'uniqueVisitors' => 0
            ];
        }

        // Fill with actual data
        foreach ($monthlyData as $data) {
            $allMonths[$data->month]['visits'] = (int) $data->visits;
            $allMonths[$data->month]['uniqueVisitors'] = (int) $data->unique_visitors;
        }

        // If current year, show months up to current month only
        if ($year == Carbon::now()->year) {
            $currentMonth = Carbon::now()->month;
            $allMonths = array_slice($allMonths, 0, $currentMonth);
        }

        return response()->json(array_values($allMonths));
    }
}
