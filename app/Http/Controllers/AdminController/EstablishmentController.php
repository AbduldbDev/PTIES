<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\PakilEstablishments;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class EstablishmentController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = PakilEstablishments::latest()->get();

            return Inertia::render('Admin/Pages/Establishment/AllEstablishment', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = PakilEstablishments::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/Establishment/AllEstablishment', [
            'items' => $items
        ]);
    }


    public function new()
    {
        return Inertia::render('Admin/Pages/Establishment/NewEstablishment');
    }

    public function edit($id)
    {
        $item = PakilEstablishments::findOrFail($id);
        return Inertia::render('Admin/Pages/Establishment/EditEstablishment', [
            'item' => $item
        ]);
    }

    public function create(Request $request)
    {
        try {
            $request->validate([
                'type' => 'required|string|max:255',
                'name' => 'required|string|max:255',
                'location' => 'required|string|max:255',
                'contact' => 'required|string|max:255',
                'facebook' => 'nullable|string|max:255',
                'long' => 'required|string|max:255',
                'lat' => 'required|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:25600',
            ]);

            $ImagePath = null;
            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('Establishments', $filename, 'public');
            }

            PakilEstablishments::create([
                'type' => $request->type,
                'name' => $request->name,
                'location' => $request->location,
                'contact' => $request->contact,
                'facebook'  => $request->facebook,
                'long'  => $request->long,
                'lat'  => $request->lat,
                'image' => $ImagePath,
            ]);

            return redirect()->route('establishment.index')->with('success', 'Establishment added successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
    public function update(Request $request, $id)
    {
        try {

            $establishment = PakilEstablishments::find($id);

            if (!$establishment) {
                return redirect()->back()->with('error', 'establishment not found');
            }

            $request->validate([
                'type' => 'required|string|max:255',
                'name' => 'required|string|max:255',
                'location' => 'required|string|max:255',
                'contact' => 'required|string|max:255',
                'facebook' => 'nullable|string|max:255',
                'long' => 'required|string|max:255',
                'lat' => 'required|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:25600',
            ]);

            $ImagePath = $establishment->image;

            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('Establishments', $filename, 'public');

                if ($establishment->image) {
                    Storage::disk('public')->delete($establishment->image);
                }
            }

            $establishment->update([
                'type' => $request->type,
                'name' => $request->name,
                'location' => $request->location,
                'contact' => $request->contact,
                'facebook'  => $request->facebook,
                'long'  => $request->long,
                'lat'  => $request->lat,
                'image' => $ImagePath,
            ]);

            return redirect()->route('establishment.index')->with('success', 'Establishment updated successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {
            $establishment = PakilEstablishments::findOrFail($id);
            if ($establishment->image) {
                Storage::disk('public')->delete($establishment->image);
            }
            $establishment->delete();

            return redirect()->back()->with('success', 'Establishment deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
