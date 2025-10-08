<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rewards extends Model
{
   protected $table = 'rewards';
    protected $fillable = [
        'name',
        'description',
        'price',
        'category',
        'image',
        'status',
    ];
}
