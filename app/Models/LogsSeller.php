<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LogsSeller extends Model
{
    protected $table = 'logs_sellers';
    protected $fillable = [
        'seller_id',
        'user_id',
        'status',
        'details_id'
    ];
}
