<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContentPromotional extends Model
{
    protected $table = 'content_promvid';
    protected $fillable = [
        'title',
        'slogan',
        'description',
        'highlights',
        'thumbnail',
        'video',
    ];

    protected $casts = [
        'highlights' => 'array',
    ];
}
