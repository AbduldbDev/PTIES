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
            ['name' => 'Ronald James V. Hidalgo', 'position' => 'Municipal Mayor',  'image' => '/default/officials/Ronald Hidalgo.jpg'],
            ['name' => 'Ariel V. Formoles', 'position' => 'Municipal Vice Mayor', 'image' => '/default/officials/Ariel Formoles.jpg'],

            ['name' => 'Aileen S. Cailles', 'position' => 'SB Member', 'image' => '/default/officials/Aileen Cailles.jpg'],
            ['name' => 'Vlacheslav Vaarniv D. Martinez', 'position' => 'SB Member', 'image' => '/default/officials/VV Martinez.jpg'],
            ['name' => 'Amelita I. Del Moro', 'position' => 'SB Member', 'image' => '/default/officials/Amelita Del Moro.png'],
            ['name' => 'Narcing A. Catarino', 'position' => 'SB Member', 'image' => '/default/officials/Narcing Catarino.jpg'],
            ['name' => 'Carville M. Auditor', 'position' => 'SB Member', 'image' => '/default/officials/Carville Auditor.jpg'],
            ['name' => 'Elmer B. Cotoner', 'position' => 'SB Member', 'image' => '/default/officials/Elmer Cotoner.jpg'],
            ['name' => 'Kevin M. Reyes', 'position' => 'SB Member', 'image' => '/default/officials/Kevin Reyes.jpg'],
            ['name' => 'Mark Benito R. Caballero', 'position' => 'SB Member', 'image' => '/default/officials/Mark Benito Caballero.jpg'],

            ['name' => 'Elyne Suzan L. Eleda', 'position' => 'Municipal Accountant', 'image' => '/default/officials/Elyne Suzan Eleda.jpg'],
            ['name' => 'Armel S. Yerro', 'position' => 'Municipal Treasurer', 'image' => null],
            ['name' => 'Cecilia SG. Balita', 'position' => 'Municipal Budget Officer', 'image' => '/default/officials/Cecilia SG Balita.jpg'],
        ];

        foreach ($officials as $official) {
            DB::table('officials')->insert([
                'name' => $official['name'],
                'position' => $official['position'],
                'image' => $official['image'],
                'term' => '2022-2025',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
