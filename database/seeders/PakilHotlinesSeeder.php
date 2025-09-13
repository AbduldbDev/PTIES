<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PakilHotlinesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pakil_hotlines')->insert([
            [
                'name' => 'Pakil Police Station',
                'category' => 'Emergency response',
                'icon' => 'fa-solid fa-building-shield',
                'hotline' => '(049) 123-4567',
                'contact' => '0917 123 4567',
                'location' => 'Municipal Compound, Pakil',
                'long' => '121.478769',
                'lat' => '14.381009',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Pakil Rural Health Unit',
                'category' => 'Medical emergencies',
                'icon' => 'fa-solid fa-suitcase-medical',
                'hotline' => '(049) 234-5678',
                'contact' => '0918 765 4321',
                'location' => 'Near Municipal Hall, Pakil',
                'long' => '121.47887628836057',
                'lat' => '14.380697220170047',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Pakil Fire Station',
                'category' => 'Fire emergencies',
                'icon' => 'fa-solid fa-fire-extinguisher',
                'hotline' => '(049) 345-6789',
                'contact' => '0927 654 3210',
                'location' => 'Brgy. Banilan, Pakil',
                'long' => '121.478769',
                'lat' => '14.381009',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Tourism Office',
                'category' => 'Visitor assistance',
                'icon' => 'fa-solid fa-building-columns',
                'hotline' => '(049) 456-7890',
                'contact' => '0919 876 5432',
                'location' => 'Municipal Hall, Pakil',
                'long' => '121.47870462698361',
                'lat' => '14.380759576170835',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Coast Guard',
                'category' => 'Lake emergencies',
                'icon' => 'fa-solid fa-building-columns',
                'hotline' => '(02) 8527-8481',
                'contact' => '0917 724 3682',
                'location' => 'Sta. Cruz, Laguna',
                'long' => '121.478769',
                'lat' => '14.381009',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
