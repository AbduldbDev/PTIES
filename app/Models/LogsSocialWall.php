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
        'details_id'
    ];
}
