<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\PakilGuides;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class TourGuideController extends Controller
{


    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = PakilGuides::latest()->get();

            return Inertia::render('Admin/Pages/TourGuides/AllGuides', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = PakilGuides::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/TourGuides/AllGuides', [
            'items' => $items
        ]);
    }


    public function new()
    {
        return Inertia::render('Admin/Pages/TourGuides/NewGuide');
    }


    public function create(Request $request)
    {


        try {
            $request->validate([
                'name' => 'required',
                'gender' => 'required',
                'description' => 'required',
                'contact' => 'required',
                'image' => 'required',
            ]);

            $ImagePath = null;
            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('TourGuides', $filename, 'public');
            }

            PakilGuides::create([
                'name' => $request->name,
                'gender' => $request->gender,
                'description' => $request->description,
                'contact' => $request->contact,
                'facebook'  => $request->facebook,
                'image' => $ImagePath,
            ]);

            return redirect()->route('tourguide.index')->with('success', 'Tour guide added successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $item = PakilGuides::findOrFail($id);
        return Inertia::render('Admin/Pages/TourGuides/EditGuide', [
            'item' => $item
        ]);
    }


    public function update(Request $request, $id)
    {
        try {

            $guide = PakilGuides::find($id);

            if (!$guide) {
                return redirect()->back()->with('error', 'Guide not found');
            }

            $request->validate([
                'name' => 'required',
                'gender' => 'required',
                'description' => 'required',
                'contact' => 'required',
            ]);

            $ImagePath = $guide->image;

            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('TourGuides', $filename, 'public');

                if ($guide->image) {
                    Storage::disk('public')->delete($guide->image);
                }
            }

            $guide->update([
                'name' => $request->name,
                'gender' => $request->gender,
                'description' => $request->description,
                'contact' => $request->contact,
                'facebook' => $request->facebook,
                'image' => $ImagePath,
            ]);

            return redirect()->back()->with('success', 'Guide updated successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }


    public function delete($id)
    {
        try {
            $guide = PakilGuides::findOrFail($id);
            if ($guide->image) {
                Storage::disk('public')->delete($guide->image);
            }
            $guide->delete();

            return redirect()->back()->with('success', 'Tour guide deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
