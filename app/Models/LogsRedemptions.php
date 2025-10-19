<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LogsRedemptions extends Model
{
    protected $table = 'logs_redemptions';
    protected $fillable = [
        'rewards_id',
        'user_id',
        'status',
        'details_id'
    ];

    public function rewards()
    {
        return $this->belongsTo(Rewards::class, 'rewards_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function details()
    {
        return $this->belongsTo(RewardsLogs::class, 'details_id');
    }
}
