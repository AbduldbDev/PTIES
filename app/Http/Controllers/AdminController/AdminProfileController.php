<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;


class AdminProfileController extends Controller
{
    public function Profile(Request $request)
    {
        $profile = User::with('profile')->where('id', Auth::id())->first();

        return Inertia::render('Admin/Pages/Profile/ViewProfile', [
            'profile' => $profile
        ]);
    }
}
