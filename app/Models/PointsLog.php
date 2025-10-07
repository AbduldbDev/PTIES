<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PointsLog extends Model
{
    protected $table = 'points_logs';
    protected $fillable = [
        'attraction_id',
        'user_id',
        'points',
    ];
}
