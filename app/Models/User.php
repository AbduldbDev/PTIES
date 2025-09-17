<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'password',
        'google_id',
        'user_type',
        'avatar',
        'remember_token',
        'otp',
        'otp_expires_at',
        'is_verified',
        'pakil_points'
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'email_verified_at',
        'otp',
        'otp_expires_at',
        'is_verified',
        'google_id',
        'updated_at',
    ];


    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function profile()
    {
        return $this->hasOne(AccountEmployee::class, 'user_id');
    }

    public function userProfile()
    {
        return $this->hasOne(AccountUsers::class, 'user_id');
    }

    public function sellerProfile()
    {
        return $this->hasOne(AccountSellers::class, 'user_id');
    }
}
