<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RewardsLogs extends Model
{
    protected $table = 'rewards_logs';
    protected $fillable = [
        'reward_id',
        'user_id',
        'status',
        'completed_at',
        'points',
    ];

    public function reward()
    {
        return $this->belongsTo(Rewards::class, 'reward_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
