<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PastMayors extends Model
{
    protected $table = 'past_mayors';
    protected $fillable = [
        'name',
        'position',
        'term',
        'image',
    ];
}
