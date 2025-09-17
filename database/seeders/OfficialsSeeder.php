<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OfficialsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $officials = [
            ['name' => 'Ronald James V. Hidalgo', 'position' => 'Municipal Mayor'],
            ['name' => 'Ariel V. Formoles', 'position' => 'Municipal Vice Mayor'],

            ['name' => 'Aileen S. Cailles', 'position' => 'SB Member'],
            ['name' => 'Vlacheslav Vaarniv D. Martinez', 'position' => 'SB Member'],
            ['name' => 'Amelita I. Del Moro', 'position' => 'SB Member'],
            ['name' => 'Narcing A. Catarino', 'position' => 'SB Member'],
            ['name' => 'Carville M. Auditor', 'position' => 'SB Member'],
            ['name' => 'Elmer B. Cotoner', 'position' => 'SB Member'],
            ['name' => 'Kevin M. Reyes', 'position' => 'SB Member'],
            ['name' => 'Mark Benito R. Caballero', 'position' => 'SB Member'],

            ['name' => 'Elyne Suzan L. Eleda', 'position' => 'Municipal Accountant'],
            ['name' => 'Armel S. Yerro', 'position' => 'Municipal Treasurer'],
            ['name' => 'Cecilia SG. Balita', 'position' => 'Municipal Budget Officer'],
        ];

        foreach ($officials as $official) {
            DB::table('officials')->insert([
                'name' => $official['name'],
                'position' => $official['position'],
                'term' => '2022-2025',
                'image' => '/User/Images/ace.png',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
