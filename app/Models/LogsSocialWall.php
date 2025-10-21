<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LogsSocialWall extends Model
{
    protected $table = 'logs_social_walls';
    protected $fillable = [
        'post_id',
        'user_id',
        'status',
    ];
    public function post()
    {
        return $this->belongsTo(LocalMarketProducts::class, 'product_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
