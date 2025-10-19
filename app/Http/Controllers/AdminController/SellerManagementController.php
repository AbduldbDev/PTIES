<?php

namespace App\Http\Controllers\AdminController;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\LocalMarketSeller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\SellerApprovalMail;
use App\Mail\SellerRejectMail;
use App\Models\LogsSeller;

class SellerManagementController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);
        if ($request->input('per_page') === 'all') {
            $sellers = LocalMarketSeller::where('status', 1)->latest()->get();
            $sellers->transform(function ($terminal) {
                $terminal->routes = $this->parseContentValue($terminal->routes);
                return $terminal;
            });

            return Inertia::render('Admin/Pages/LocalMarketSeller/AllSellers', [
                'items' => [
                    'data' => $sellers,
                    'links' => [],
                    'meta' => null
                ],
                'status' => 'All'
            ]);
        }

        $sellers = LocalMarketSeller::where('status', 1)->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $sellers->appends(['per_page' => $perPage]);
        }


        return Inertia::render('Admin/Pages/LocalMarketSeller/AllSellers', [
            'items' => $sellers,
            'status' => 'All'
        ]);
    }

    public function pending(Request $request)
    {
        $perPage = $request->input('per_page', 20);
        if ($request->input('per_page') === 'all') {
            $sellers = LocalMarketSeller::where('status', 0)->latest()->get();
            $sellers->transform(function ($terminal) {
                $terminal->routes = $this->parseContentValue($terminal->routes);
                return $terminal;
            });

            return Inertia::render('Admin/Pages/LocalMarketSeller/AllSellers', [
                'items' => [
                    'data' => $sellers,
                    'links' => [],
                    'meta' => null
                ],
                'status' => 'Pending'
            ]);
        }

        $sellers = LocalMarketSeller::where('status', 0)->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $sellers->appends(['per_page' => $perPage]);
        }


        return Inertia::render('Admin/Pages/LocalMarketSeller/AllSellers', [
            'items' => $sellers,
            'status' => 'Pending'
        ]);
    }

    public function rejected(Request $request)
    {
        $perPage = $request->input('per_page', 20);
        if ($request->input('per_page') === 'all') {
            $sellers = LocalMarketSeller::where('status', 2)->latest()->get();
            $sellers->transform(function ($terminal) {
                $terminal->routes = $this->parseContentValue($terminal->routes);
                return $terminal;
            });

            return Inertia::render('Admin/Pages/LocalMarketSeller/AllSellers', [
                'items' => [
                    'data' => $sellers,
                    'links' => [],
                    'meta' => null
                ],
                'status' => 'Rejected'
            ]);
        }

        $sellers = LocalMarketSeller::where('status', 2)->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $sellers->appends(['per_page' => $perPage]);
        }


        return Inertia::render('Admin/Pages/LocalMarketSeller/AllSellers', [
            'items' => $sellers,
            'status' => 'Rejected'
        ]);
    }

    public function view($id)
    {
        $sellers = LocalMarketSeller::findOrFail($id);

        return Inertia::render('Admin/Pages/LocalMarketSeller/SellerDetails', [
            'seller' => $sellers,
        ]);
    }

    public function approve($id)
    {
        $seller = LocalMarketSeller::findOrFail($id);
        $seller->status = 1;
        $seller->save();
        Mail::to($seller->email)->send(new SellerApprovalMail($seller));
        LogsSeller::create([
            'seller_id' => $seller->id,
            'user_id' => Auth::id(),
            'status' => 'Approve'
        ]);


        return redirect()->back()->with('success', 'Seller Approved successfully.');
    }

    public function reject($id)
    {
        $seller = LocalMarketSeller::findOrFail($id);
        $seller->status = 2;
        $seller->save();
        Mail::to($seller->email)->send(new SellerRejectMail($seller));
        LogsSeller::create([
            'seller_id' => $seller->id,
            'user_id' => Auth::id(),
            'status' => 'Reject'
        ]);
        return redirect()->back()->with('success', 'Seller Rejected successfully.');
    }

    public function delete($id)
    {
        $seller = LocalMarketSeller::findOrFail($id);
        $seller->delete();

        return redirect()->route('socailwall.approved')->with('success', 'Seller Deleted successfully.');
    }

    protected function parseContentValue($value)
    {
        $decoded = json_decode($value, true);
        return (json_last_error() === JSON_ERROR_NONE) ? $decoded : $value;
    }
}
