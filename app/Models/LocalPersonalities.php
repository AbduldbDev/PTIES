<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LocalPersonalities extends Model
{
    protected $table = 'local_personalities';
    protected $fillable = [
        'category',
        'name',
        'description',
        'highlights_title',
        'highlights_content',
        'born',
        'died',
        'image',
        'legacy',
    ];
}
