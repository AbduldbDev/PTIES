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

    public function attraction()
    {
        return $this->belongsTo(Attractions::class, 'attraction_id');
    }
}
