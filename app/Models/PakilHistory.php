<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PakilHistory extends Model
{
    protected $table = 'pakil_histories';
    protected $fillable = [
        'date',
        'title',
        'description',
        'image',
    ];
}
