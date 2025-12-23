<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class LocalPersonalitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('local_personalities')->insert([
            [
                'category' => 'fa-music|Prince of Philippine Church Music',
                'name' => 'Marcelo Quiteria Adonay',
                'description' => 'Marcelo Quiteria Adonay (1848–1928) was a Filipino composer, organist, conductor, and teacher from Pakil, Laguna, celebrated as the “Prince of Philippine Church Music.” Orphaned at a young age, he rose from humble beginnings to become the first native-born Filipino to master Western liturgical music. He served for decades at San Agustin Church in Intramuros, Manila, where his works became central to sacred music in the Philippines. Among his most notable compositions are the “Pequeña Misa Solemne” (Small Solemn Mass), “Grand Festival Mass”, “Benedictus”, and his famed “Te Deum”, performed during the inauguration of the First Philippine Assembly in 1907. His music blended European classical influences with Filipino devotion, leaving a lasting legacy on Philippine sacred and classical music traditions.',
                'highlights_title' => 'Famous Works',
                'highlights_content' => '[{"text":"Peque\\u00f1a Misa Solemne","icon":"fa-music"},{"text":"Te Deum","icon":"fa-music"},{"text":"Domine ad Adjuvandum","icon":"fa-music"},{"text":"Benedictus","icon":"fa-music"},{"text":"Rizal Glorificado","icon":"fa-music"}]',
                'born' => 'February 5, 1848',
                'died' => 'February 8, 1928',
                'image' => 'Personalities/68c4aff77ee5c_1757720567.jpg',
                'legacy' => 'fa-music|Pakil’s Musical Prodigy|Marcelo Quiteria Adonay was a renowned Filipino composer, organist, and teacher from Pakil, Laguna.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category' => 'fa-music|The Most Recorded Drummer in the Philippines',
                'name' => 'Nemesio Regalado Jr.',
                'description' => 'Nemesio “Jun” Regalado Jr. is a legendary Filipino drummer and session musician from Pakil, Laguna. Widely regarded as the “most recorded drummer in the Philippines,” his career spans over five decades, playing in thousands of studio recordings, TV shows, films, and concerts. He worked with icons like Ryan Cayabyab, Basil Valdez, Sharon Cuneta, APO Hiking Society, and Rico J. Puno, shaping the sound of Original Pilipino Music (OPM) during its golden years. Known for his versatility and impeccable timing, Jun Regalado remains an influential figure in the Philippine music industry.',
                'highlights_title' => 'Most Famous Features',
                'highlights_content' => '[{"text":"VST & Company – “Awitin Mo at Isasayaw Ko” (1978)","icon":"fa-music"},{"text":"Freddie Aguilar – “Anak” (1977)","icon":"fa-music"},{"text":"APO Hiking Society – multiple hits (1970s–1980s)","icon":"fa-music"},{"text":"Sharon Cuneta – early albums (1980s)","icon":"fa-music"}]',
                'born' => 'December 31, 1948',
                'died' => null,
                'image' => 'Personalities/68c4b78b45496_1757722507.jpg',
                'legacy' => 'fa-music|The Five-Decade Drummer|Regalado recorded drum tracks for over 400 albums with various performers.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]
        ]);
    }
}
