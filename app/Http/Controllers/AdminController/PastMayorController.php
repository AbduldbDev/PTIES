<?php

namespace App\Http\Controllers\AdminController;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Models\PastMayors;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PastMayorController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = PastMayors::orderByRaw("CAST(SUBSTRING_INDEX(term, ' ', 1) AS UNSIGNED) DESC")->get();

            return Inertia::render('Admin/Pages/PastMayors/AllMayors', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = PastMayors::orderByRaw("CAST(SUBSTRING_INDEX(term, ' ', 1) AS UNSIGNED) DESC")->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/PastMayors/AllMayors', [
            'items' => $items
        ]);
    }

    public function new()
    {
        return Inertia::render('Admin/Pages/PastMayors/NewMayor');
    }

    public function create(Request $request)
    {
        try {
            $request->validate([
                'name'           => 'required|string|max:255',
                'position'       => 'required|string|max:255',
                'start_term' => 'required|digits:4',
                'end_term'   => 'required|digits:4',
                'image'          => 'required|image|mimes:webp,jpg,jpeg,png|max:2048',
            ]);

            $imagePath = null;
            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('PastMayors', 'public');
                $imagePath = '/storage/' . $path;
            }
            $term = $request->start_term . ' - ' . $request->end_term;

            PastMayors::create([
                'name'        => $request->name,
                'position'    => $request->position,
                'term'        => $term,
                'image'       => $imagePath,
            ]);

            return redirect()->route('pastmayor.index')->with('success', 'Past Mayor saved successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }


    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'name'        => 'required|string|max:255',
                'position'    => 'required|string|max:255',
                'start_term'  => 'required|digits:4',
                'end_term'    => 'required|digits:4',
                'image'       => 'nullable|image|mimes:webp,jpg,jpeg,png|max:2048',
            ]);

            $pastMayor = PastMayors::findOrFail($id);

            if ($request->hasFile('image')) {
                if ($pastMayor->image && str_starts_with($pastMayor->image, '/storage/') && file_exists(public_path($pastMayor->image))) {
                    unlink(public_path($pastMayor->image));
                }

                $path = $request->file('image')->store('PastMayors', 'public');
                $pastMayor->image = '/storage/' . $path;
            }

            $term = $request->start_term . ' - ' . $request->end_term;

            $pastMayor->update([
                'name'     => $request->name,
                'position' => $request->position,
                'term'     => $term,
                'image'    => $pastMayor->image,
            ]);

            return redirect()->route('pastmayor.index')->with('success', 'Past Mayor updated successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }


    public function edit($id)
    {
        $mayor = PastMayors::findOrFail($id);
        return Inertia::render('Admin/Pages/PastMayors/EditMayor', [
            'item' => $mayor,
        ]);
    }

    public function delete($id)
    {
        try {
            $mayor = PastMayors::findOrFail($id);
            if ($mayor->image) {
                Storage::disk('public')->delete($mayor->image);
            }
            $mayor->delete();

            return redirect()->back()->with('success', 'Past Mayor deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
