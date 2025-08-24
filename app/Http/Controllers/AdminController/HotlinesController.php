<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\PakilHotlines;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class HotlinesController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = PakilHotlines::latest()->get();

            return Inertia::render('Admin/Pages/Hotlines/AllHotlines', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = PakilHotlines::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/Hotlines/AllHotlines', [
            'items' => $items,
        ]);
    }

    public function new()
    {
        return Inertia::render('Admin/Pages/Hotlines/NewHotline');
    }

    public function create(Request $request)
    {

        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'category' => 'required|string|max:255',
                'icon' => 'required|string|max:255',
                'hotline' => 'required|string|max:255',
                'contact' => 'required|string|max:255',
                'location' => 'required|string|max:255',
                'long' => 'required',
                'lat' => 'required',
            ]);

            PakilHotlines::create([
                'name' => $request->name,
                'category' => $request->category,
                'icon' => $request->icon,
                'hotline' => $request->hotline,
                'contact' => $request->contact,
                'location' => $request->location,
                'long' => $request->long,
                'lat' => $request->lat,
            ]);

            return redirect()->back()->with('success', 'Hotline created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' =>  $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $item = PakilHotlines::findOrFail($id);
        return Inertia::render('Admin/Pages/Hotlines/EditHotline', [
            'item' => $item,
        ]);
    }

    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'category' => 'required|string|max:255',
                'icon' => 'required|string|max:255',
                'hotline' => 'required|string|max:255',
                'contact' => 'required|string|max:255',
                'location' => 'required|string|max:255',
                'long' => 'required',
                'lat' => 'required',
            ]);

            $guide = PakilHotlines::findOrFail($id);
            $guide->update($request->all());

            return redirect()->back()->with('success', 'Hotline updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' =>  $e->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {
            $guide = PakilHotlines::findOrFail($id);
            if ($guide->image) {
                Storage::disk('public')->delete($guide->image);
            }
            $guide->delete();

            return redirect()->back()->with('success', 'Hotline deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
