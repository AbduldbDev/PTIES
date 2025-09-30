<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\AccountEmployee;
use App\Models\AccountUsers;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'email'     => 'admin@gmail.com',
            'password'  => Hash::make('Password'),
            'user_type' => 'admin',
        ]);

        AccountEmployee::create([
            'user_id'       => $admin->id,
            'first_name'    => "Juan",
            'middle_name'   => "D.",
            'last_name'     => "Dela Cruz",
            'gender'        => "male",
            'contact'       => "09123456789",
            'address'       => "Pakil, Laguna",
            'position'      => "Administrator",
            'email'         => 'admin@gmail.com',
            'date_employed' => Carbon::now(),
            'created_at'    => Carbon::now(),
            'updated_at'    => Carbon::now(),
        ]);

        $user = User::create([
            'email'     => 'user@gmail.com',
            'password'  => Hash::make('Password'),
            'user_type' => 'user',
            'is_verified' => true,
        ]);

        AccountUsers::create([
            'user_id'       => $user->id,
            'first_name'    => "Pedro",
            'middle_name'   => "S.",
            'last_name'     => "Santos",
            'phone'         => "09987654321",
            'address'       => "Pakil, Laguna",
            'created_at'    => Carbon::now(),
            'updated_at'    => Carbon::now(),
        ]);
    }
}
