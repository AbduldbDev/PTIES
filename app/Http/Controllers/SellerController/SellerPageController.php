<?php

namespace App\Http\Controllers\SellerController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SellerPageController extends Controller
{
    
  public function terms()
    {
        return Inertia::render('User/Pages/SellerTerms');
    }
}
