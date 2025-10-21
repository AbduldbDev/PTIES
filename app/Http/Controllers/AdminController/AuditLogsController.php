<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\LogsProductApproval;
use App\Models\LogsRedemptions;
use App\Models\LogsSeller;
use App\Models\LogsSocialWall;
use App\Models\SocialWall;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuditLogsController extends Controller
{
    public function rewards(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = LogsRedemptions::with(['rewards', 'user.profile', 'details'])->latest()->get();

            return Inertia::render('Admin/Pages/AuditLogs/RewardRedeem', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = LogsRedemptions::with(['rewards', 'user.profile', 'details'])->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/AuditLogs/RewardRedeem', [
            'items' => $items
        ]);
    }

    public function products(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = LogsProductApproval::with(['products', 'user.profile'])->latest()->get();

            return Inertia::render('Admin/Pages/AuditLogs/ProductApproval', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = LogsProductApproval::with(['products', 'user.profile'])->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/AuditLogs/ProductApproval', [
            'items' => $items
        ]);
    }

    public function socialwall(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = LogsSocialWall::with(['post', 'user.profile'])->latest()->get();

            return Inertia::render('Admin/Pages/AuditLogs/SocialWall', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = LogsSocialWall::with(['post', 'user.profile'])->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/AuditLogs/SocialWall', [
            'items' => $items
        ]);
    }

    public function seller(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = LogsSeller::with(['seller', 'user.profile'])->latest()->get();

            return Inertia::render('Admin/Pages/AuditLogs/SellerApproval', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = LogsSeller::with(['seller', 'user.profile'])->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/AuditLogs/SellerApproval', [
            'items' => $items
        ]);
    }
}
