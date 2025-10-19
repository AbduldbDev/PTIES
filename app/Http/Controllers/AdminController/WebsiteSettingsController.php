<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CMSColor;
use App\Models\Notification;
use Illuminate\Support\Facades\Auth;

class WebsiteSettingsController  extends Controller
{
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
}
