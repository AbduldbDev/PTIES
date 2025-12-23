<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CulturalProperties;
use Illuminate\Support\Facades\Storage;


class CulturalPropertiesController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = CulturalProperties::latest()->get();

            return Inertia::render('Admin/Pages/CulturalProperties/AllProperties', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = CulturalProperties::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/CulturalProperties/AllProperties', [
            'items' => $items
        ]);
    }


    public function new()
    {
        return Inertia::render('Admin/Pages/CulturalProperties/NewProperty');
    }

    public function create(Request $request)
    {
        try {
            $validated =  $request->validate([
                'category'          => 'required|string|max:255',
                'category_icon'     => 'required|string|max:255',
                'name'              => 'required|string|max:255',
                'description'       => 'required|string',
                'culture_type'      => 'required|array',
                'culture_type.*'    => 'required|string|max:255',
                'highlights_title'  => 'required|string|max:255',
                'highlights_content' => 'required|array',
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
                $ImagePath = $request->file('image')->storeAs('CulturalProperties', $filename, 'public');
            }

            CulturalProperties::create([
                'category'          => $category,
                'name'              => $validated['name'],
                'description'       => $validated['description'],
                'culture_type'      => json_encode($validated['culture_type']),
                'highlights_title'  => $validated['highlights_title'],
                'highlights_content' => json_encode($request->highlights_content),
                'image'             => $ImagePath,
                'legacy'            => $legacy,
            ]);

            return redirect()->back()->with('success', 'Cultural Property created successfully.');
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
                'culture_type'      => 'required|array',
                'culture_type.*'    => 'required|string|max:255',
                'highlights_title'  => 'required|string|max:255',
                'highlights_content' => 'required|array',
                'image'             => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
                'legacy_title'      => 'required|string|max:255',
                'legacy_icon'       => 'required|string|max:255',
                'legacy_desc'       => 'required|string|max:255',
            ]);

            $category = ($validated['category_icon'] ?? '') . '|' . $validated['category'];

            $legacy = ($validated['legacy_icon'] ?? '') . '|'
                . ($validated['legacy_title'] ?? '') . '|'
                . ($validated['legacy_desc'] ?? '');

            $personality = CulturalProperties::findOrFail($id);
            if ($request->hasFile('image')) {
                if ($personality->image && Storage::disk('public')->exists($personality->image)) {
                    Storage::disk('public')->delete($personality->image);
                }

                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('CulturalProperties', $filename, 'public');
            } else {
                $ImagePath = $personality->image;
            }

            $personality->update([
                'category'          => $category,
                'name'              => $validated['name'],
                'description'       => $validated['description'],
                'culture_type'      => json_encode($validated['culture_type']),
                'highlights_title'  => $validated['highlights_title'],
                'highlights_content' => json_encode($request->highlights_content),
                'image'             => $ImagePath,
                'legacy'            => $legacy,
            ]);

            return redirect()->back()->with('success', 'Cultural Property updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $details = CulturalProperties::findOrFail($id);
        $details->highlights_content  = $this->parseContentValue($details->highlights_content);
        $details->culture_type  = $this->parseContentValue($details->culture_type);

        return Inertia::render('Admin/Pages/CulturalProperties/EditProperty', [
            'item' => $details,
        ]);
    }

    public function delete($id)
    {
        try {
            $personality = CulturalProperties::findOrFail($id);
            if ($personality->image) {
                Storage::disk('public')->delete($personality->image);
            }
            $personality->delete();

            return redirect()->back()->with('success', 'Cultural Property deleted successfully');
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
