<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\LocalPersonalities;
use Illuminate\Support\Facades\Storage;

class LocalPersonalitiesController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = LocalPersonalities::latest()->get();

            return Inertia::render('Admin/Pages/LocalPersonalities/AllPersonalities', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = LocalPersonalities::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/LocalPersonalities/AllPersonalities', [
            'items' => $items
        ]);
    }

    public function new()
    {
        return Inertia::render('Admin/Pages/LocalPersonalities/AddNew');
    }

    public function create(Request $request)
    {

        try {
            $validated =  $request->validate([
                'category'          => 'required|string|max:255',
                'category_icon'     => 'required|string|max:255',
                'name'              => 'required|string|max:255',
                'description'       => 'required|string',
                'highlights_title'  => 'required|string|max:255',
                'highlights_content' => 'required|array',
                'born'              => 'required|string|max:255',
                'died'              => 'nullable|string|max:255',
                'image'             => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
                'legacy_title'      => 'required|string|max:255',
                'legacy_icon'       => 'required|string|max:255',
                'legacy_desc'       => 'required|string',
            ]);
            $category = ($validated['category_icon'] ?? '') . '|' . $validated['category'];

            $legacy = ($validated['legacy_icon'] ?? '') . '|'
                . ($validated['legacy_title'] ?? '') . '|'
                . ($validated['legacy_desc'] ?? '');

            $ImagePath = null;
            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('Personalities', $filename, 'public');
            }

            LocalPersonalities::create([
                'category'          => $category,
                'name'              => $validated['name'],
                'description'       => $validated['description'],
                'highlights_title'  => $validated['highlights_title'],
                'highlights_content' => json_encode($request->highlights_content),
                'born'              => $validated['born'] ?? null,
                'died'              => $validated['died'] ?? null,
                'image'             => $ImagePath,
                'legacy'            => $legacy,
            ]);

            return redirect()->back()->with('success', 'Local Personality created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' =>  $e->getMessage()]);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $validated = $request->validate([
                'category'          => 'required|string|max:255',
                'category_icon'     => 'required|string|max:255',
                'name'              => 'required|string|max:255',
                'description'       => 'required|string',
                'highlights_title'  => 'required|string|max:255',
                'highlights_content' => 'required|array',
                'born'              => 'required|string|max:255',
                'died'              => 'nullable|string|max:255',
                'image'             => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
                'legacy_title'      => 'required|string|max:255',
                'legacy_icon'       => 'required|string|max:255',
                'legacy_desc'       => 'required|string|max:255',
            ]);

            $category = ($validated['category_icon'] ?? '') . '|' . $validated['category'];

            $legacy = ($validated['legacy_icon'] ?? '') . '|'
                . ($validated['legacy_title'] ?? '') . '|'
                . ($validated['legacy_desc'] ?? '');

            $personality = LocalPersonalities::findOrFail($id);
            if ($request->hasFile('image')) {
                if ($personality->image && Storage::disk('public')->exists($personality->image)) {
                    Storage::disk('public')->delete($personality->image);
                }

                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('Personalities', $filename, 'public');
            } else {
                $ImagePath = $personality->image;
            }

            $personality->update([
                'category'          => $category,
                'name'              => $validated['name'],
                'description'       => $validated['description'],
                'highlights_title'  => $validated['highlights_title'],
                'highlights_content' => json_encode($request->highlights_content),
                'born'              => $validated['born'] ?? null,
                'died'              => $validated['died'] ?? null,
                'image'             => $ImagePath,
                'legacy'            => $legacy,
            ]);

            return redirect()->back()->with('success', 'Local Personality updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $terminal = LocalPersonalities::findOrFail($id);
        $terminal->highlights_content  = $this->parseContentValue($terminal->highlights_content);

        return Inertia::render('Admin/Pages/LocalPersonalities/EditPersonalities', [
            'item' => $terminal,
        ]);
    }


    public function delete($id)
    {
        try {
            $personality = LocalPersonalities::findOrFail($id);
            if ($personality->image) {
                Storage::disk('public')->delete($personality->image);
            }
            $personality->delete();

            return redirect()->back()->with('success', 'Local Personality deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    protected function parseContentValue($value)
    {
        $decoded = json_decode($value, true);
        return (json_last_error() === JSON_ERROR_NONE) ? $decoded : $value;
    }
}
