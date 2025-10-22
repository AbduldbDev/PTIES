<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cookie;

class WebsiteVisit extends Model
{
    protected $fillable = [
        'visitor_id',
        'ip_address',
        'user_agent',
        'url',
        'visited_at'
    ];

    protected $casts = [
        'visited_at' => 'datetime'
    ];
}
