<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\LocalProducts;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class LocalProductsController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = LocalProducts::latest()->get();

            return Inertia::render('Admin/Pages/LocalProducts/AllProducts', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = LocalProducts::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/LocalProducts/AllProducts', [
            'items' => $items
        ]);
    }

    public function new()
    {
        return Inertia::render('Admin/Pages/LocalProducts/AddNew');
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
                'image'             => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
                'exp_title'      => 'required|string|max:255',
                'exp_icon'       => 'required|string|max:255',
                'exp_desc'       => 'required|string',
            ]);
            $category = ($validated['category_icon'] ?? '') . '|' . $validated['category'];

            $exp = ($validated['exp_icon'] ?? '') . '|'
                . ($validated['exp_title'] ?? '') . '|'
                . ($validated['exp_desc'] ?? '');

            $ImagePath = null;
            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('Products', $filename, 'public');
            }

            LocalProducts::create([
                'category'          => $category,
                'name'              => $validated['name'],
                'description'       => $validated['description'],
                'highlights_title'  => $validated['highlights_title'],
                'highlights_content' => json_encode($request->highlights_content),
                'image'             => $ImagePath,
                'exp'            => $exp,
            ]);

            return redirect()->route('localproducts.index')->with('success', 'Local product created successfully.');
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
                'image'             => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:25600',
                'exp_title'      => 'required|string|max:255',
                'exp_icon'       => 'required|string|max:255',
                'exp_desc'       => 'required|string',
            ]);

            $category = ($validated['category_icon'] ?? '') . '|' . $validated['category'];

            $exp = ($validated['exp_icon'] ?? '') . '|'
                . ($validated['exp_title'] ?? '') . '|'
                . ($validated['exp_desc'] ?? '');

            $product = LocalProducts::findOrFail($id);
            if ($request->hasFile('image')) {
                if ($product->image && Storage::disk('public')->exists($product->image)) {
                    Storage::disk('public')->delete($product->image);
                }

                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('Products', $filename, 'public');
            } else {
                $ImagePath = $product->image;
            }

            $product->update([
                'category'          => $category,
                'name'              => $validated['name'],
                'description'       => $validated['description'],
                'highlights_title'  => $validated['highlights_title'],
                'highlights_content' => json_encode($request->highlights_content),
                'image'             => $ImagePath,
                'exp'            => $exp,
            ]);

            return redirect()->route('localproducts.index')->with('success', 'Local product updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $terminal = LocalProducts::findOrFail($id);
        $terminal->highlights_content  = $this->parseContentValue($terminal->highlights_content);

        return Inertia::render('Admin/Pages/LocalProducts/EditProducts', [
            'item' => $terminal,
        ]);
    }


    public function delete($id)
    {
        try {
            $product = LocalProducts::findOrFail($id);
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $product->delete();

            return redirect()->back()->with('success', 'Local Product deleted successfully');
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
