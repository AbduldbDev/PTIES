<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ColorTheme;

class WebsiteSettingsController  extends Controller
{
    public function settings(Request $request)
    {

        $colors = ColorTheme::whereIn('key', ['primary', 'secondary', 'accent'])
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
                ColorTheme::where('key', $key)
                    ->update(['value' => $value, 'updated_at' => now()]);
            }

            return back()->with('success', 'Color theme updated successfully!');
        } catch (\Exception $e) {

            return back()->with('error', 'Failed to update color theme: ' . $e->getMessage());
        }
    }
}
