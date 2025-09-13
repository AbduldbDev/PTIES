<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PakilHistoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pakil_histories')->insert([
            [
                'date' => '1588',
                'title' => 'Franciscan Foundation',
                'description' => 'Pakil was established as a visita (mission station) of Paete by Franciscan missionaries in 1588. The town\'s original name was "Paquil," derived from the phrase "Pa-kin," meaning "to cut" in Tagalog, referring to how early settlers cleared the land.

The Franciscans built the first chapel dedicated to San Pedro de Alcantara, which would later become the center of religious life in the community. This period saw the conversion of local populations to Christianity and the establishment of basic governance structures under Spanish rule.',
                'image' => 'PakilHistory/68c4c10c782d5_1757724940.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'date' => '1676',
                'title' => 'Independent Municipality',
                'description' => 'After nearly a century as a visita, Pakil was officially established as an independent municipality in 1676. This marked the beginning of Pakil\'s distinct political and cultural identity separate from Paete.

The 18th century saw the construction of more permanent structures, including the current San Pedro de Alcantara Church (completed in 1767). The town\'s economy flourished through agriculture (particularly rice and coconut cultivation) and the emerging woodcarving industry that would later become world-renowned.

The famous Turumba devotion began in 1788 when fishermen discovered the image of Nuestra Señora de los Dolores along the shores of Laguna de Bay after a storm, marking the start of Pakil\'s enduring Marian tradition.',
                'image' => 'PakilHistory/68c4c173865d6_1757725043.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'date' => '1900s',
                'title' => 'Modern Development',
                'description' => 'The American colonial period brought new infrastructure to Pakil, including roads and schools. The 20th century saw the town preserve its cultural heritage while adapting to modernization.

In 1952, Pakil was officially recognized as a pilgrimage site by the Catholic Church due to the growing devotion to Our Lady of Turumba. The Turumba Festival was institutionalized as the longest religious festival in the Philippines, spanning seven months to commemorate the Seven Sorrows of Mary.

Recent decades have focused on cultural preservation and tourism development. The municipal government has restored historic structures, established heritage zones, and promoted Pakil\'s unique musical tradition rooted in the works of Marcelo Adonay, the "Palestrina of the Philippines."',
                'image' => 'PakilHistory/68c4c1cbd6036_1757725131.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
