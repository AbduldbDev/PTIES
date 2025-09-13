<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PakilGuideSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $guides = [
            [
                'name' => 'Ethan Young',
                'gender' => 'male',
                'description' => 'Specializes in heritage tours around Pakil, showcasing historic landmarks and cultural stories in an engaging way.',
                'contact' => '09171234567',
                'facebook' => 'https://www.facebook.com/snoozine',
                'image' => 'TourGuides/68c58662d3bd0_1757775458.webp',
            ],
            [
                'name' => 'Andrea Charisse Celino',
                'gender' => 'female',
                'description' => 'Expert in guiding food and local delicacy tours, introducing tourists to authentic flavors and hidden culinary gems.',
                'contact' => '09181234567',
                'facebook' => 'https://www.facebook.com/celiknows',
                'image' => 'TourGuides/68c585a9b33e9_1757775273.jpg',
            ],
            [
                'name' => 'Zyrha Alliah Rausa',
                'gender' => 'female',
                'description' => 'Focuses on eco-tours, guiding travelers through nature spots, waterfalls, and scenic trails with environmental awareness.',
                'contact' => '09191234567',
                'facebook' => 'https://www.facebook.com/rausazy',
                'image' => 'TourGuides/68c586e32d2c9_1757775587.jpeg',
            ],
            [
                'name' => 'Euwayne Paulette Brofar',
                'gender' => 'female',
                'description' => 'Specializes in art and craft tours, highlighting Pakil’s local artisans, traditional crafts, and creative cultural heritage.',
                'contact' => '09201234567',
                'facebook' => 'https://www.facebook.com/brofareuwayne',
                'image' => 'TourGuides/68c587691e046_1757775721.jpg',
            ],
            [
                'name' => 'John Justine Dela Rosa',
                'gender' => 'male',
                'description' => 'Adventure guide focusing on hiking routes, lake activities, and adrenaline-filled experiences for thrill-seeking tourists.',
                'contact' => '09211234567',
                'facebook' => 'https://www.facebook.com/jjnagffb',
                'image' => 'TourGuides/68c585e0b69f9_1757775328.jpg',
            ],
            [
                'name' => 'Abdul Aziz De Borja',
                'gender' => 'male',
                'description' => 'Expert in technology-aided tours, integrating QR codes and mobile apps to give visitors interactive learning experiences.',
                'contact' => '09221234567',
                'facebook' => 'https://www.facebook.com/abduldb.deborja',
                'image' => 'TourGuides/68c586b4d3d49_1757775540.png',
            ],
        ];

        foreach ($guides as $guide) {
            DB::table('pakil_guides')->updateOrInsert(
                ['name' => $guide['name']],
                array_merge($guide, [
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ])
            );
        }
    }
}
