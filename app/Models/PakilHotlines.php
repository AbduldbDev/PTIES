<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PakilHotlines extends Model
{
    protected $table = 'pakil_hotlines';
    protected $fillable = [
        'name',
        'category',
        'icon',
        'hotline',
        'contact',
        'location',
        'long',
        'lat',
    ];
}
