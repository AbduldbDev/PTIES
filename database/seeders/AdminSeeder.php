<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\AccountEmployee;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'email'  => 'admin@gmail.com',
            'password' => Hash::make('Password'),
            'user_type'  => 'admin'
        ]);

        AccountEmployee::create([
            'user_id' => $user->id,
            'first_name'  => "Juan",
            'middle_name' => "D.",
            'last_name' => "Dela Cruz",
            'gender' => "male",
            'contact' => "09123456789",
            'address'  => "pakil, laguna",
            'position' => "Administrator",
            'email'  =>  'admin@gmail.com',
            'date_employed' => Carbon::now(),
        ]);
    }
}
