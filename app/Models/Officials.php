<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Officials extends Model
{
    protected $table = 'officials';
    protected $fillable = [
        'name',
        'position',
        'term',
        'image',
        'facebook',
        'contact',
        'email',
        'biography',
        'achievements',
        'education',
    ];
}
