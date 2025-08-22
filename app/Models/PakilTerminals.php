<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PakilTerminals extends Model
{
    protected $table = 'pakil_terminals';
    protected $fillable = [
        'name',
        'routes',
        'sched',
        'sched_desc',
        'long',
        'lat',
    ];
}
