<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialWall extends Model
{
    protected $table = 'social_wall';
    protected $fillable = [
        'user_id',
        'post_id',
        'caption',
        'image',
        'like',
    ];
}
