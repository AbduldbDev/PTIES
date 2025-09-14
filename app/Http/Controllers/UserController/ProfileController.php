<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CMSBanner;


class ProfileController extends Controller
{

    public function index()
    {
        $banner = CMSBanner::where('key', 'Profile Section')->first();

        return Inertia::render('User/Pages/Profile', [
            'banner' => $banner,
        ]);
    }
}
