<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use PgSql\Lob;

class LogsSeller extends Model
{
    protected $table = 'logs_sellers';
    protected $fillable = [
        'seller_id',
        'user_id',
        'status',
    ];
    public function seller()
    {
        return $this->belongsTo(LocalMarketSeller::class, 'seller_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
