<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\SociallWallLikes;

class SocialWall extends Model
{
    protected $table = 'social_wall';
    protected $fillable = [
        'user_id',
        'post_id',
        'caption',
        'image',
        'like',
        'is_approved'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function likes()
    {
        return $this->hasMany(SociallWallLikes::class, 'post_id');
    }
}
