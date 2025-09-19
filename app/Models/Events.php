<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    protected $table = 'events';
    protected $fillable = [
        'title',
        'image',
        'start_date',
        'end_date',
        'description',
        'schedules',
        'admission',
        'attire',
        'contacts',
        'long',
        'lat',
    ];
}
