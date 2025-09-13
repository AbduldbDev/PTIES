<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\BarangayInfo;
use Carbon\Carbon;

class BarangayInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $barangays = [
            // east
            [
                'barangay' => 'Baño',
                'captain' => 'Juan Dela Cruz',
                'highlights' => 'Known for its scenic views of Laguna Lake and traditional fishing industry.',
                'type' => 'east',
                'index' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'barangay' => 'Burgos',
                'captain' => 'Maria Santos',
                'highlights' => 'Home to several heritage homes and the municipal health center.',
                'type' => 'east',
                'index' => 2,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'barangay' => 'Gonzales',
                'captain' => 'Pedro Reyes',
                'highlights' => null,
                'type' => 'east',
                'index' => 3,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'barangay' => 'Rizal',
                'captain' => 'Ana Martinez',
                'highlights' => null,
                'type' => 'east',
                'index' => 4,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'barangay' => 'Taft',
                'captain' => 'Carlos Aquino',
                'highlights' => null,
                'type' => 'east',
                'index' => 5,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'barangay' => 'Tavera',
                'captain' => 'Lourdes Fernandez',
                'highlights' => null,
                'type' => 'east',
                'index' => 6,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'barangay' => 'Saray',
                'captain' => 'Ricardo Gutierrez',
                'highlights' => null,
                'type' => 'east',
                'index' => 7,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // west
            [
                'barangay' => 'Banilan',
                'captain' => 'Elena Torres',
                'highlights' => 'Gateway to Mount Ping-as with thriving agricultural activities.',
                'type' => 'west',
                'index' => 8,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'barangay' => 'Casa Real',
                'captain' => 'Antonio Cruz',
                'highlights' => 'Location of the historic municipal hall and town plaza.',
                'type' => 'west',
                'index' => 9,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'barangay' => 'Casinsin',
                'captain' => 'Roberto Santiago',
                'highlights' => null,
                'type' => 'west',
                'index' => 10,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'barangay' => 'Dorado',
                'captain' => 'Sofia Ramirez',
                'highlights' => 'Famous for its goldsmiths and traditional jewelry making.',
                'type' => 'west',
                'index' => 11,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'barangay' => 'Kabulusan',
                'captain' => 'Felipe Mendoza',
                'highlights' => 'Agricultural center with vast rice fields and fruit plantations.',
                'type' => 'west',
                'index' => 12,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'barangay' => 'Matikiw',
                'captain' => 'Teresa Reyes',
                'highlights' => null,
                'type' => 'west',
                'index' => 13,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        foreach ($barangays as $barangay) {
            BarangayInfo::create($barangay);
        }
    }
}
