<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccountEmployee extends Model
{
    protected $table = 'account_employees';

    protected $fillable = [
        'user_id',
        'first_name',
        'middle_name',
        'last_name',
        'gender',
        'contact',
        'address',
        'position',
        'facebook',
        'email',
        'date_employed',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
