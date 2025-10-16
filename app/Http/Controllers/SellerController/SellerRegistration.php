<?php

namespace App\Http\Controllers\SellerController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LocalMarketSeller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\SellerConfirmationMail;

class SellerRegistration extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'business_name' => 'required|string|max:255',
                'barangay' => 'required|string|max:255',
                'location' => 'required|string|max:255',
                'bio' => 'nullable|string',
                'logo' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:20480',
                'owner_name' => 'required|string|max:255',
                'owner_contact' => 'required|string|max:50',
                'owner_address' => 'required|string|max:255',
                'email' => 'required|email|unique:local_market_sellers,email',
                'category' => 'required|array',
                'product_description' => 'required|string',
                'product_images.*' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:20480',
                'min_price' => 'nullable|numeric',
                'max_price' => 'nullable|numeric',
                'availability' => 'nullable|string|max:255',
                'facebook_link' => 'nullable|string|max:255',
                'instagram_link' => 'nullable|string|max:255',
                'tiktok_link' => 'nullable|string|max:255',
                'website_link' => 'nullable|string|max:255',
                'other_links' => 'nullable|string|max:255',
                'business_permit' => 'nullable|file|mimes:pdf,jpeg,png,jpg,webp|max:20480',
                'additional_docs.*' => 'nullable|file|mimes:pdf,jpeg,png,jpg,webp|max:20480',
                'long' => 'nullable|string',
                'lat' => 'nullable|string',
            ]);


            $logoPath = $request->hasFile('logo')
                ? '/storage/' . $request->logo->storeAs(
                    'Seller/Logo',
                    uniqid() . '_' . $request->logo->getClientOriginalName(),
                    'public'
                )
                : null;

            $permitPath = $request->hasFile('business_permit')
                ? '/storage/' . $request->business_permit->storeAs(
                    'Seller/Permits',
                    uniqid() . '_' . $request->business_permit->getClientOriginalName(),
                    'public'
                )
                : null;

            $productImages = [];
            if ($request->hasFile('product_images')) {
                foreach ($request->product_images as $image) {
                    $productImages[] = '/storage/' . $image->storeAs(
                        'Seller/Product_images',
                        uniqid() . '_' . $image->getClientOriginalName(),
                        'public'
                    );
                }
            }

            $additionalDocs = [];
            if ($request->hasFile('additional_docs')) {
                foreach ($request->additional_docs as $doc) {
                    $additionalDocs[] = '/storage/' . $doc->storeAs(
                        'Seller/Additional_docs',
                        uniqid() . '_' . $doc->getClientOriginalName(),
                        'public'
                    );
                }
            }

            do {
                $shopID = 'SHP' . Str::upper(Str::random(5));
            } while (LocalMarketSeller::where('shop_id', $shopID)->exists());

            $sellerData = LocalMarketSeller::create([
                'shop_id' => $shopID,
                'user_id' => Auth::id(),
                'business_name' => $request->business_name,
                'barangay' => $request->barangay,
                'location' => $request->location,
                'bio' => $request->bio,
                'logo' => $logoPath,
                'owner_name' => $request->owner_name,
                'owner_contact' => $request->owner_contact,
                'owner_address' => $request->owner_address,
                'email' => $request->email,
                'category' => json_encode($request->category),
                'product_description' => $request->product_description,
                'product_images' => json_encode($productImages),
                'min_price' => $request->min_price,
                'max_price' => $request->max_price,
                'availability' => $request->availability,
                'facebook_link' => $request->facebook_link,
                'instagram_link' => $request->instagram_link,
                'tiktok_link' => $request->tiktok_link,
                'website_link' => $request->website_link,
                'other_links' => $request->other_links,
                'business_permit' => $permitPath,
                'additional_docs' => json_encode($additionalDocs),
                'long' => $request->long,
                'lat' => $request->lat,
            ]);
            Mail::to($request->email)->send(new SellerConfirmationMail($sellerData));
            return redirect()->route('seller.confirmation')->with('success', 'created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' =>  $e->getMessage()]);
        }
    }

    public function confirmation()
    {
        return Inertia::render('User/Pages/SellerConfirmation');
    }
}
