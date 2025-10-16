<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LocalMarketSeller extends Model
{
    protected $fillable = [
        'user_id',
        'business_name',
        'barangay',
        'location',
        'bio',
        'logo',
        'owner_name',
        'owner_contact',
        'owner_address',
        'email',
        'category',
        'product_description',
        'product_images',
        'min_price',
        'max_price',
        'availability',
        'facebook_link',
        'instagram_link',
        'tiktok_link',
        'website_link',
        'other_links',
        'business_permit',
        'additional_docs',
        'status',
        'long',
        'lat',
    ];
}
