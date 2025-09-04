<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LocalProducts extends Model
{
    protected $table = 'local_products';
    protected $fillable = [
        'category',
        'name',
        'description',
        'highlights_title',
        'highlights_content',
        'image',
        'exp',
    ];
}
