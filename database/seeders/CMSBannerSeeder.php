<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use App\Models\CMSBanner;

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
            ],
            [
                'key' => 'Rewards',
                'title' => 'Rewards Program',
                'subtitle' => 'Rewards Shop',
                'desc' => 'Browse exciting prizes and check your points balance',
            ],
            [
                'key' => 'Social Wall',
                'title' => 'Pakil social wall',
                'subtitle' => 'Celebrate, Share, Connect',
                'desc' => 'Join the wall of memories and see Pakileños and tourists celebrate together.',
            ],
            [
                'key' => 'Events',
                'title' => 'Celebrate in Pakil',
                'subtitle' => 'Where Fun Happens',
                'desc' => 'Catch the excitement of local events and festive happenings all year round.',
            ],
            [
                'key' => 'Contact Us',
                'title' => "Pakil's help desk",
                'subtitle' => 'Support Lines',
                'desc' => 'Reach us anytime with hotlines, locations, and tour services.',
            ],
            [
                'key' => 'Attractions',
                'title' => 'See Pakil',
                'subtitle' => "Town's Treasures",
                'desc' => 'Explore the attractions that define our legacy.',
            ],
            [
                'key' => 'Local Products',
                'title' => 'Pakil’s Heritage',
                'subtitle' => 'Pakil’s Crafts and Harvests',
                'desc' => 'Discover the artistry and harvests of Pakileños.',
            ],
            [
                'key' => 'Local Personalities',
                'title' => 'Icons of Pakil',
                'subtitle' => 'Pride of the Town',
                'desc' => 'Learn about the remarkable figures who left a lasting legacy.',
            ],
            [
                'key' => 'Terminals',
                'title' => 'Pakil terminals',
                'subtitle' => 'Your Ride to Every Spot',
                'desc' => 'Find tricycle for quick trips to every corner of town',
            ],
            [
                'key' => 'Pakil Guide',
                'title' => 'Experience Pakil',
                'subtitle' => 'Plan your Festival Journey',
                'desc' => 'Find tips on what to wear, where to stay, eat, and how to get there.',
            ],
            [
                'key' => 'Key Officials',
                'title' => 'Public Servants',
                'subtitle' => 'Leading People Forward',
                'desc' => 'Introducing the town’s dedicated officials.',
            ],
            [
                'key' => 'About Tourism',
                'title' => 'Our Story',
                'subtitle' => 'Promoting Culture and Tourism',
                'desc' => 'Protecting heritage, creating opportunities, and welcoming all.',
            ],
            [
                'key' => 'Rewards Guide',
                'title' => 'Earn and Enjoy Rewards!',
                'subtitle' => 'Scan, Play, and Redeem!',
                'desc' => 'Learn how to collect points, complete challenges, and redeem exciting rewards through our gamification system.',
            ],
            [
                'key' => 'Past Mayor',
                'title' => 'Meet the Past Mayors',
                'subtitle' => 'A Glimpse of Leadership Through the Years',
                'desc' => 'Discover the leaders who shaped our municipality across generations.',
            ],
        ];

        foreach ($banners as $banner) {
            CMSBanner::updateOrCreate(
                ['key' => $banner['key']],
                array_merge($banner, [
                    'image' => '/default/banner/banner.jpg',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ])
            );
        }
    }
}
