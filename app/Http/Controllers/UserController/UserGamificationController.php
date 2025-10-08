<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\Attractions;
use App\Models\PointsLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Models\User;

class UserGamificationController extends Controller
{
    public function scanner()
    {
        return Inertia::render('User/Pages/QRScanner');
    }

    public function details($id)
    {

        $details = Attractions::where('attraction_id', $id)->first();

        return Inertia::render(
            'User/Pages/GamificationDetails',
            [
                'item' => $details,
            ]
        );
    }

    public function redeem(Request $request)
    {
        try {
            $request->validate([
                'attraction_id' => 'required|max:255',
            ]);

            $attraction = Attractions::where('attraction_id', $request->attraction_id)->first();

            if (!$attraction) {
                return redirect()->route('gamification.reject')->with('error', 'Attraction not found.');
            }

            Log::info('Coordinate check', [
                'attraction_lat' => $attraction->lat,
                'attraction_long' => $attraction->long,
                'request_lat' => $request->latitude,
                'request_long' => $request->longitude,
            ]);


            $check = PointsLog::where('attraction_id', $attraction->id)
                ->where('user_id', Auth::id())
                ->first();

            if ($check) {
                return redirect()->route('gamification.reject')->with('error', 'Points already redeemed.');
            }

            $distance = $this->calculateDistance(
                $attraction->lat,
                $attraction->long,
                $request->latitude,
                $request->longitude
            );


            // Log::info('Calculated distance', ['distance' => $distance]);

            if ($distance > 500) {
                return redirect()->route('gamification.reject')->with(
                    'error',
                    'You must be within 500 meter of the attraction to redeem points.'
                );
            }

            $old_points = Auth::user()->pakil_points;
            $new_points = $attraction->points;
            $total = $old_points + $new_points;

            User::where('id', Auth::id())->update([
                'pakil_points' => $total,
            ]);

            PointsLog::create([
                'attraction_id' => $attraction->id,
                'user_id' => Auth::id(),
            ]);

            return redirect()->route('gamification.confirmation')->with('success', 'Points redeemed successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }


    /**
     * Calculate distance in meters between two coordinates using Haversine formula
     */
    private function calculateDistance($lat1, $lon1, $lat2, $lon2)
    {
        $earthRadius = 6371000; // meters

        $dLat = deg2rad($lat2 - $lat1);
        $dLon = deg2rad($lon2 - $lon1);

        $a = sin($dLat / 2) * sin($dLat / 2) +
            cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
            sin($dLon / 2) * sin($dLon / 2);

        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return $earthRadius * $c; // distance in meters
    }

    public function confirmation()
    {
        return Inertia::render(
            'User/Pages/GamificationConfirmation'
        );
    }


    public function reject()
    {
        return Inertia::render(
            'User/Pages/GamificationReject'
        );
    }
}
