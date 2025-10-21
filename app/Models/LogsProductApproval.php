<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LogsProductApproval extends Model
{
    protected $table = 'logs_product_approvals';
    protected $fillable = [
        'product_id',
        'user_id',
        'status',
        'details_id'
    ];
    public function products()
    {
        return $this->belongsTo(LocalMarketProducts::class, 'product_id');
    }

      public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
