<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\CMSColor;
use Illuminate\Http\Request;

class UserLayout extends Controller
{

    public function getThemeColors()
    {
        $colors = CMSColor::whereIn('key', ['primary', 'secondary', 'accent'])
            ->get()
            ->keyBy('key');

        $response = [
            'primary'   => $colors['primary']->value,
            'secondary' => $colors['secondary']->value,
            'accent'    => $colors['accent']->value,
            'updatedAt' => $colors->max('updated_at')?->toISOString() ?? now()->toISOString(),
        ];

        return response()->json($response);
    }
}
