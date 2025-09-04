<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\BarangayInfo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BarangayInfoController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = BarangayInfo::latest()->get();

            return Inertia::render('Admin/Pages/BarangayInfo/AllBarangay', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = BarangayInfo::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/BarangayInfo/AllBarangay', [
            'items' => $items,
        ]);
    }

    public function edit($id)
    {
        $item = BarangayInfo::findOrFail($id);
        return Inertia::render('Admin/Pages/BarangayInfo/EditBarangayInfo', [
            'item' => $item,
        ]);
    }

    public function update(Request $request, $id)
    {

        try {
            $request->validate([
                'captain' => 'required|string|max:255',
                'highlights' => 'nullable|string|max:255',
            ]);

            BarangayInfo::where('id', $id)->update([
                'captain' => $request->captain,
                'highlights' => $request->highlights,
            ]);

            return redirect()->route('barangayinfo.index')->with('success', 'Barangay Info updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' =>  $e->getMessage()]);
        }
    }
}
