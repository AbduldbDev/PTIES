<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LocalMarketProducts extends Model
{
    protected $table = 'local_market_products';
    protected $fillable = [
        'product_id',
        'shop_id',
        'product_name',
        'category',
        'description',
        'variants',
        'images',
        'status',
        'is_approved'
    ];

    public function shop()
    {
        return $this->belongsTo(LocalMarketSeller::class, 'shop_id');
    }
}
