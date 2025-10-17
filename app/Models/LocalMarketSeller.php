<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LocalMarketSeller extends Model
{
    protected $table = 'local_market_sellers';
    protected $fillable = [
        'shop_id',
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
        'business_permit',
        'additional_docs',
        'status',
        'long',
        'lat',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
