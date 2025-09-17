<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\Officials;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class OfficialsController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = Officials::orderByRaw(
                "CASE 
                    WHEN position = 'Municipal Mayor' THEN 1
                    WHEN position = 'Municipal Vice Mayor' THEN 2
                    WHEN position = 'SB Member' THEN 3
                    ELSE 4
                END"
            )->get();

            return Inertia::render('Admin/Pages/Officials/AllOfficials', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = Officials::orderByRaw(
            "CASE 
                WHEN position = 'Municipal Mayor' THEN 1
                WHEN position = 'Municipal Vice Mayor' THEN 2
                WHEN position = 'SB Member' THEN 3
                ELSE 4
            END"
        )->paginate($perPage);

        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/Officials/AllOfficials', [
            'items' => $items
        ]);
    }

    public function new()
    {
        return Inertia::render('Admin/Pages/Officials/NewOfficial');
    }

    public function create(Request $request)
    {
        try {
            $validated = $request->validate([
                'name'           => 'required|string|max:255',
                'position'       => 'required|string|max:255',
                'customPosition' => 'nullable|string|max:255',
                'term'           => 'required|string|max:255',
                'biography'      => 'nullable|string',
                'achievements'   => 'nullable|string',
                'education'      => 'nullable|array',
                'facebook'       => 'nullable|string|max:255',
                'contact'        => 'nullable|string|max:255',
                'email'          => 'nullable|email|max:255',
                'image'          => 'nullable|image|mimes:webp,jpg,jpeg,png|max:2048',
            ]);

            $position = $validated['position'] === 'other'
                ? $validated['customPosition']
                : $validated['position'];

            if ($validated['position'] === 'other' && empty($validated['customPosition'])) {
                return redirect()->back()
                    ->withInput()
                    ->withErrors(['customPosition' => 'Custom Position is required when selecting Other.']);
            }

            $imagePath = null;
            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('officials', 'public');
                $imagePath = '/storage/' . $path;
            }

            $data = [
                'name'        => $request->name,
                'position'    => $position,
                'term'        => $request->term,
                'biography'   => $request->biography,
                'achievements' => $request->achievements,
                'education'   => json_encode($request->input('education', [])),
                'facebook'    => $request->facebook,
                'contact'     => $request->contact,
                'email'       => $request->email,
                'image'       => $imagePath,
            ];

            if (in_array($position, ['Municipal Mayor', 'Municipal Vice Mayor'])) {
                Officials::updateOrCreate(
                    ['position' => $position],
                    $data
                );
            } else {
                Officials::create($data);
            }

            return redirect()->route('officials.index')
                ->with('success', 'Official saved successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $Official = Officials::findOrFail($id);
        $Official->education = $this->parseContentValue($Official->education);

        return Inertia::render('Admin/Pages/Officials/EditOfficials', [
            'item' => $Official,
        ]);
    }

    public function update(Request $request, $id)
    {
        try {

            $validated = $request->validate([
                'name'           => 'required|string|max:255',
                'position'       => 'required|string|max:255',
                'customPosition' => 'nullable|string|max:255',
                'term'           => 'required|string|max:255',
                'biography'      => 'nullable|string',
                'achievements'   => 'nullable|string',
                'education'      => 'nullable|array',
                'facebook'       => 'nullable|string|max:255',
                'contact'        => 'nullable|string|max:255',
                'email'          => 'nullable|email|max:255',
                'image'          => 'nullable|image|mimes:webp,jpg,jpeg,png|max:2048',
            ]);

            $position = $validated['position'] === 'other'
                ? $validated['customPosition']
                : $validated['position'];

            if ($validated['position'] === 'other' && empty($validated['customPosition'])) {
                return redirect()->back()
                    ->withInput()
                    ->withErrors(['customPosition' => 'Custom Position is required when selecting Other.']);
            }

            $official = Officials::findOrFail($id);
            $imagePath = $official->image;
            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('officials', 'public');
                $imagePath = '/storage/' . $path;
            }

            $data = [
                'name'         => $request->name,
                'position'     => $position,
                'term'         => $request->term,
                'biography'    => $request->biography,
                'achievements' => $request->achievements,
                'education'    => json_encode($request->input('education', [])),
                'facebook'     => $request->facebook,
                'contact'      => $request->contact,
                'email'        => $request->email,
                'image'        => $imagePath,
            ];

            if (in_array($position, ['Municipal Mayor', 'Municipal Vice Mayor'])) {
                Officials::updateOrCreate(
                    ['position' => $position],
                    $data
                );
            } else {
                $official->update($data);
            }

            return redirect()->route('officials.index')
                ->with('success', 'Official updated successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {
            $product = Officials::findOrFail($id);
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $product->delete();

            return redirect()->back()->with('success', 'Official deleted successfully');
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
