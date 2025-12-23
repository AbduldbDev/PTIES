<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CulturalProperties extends Model
{
    protected $table = 'cultural_properties';
    protected $fillable = [
        'category',
        'name',
        'description',
        'highlights_title',
        'highlights_content',
        'culture_type',
        'image',
        'legacy',
    ];
}
