<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\ColorTheme;
use Illuminate\Http\Request;

class UserLayout extends Controller
{

    public function getThemeColors()
    {

        $colors = ColorTheme::whereIn('key', ['primary', 'secondary', 'accent'])
            ->get()
            ->keyBy('key')
            ->map(fn($item) => $item->value)
            ->toArray();


        $response = [
            'primary'   => $colors['primary'] ?? '#f60002',
            'secondary' => $colors['secondary'] ?? '#ffed4a',
            'accent'    => $colors['accent'] ?? '#e3342f',
        ];

        return response()->json($response);
    }
}
