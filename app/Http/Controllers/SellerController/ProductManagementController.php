<?php

namespace App\Http\Controllers\SellerController;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LocalMarketProducts;
use App\Models\LocalMarketSeller;
use Inertia\Inertia;
use Illuminate\Support\Str;


class ProductManagementController extends Controller
{
    public function store(Request $request)
    {
        try {

            $validated = $request->validate([
                'product_name' => 'required|string|max:255',
                'category' => 'required|string|max:255',
                'description' => 'required|string',
                'images.*' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
                'variants' => 'required|array',
                'variants.*.name' => 'required_with:variants|string|max:255',
                'variants.*.price' => 'required_with:variants|numeric',
                'variants.*.description' => 'required_with:variants|string',
                'variants.*.image' => 'required_with:variants|image|mimes:jpeg,png,jpg,webp|max:2048',
            ]);

            $imagePaths = [];


            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    $path = $image->store('Seller/Products/Products', 'public');
                    $imagePaths[] = '/storage/' . $path;
                }
            }

            $variantsData = [];

            if (!empty($validated['variants'])) {
                foreach ($validated['variants'] as $variant) {
                    $variantImagePath = null;

                    if (isset($variant['image']) && $variant['image'] instanceof \Illuminate\Http\UploadedFile) {
                        $storedPath = $variant['image']->store('Seller/Products/Variants', 'public');
                        $variantImagePath = '/storage/' . $storedPath;
                    }

                    $variantsData[] = [
                        'name' => $variant['name'],
                        'price' => $variant['price'] ?? null,
                        'description' => $variant['description'] ?? null,
                        'image' => $variantImagePath,
                    ];
                }
            }
            $seller = LocalMarketSeller::where('user_id', Auth::id())->first();

            do {
                $productID =  'PRDCT' . Str::upper(Str::random(5));
            } while (LocalMarketSeller::where('shop_id', $productID)->exists());


            $product = LocalMarketProducts::create([
                'product_id' => $productID,
                'shop_id' => $seller->id,
                'product_name' => $request->product_name,
                'category' => $request->category,
                'description' => $request->description,
                'images' => json_encode($imagePaths),
                'variants' => json_encode($variantsData),
            ]);

            return redirect()->route('sellerproducts.confirmation')->with('success', 'created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' =>  $e->getMessage()]);
        }
    }

    public function confirmation()
    {
        return Inertia::render('User/Pages/SellerProductConfirmation');
    }


    public function new()
    {
        return Inertia::render('User/Pages/SellerAddNewProduct');
    }

    
}
