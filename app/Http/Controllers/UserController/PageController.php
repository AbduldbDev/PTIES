<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function Home()
    {
        return Inertia::render('User/Pages/Home');
    }

    public function About()
    {
        return Inertia::render('User/Pages/About');
    }
}
