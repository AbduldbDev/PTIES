<?php

namespace App\Http\Controllers\SellerController;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\LocalMarketProducts;
use App\Models\LocalMarketSeller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SellerPageController extends Controller
{

    public function dashboard()
    {
        $sellerData = LocalMarketSeller::where('user_id', Auth::id())->first();
        $activeProducts = LocalMarketProducts::where('shop_id', $sellerData->id)->where('status', 1)->where('is_approved', 1)->count();
        $pendingProducts = LocalMarketProducts::where('shop_id', $sellerData->id)->where('status', 0)->where('is_approved', 0)->count();
        $pendingEdit = LocalMarketProducts::where('shop_id', $sellerData->id)->where('status', 0)->where('is_approved', 1)->count();


        return Inertia::render(
            'User/Pages/SellerDashboard',
            [
                'sellerData' => $sellerData,
                'active' => $activeProducts,
                'pending' => $pendingProducts,
                'edit' => $pendingEdit,
            ]
        );
    }

    public function terms()
    {
        return Inertia::render('User/Pages/SellerTerms');
    }

    public function registration()
    {
        return Inertia::render('User/Pages/SellerRegistration');
    }
}
