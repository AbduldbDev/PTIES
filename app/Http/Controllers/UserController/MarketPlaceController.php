<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\LocalMarketProducts;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MarketPlaceController extends Controller
{
    public function index()
    {
        $items = LocalMarketProducts::with('shop')->where('status', 1)->where('is_approved', 1)->get();

        return Inertia::render('User/Pages/LocalMarket', [
            'items' => $items,
        ]);
    }

    public function productdetails($id)
    {
        $details =  LocalMarketProducts::with('shop')->where('product_id', $id)->where('status', 1)->where('is_approved', 1)->first();
        $related = LocalMarketProducts::with('shop')->where('product_id', '!=', $id)->where('status', 1)->where('is_approved', 1)->get();

        return Inertia::render('User/Pages/ProductDetails', [
            'product' => $details,
            'related' => $related,
        ]);
    }
}
