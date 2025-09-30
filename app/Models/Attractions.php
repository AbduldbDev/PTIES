<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attractions extends Model
{
    protected $table = 'attractions';
    protected $fillable = [
        'name',
        'category',
        'operating_hours',
        'information',
        'history',
        'local_rules',
        'fun_facts',
        'fees',
        'contact',
        'images',
        'distance',
        'long',
        'lat',
        'points',
    ];
}
