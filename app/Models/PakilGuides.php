<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PakilGuides extends Model
{
    protected $table = 'pakil_guides';
    protected $fillable = [
        'name',
        'gender',
        'description',
        'contact',
        'facebook',
        'image',
    ];
}
