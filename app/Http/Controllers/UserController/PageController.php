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
    public function AboutTourism()
    {
        return Inertia::render('User/Pages/Tourism');
    }
    public function KeyOfficials()
    {
        return Inertia::render('User/Pages/Officials');
    }

    public function OfficialBio()
    {
        return Inertia::render('User/Pages/Biography');
    }
    public function Guide()
    {
        return Inertia::render('User/Pages/Guide');
    }
    public function Terminals()
    {
        return Inertia::render('User/Pages/Terminals');
    }
    public function LocalProducts()
    {
        return Inertia::render('User/Pages/LocalProducts');
    }
<<<<<<< Updated upstream
=======
    public function Attractions()
    {
        return Inertia::render('User/Pages/Attractions');
    }
    public function AttractionDetails()
    {
        return Inertia::render('User/Pages/AttractionDetails');
    }
>>>>>>> Stashed changes
}
 