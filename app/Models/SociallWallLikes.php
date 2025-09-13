<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SociallWallLikes extends Model
{
    protected $table = 'sociall_wall_likes';
    protected $fillable = [
        'user_id',
        'post_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function post()
    {
        return $this->belongsTo(SocialWall::class, 'post_id');
    }
}
