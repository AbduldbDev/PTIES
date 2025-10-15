<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\AccountUsers;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerAccountController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = AccountUsers::with('user')->latest()->get();

            return Inertia::render('Admin/Pages/TouristAccounts/AllAccounts', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = AccountUsers::with('user')->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/TouristAccounts/AllAccounts', [
            'items' => $items
        ]);
    }

    public function delete($id)
    {
        $product = User::findOrFail($id);
        $product->delete();

        return redirect()->back()->with('success', 'Cutomer Account deleted successfully!');
    }
}
