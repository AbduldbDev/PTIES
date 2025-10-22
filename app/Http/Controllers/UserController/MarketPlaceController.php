<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\LocalMarketProducts;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CMSBanner;

class MarketPlaceController extends Controller
{
    public function index()
    {
        $banner = CMSBanner::where('key', 'Market Place')->first();
        $items = LocalMarketProducts::with('shop')->where('status', 1)->where('is_approved', 1)->get();

        return Inertia::render('User/Pages/LocalMarket', [
            'items' => $items,
            'banner' => $banner
        ]);
    }

    public function productdetails($id)
    {
        $details =  LocalMarketProducts::with('shop')->where('product_id', $id)->where('status', 1)->where('is_approved', 1)->first();
        $related = LocalMarketProducts::with('shop')->where('product_id', '!=', $id)->where('status', 1)->where('is_approved', 1)->get();


        if (!$details) {
            return redirect()->route('user.localmarket.index')->with('error', 'Product not found.');
        }

        return Inertia::render('User/Pages/ProductDetails', [
            'product' => $details,
            'related' => $related,
        ]);
    }
}
