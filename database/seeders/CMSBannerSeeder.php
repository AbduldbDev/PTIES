<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CMSBanner;
use Carbon\Carbon;

class CMSBannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $banners = [
            [
                'key' => 'Profile Section',
                'title' => 'My Journey',
                'subtitle' => 'Your Pakil Profile',
                'desc' => 'Edit, save, and personalize your adventure.',
                'image' => 'CMSBanner/nUCMm91vQqYefljAQ6ouauGI3r4LHcmm3vOP4Pf1.jpg',
            ],
            [
                'key' => 'Rewards',
                'title' => 'Rewards Program',
                'subtitle' => 'Rewards Shop',
                'desc' => 'Browse exciting prizes and check your points balance',
                'image' => 'CMSBanner/pjM4yAFnkT9ntr1WPYhgx6q42c44s0gXq7KsYLxj.jpg',
            ],
            [
                'key' => 'Social Wall',
                'title' => 'Pakil social wall',
                'subtitle' => 'Celebrate, Share, Connect',
                'desc' => 'Join the wall of memories and see Pakileños and tourists celebrate together.',
                'image' => 'CMSBanner/nUCMm91vQqYefljAQ6ouauGI3r4LHcmm3vOP4Pf1.jpg',
            ],
            [
                'key' => 'Events',
                'title' => 'Celebrate in Pakil',
                'subtitle' => 'Where Fun Happens',
                'desc' => 'Catch the excitement of local events and festive happenings all year round.',
                'image' => 'CMSBanner/B4PwGg0FJY4LCzSxWkxjNME3tQbkkq3LvM1XeRLq.jpg',
            ],
            [
                'key' => 'Contact Us',
                'title' => "Pakil's help desk",
                'subtitle' => 'Support Lines',
                'desc' => 'Reach us anytime with hotlines, locations, and tour services.',
                'image' => 'CMSBanner/OC1YaOhsfh0NdQmj0YS4zpQJhyJN6OP3gY970sw4.jpg',
            ],
            [
                'key' => 'Attractions',
                'title' => 'See Pakil',
                'subtitle' => "Town's Treasures",
                'desc' => 'Explore the attractions that define our legacy.',
                'image' => 'CMSBanner/UetapKDpslZ0Sd0t8D6jVovlD08nRfy4E11PQDNi.jpg',
            ],
            [
                'key' => 'Local Products',
                'title' => 'Pakil’s  Heritage',
                'subtitle' => 'Pakil’s Crafts and Harvests',
                'desc' => 'Discover the artistry and harvests of Pakileños.',
                'image' => 'CMSBanner/kTHJIuzPdHEAjcM8ZofwSg57dsiyiyKmUieTkvjX.jpg',
            ],
            [
                'key' => 'Local Personalities',
                'title' => 'Icons of Pakil',
                'subtitle' => 'Pride of the Town',
                'desc' => 'Learn about the remarkable figures who left a lasting legacy.',
                'image' => 'CMSBanner/zIXnSxEKYlvGy0v5u41488M9Rcu8I6fjrq2HSrOT.png',
            ],
            [
                'key' => 'Terminals',
                'title' => 'Pakil terminals',
                'subtitle' => 'Your Ride to Every Sopt',
                'desc' => 'Find tricycle for quick trips to every corner of town',
                'image' => 'CMSBanner/nUCMm91vQqYefljAQ6ouauGI3r4LHcmm3vOP4Pf1.jpg',
            ],
            [
                'key' => 'Pakil Guide',
                'title' => 'Experience Pakil',
                'subtitle' => 'Plan your Festival Journey',
                'desc' => 'Find tips on what to wear, where to stay, eat, and how to get there.',
                'image' => 'CMSBanner/nUCMm91vQqYefljAQ6ouauGI3r4LHcmm3vOP4Pf1.jpg',
            ],
            [
                'key' => 'Key Officials',
                'title' => 'Public Servants',
                'subtitle' => 'Leading People Forward',
                'desc' => 'Introducing the town’s dedicated officials.',
                'image' => 'CMSBanner/MwV8gXahGBGJdAhA1zwOgeqCwZsPGos7nqmyj6SH.jpg',
            ],
            [
                'key' => 'About Tourism',
                'title' => 'Our Story',
                'subtitle' => 'Promoting Culture and Tourism',
                'desc' => 'Protecting heritage, creating opportunities, and welcoming all.',
                'image' => 'CMSBanner/Shp93kXeEgDW0jckSFKlQXnAZy2vf6qrlUPun1fb.jpg',
            ],
            [
                'key' => 'About Pakil',
                'title' => 'Welcome to Pakil',
                'subtitle' => 'Where Fun Starts with Faith!',
                'desc' => 'Learn more about the Pilgrimage Town of Laguna',
                'image' => 'CMSBanner/Sy0X8vPUWIvK3q52qKGymk99pgdmZYL9E9bjeQMe.jpg',
            ],
        ];

        foreach ($banners as $banner) {
            CMSBanner::updateOrCreate(
                ['key' => $banner['key']],
                array_merge($banner, [
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ])
            );
        }
    }
}
