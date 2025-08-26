<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PakilEstablishments extends Model
{
    protected $table = 'pakil_establishments';
    protected $fillable = [
        'type',
        'name',
        'location',
        'contact',
        'facebook',
        'long',
        'lat',
        'image',
    ];
}
