<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class LocalProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('local_products')->insert([
            [
                'category' => 'fa-tree|ARTISTIC HERITAGE',
                'name' => 'Kayas Woodcarving',
                'description' => "Kayas is Pakil's delicate art of wood shaving and whittling, performed using three varieties of soft, pliable wood unique to Laguna. Master craftsmen transform these materials into graceful angels, swans, fans, and other intricate figures with remarkable precision.\r\n\r\nMore than an art form, kayas is a living heritage passed through generations. Today's artisans actively mentor apprentices to preserve the techniques and cultural significance of this centuries-old craft.",
                'highlights_title' => 'Craftsmanship',
                'highlights_content' => '[{"text":"Uses lagundi, santol, and laniti woods","icon":"fa-tree"},{"text":"Specialized knives for different shaving techniques","icon":"fa-tools"},{"text":"Apprenticeships last 3-5 years","icon":"fa-user-graduate"}]',
                'image' => 'Products/68c4c336cf2d3_1757725494.jpg',
                'exp' => 'fa-tree|Experience the Craft|Visit woodcarving workshops near Pakil church',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category' => 'fa-seedling|NATURAL BOUNTY',
                'name' => 'Ibuli (Cubilia cubili)',
                'description' => "The ibuli is a rare tropical fruit native to the lush hillsides of Pakil. Known for its smooth, greenish skin and sweet, subtly tangy flesh, it's cherished as both a fresh snack and ingredient for traditional desserts.\r\n\r\nIts short harvest season makes ibuli a special treat, often shared with visitors as a gesture of hospitality. More than just delicious, it symbolizes Pakil's rich agricultural heritage, thriving in the town's fertile soil and favorable climate.",
                'highlights_title' => 'Season Delicacy',
                'highlights_content' => '[{"text":"Harvested during peak season (April-June)","icon":"fa-calendar-day"},{"text":"Grows wild in Pakil\'s upland areas","icon":"fa-seedling"},{"text":"Used in jams, candies, and traditional desserts","icon":"fa-water"}]',
                'image' => 'Products/68c4c4024194b_1757725698.jpg',
                'exp' => 'fa-map-marked-alt|Where to Experience Ibuli|Available at local markets during harvest season',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
