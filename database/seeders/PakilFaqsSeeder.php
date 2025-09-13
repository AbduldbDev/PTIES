<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PakilFaqsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pakil_faqs')->insert([
            [
                'question' => 'Where is Pakil located?',
                'answer' => 'Pakil is a 5th-class municipality in Laguna, Philippines, situated on the eastern shore of Laguna de Bay.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'question' => 'What languages do people speak in Pakil?',
                'answer' => 'Locals mainly speak Tagalog (Filipino), but English is also widely understood.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'question' => 'What is Pakil famous for?',
                'answer' => 'Pakil is best known for the Turumba Festival, religious heritage sites like the Nuestra Señora de los Dolores de Turumba Church, and its rich artistic traditions.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'question' => 'When is the Turumba Festival celebrated?',
                'answer' => 'The festival is held several times between April and May, following the feast of Our Lady of Sorrows.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'question' => 'What are the top tourist spots in Pakil?',
                'answer' => 'Key attractions include the Turumba Shrine, Matabungka Falls, and local cultural sites.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'question' => 'What local delicacies should I try?',
                'answer' => 'Popular treats include kesong puti (white cheese), native rice cakes, and other traditional Laguna specialties.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'question' => 'How do I get to Pakil from Manila?',
                'answer' => 'The town is about 96 km southeast of Manila. Travelers can take a bus to Santa Cruz, Laguna, then a jeepney or tricycle to Pakil.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'question' => 'Is public transportation available in Pakil?',
                'answer' => 'Yes, jeepneys, tricycles, and buses operate within and around the town.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'question' => 'Is parking available for private vehicles?',
                'answer' => 'Parking spaces are available near the church and municipal hall, especially during festivals.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'question' => 'How can I get updates about upcoming events?',
                'answer' => 'You can check the official Pakil Tourism Facebook page or the PTIES website for announcements.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'question' => 'How do I contact the tourism office?',
                'answer' => 'The Pakil Municipal Tourism Office is located at the Municipal Hall. You can reach them via phone or email (details on the Contact page).',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
