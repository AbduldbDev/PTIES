<?php

namespace App\Http\Controllers\AdminController;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\LocalMarketProducts;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Mail\ProductApprovalMail;
use App\Mail\ProductRejectMail;
use App\Models\LogsProductApproval;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;



class MarketProductsController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = LocalMarketProducts::with('shop')->where('status', 1)->where('is_approved', 1)->latest()->get();

            return Inertia::render('Admin/Pages/LocalMarketProducts/AllProducts', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
                'status' => "All"
            ]);
        }

        $items = LocalMarketProducts::with('shop')->where('status', 1)->where('is_approved', 1)->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/LocalMarketProducts/AllProducts', [
            'items' => $items,
            'status' => "All"
        ]);
    }

    public function new(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = LocalMarketProducts::with('shop')->where('status', 0)->where('is_approved', 0)->latest()->get();

            return Inertia::render('Admin/Pages/LocalMarketProducts/AllProducts', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
                'status' => "New"
            ]);
        }

        $items = LocalMarketProducts::with('shop')->where('status', 0)->where('is_approved', 0)->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/LocalMarketProducts/AllProducts', [
            'items' => $items,
            'status' => "New"
        ]);
    }


    public function edit(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = LocalMarketProducts::with('shop')->where('status', 0)->where('is_approved', 1)->latest()->get();

            return Inertia::render('Admin/Pages/LocalMarketProducts/AllProducts', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
                'status' => "Edit Request"
            ]);
        }

        $items = LocalMarketProducts::with('shop')->where('status', 0)->where('is_approved', 1)->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/LocalMarketProducts/AllProducts', [
            'items' => $items,
            'status' => "Edit Request"
        ]);
    }

    public function view($id)
    {
        $product = LocalMarketProducts::findOrFail($id);

        return Inertia::render('Admin/Pages/LocalMarketProducts/ProductDetails', [
            'product' => $product,
        ]);
    }

    public function approve($id)
    {
        try {
            $product = LocalMarketProducts::with('shop.user')->findOrFail($id);
            $product->status = 1;
            $product->is_approved = 1;
            $product->save();

            $seller = $product->shop;
            Mail::to($seller->user->email)->send(new ProductApprovalMail($seller, $product));

            LogsProductApproval::create([
                'product_id' => $product->id,
                'user_id' => Auth::id(),
                'status' => 'Approve'
            ]);


            return redirect()->route('localmarketproducts.index')->with('success', 'Product Approved successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Approval saved, but email not sent: ' . $e->getMessage());
        }
    }

    public function reject($id)
    {
        try {
            $product = LocalMarketProducts::with('shop.user')->findOrFail($id);
            $product->delete();

            $seller = $product->shop;
            Mail::to($seller->user->email)->send(new ProductRejectMail($seller, $product));

            LogsProductApproval::create([
                'product_id' => $product->id,
                'user_id' => Auth::id(),
                'status' => 'Reject'
            ]);

            return redirect()->route('localmarketproducts.index')->with('success', 'Product Rejected successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Rejection saved, but email not sent: ' . $e->getMessage());
        }
    }
}
