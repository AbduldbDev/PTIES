<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangayInfo extends Model
{
    protected $table = 'barangay_infos';
    protected $fillable = [
        'barangay',
        'captain',
        'highlights',
        'type',
        'index'
    ];
}
