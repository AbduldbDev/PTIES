<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserGamificationController extends Controller
{
    public function scanner()
    {
        return Inertia::render('User/Pages/QRScanner');
    }
}
