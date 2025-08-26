<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CMSBanner;

class CMSBannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $keys = [
            'Profile Section',
            'Rewards',
            'Social Wall',
            'Events',
            'Contact Us',
            'Attractions',
            'Local Products',
            'Local Personalities',
            'Terminals',
            'Pakil Guide',
            'Key Officials',
            'About Tourism',
            'About Pakil',
            'Pakil Establishments',
        ];



        foreach ($keys as $key) {
            CMSBanner::firstOrCreate(
                ['key' => $key],
                [
                    'title' => $key . ' Title',
                    'subtitle' => $key . ' Subtitle',
                    'desc' => $key . ' Description',
                    'image' => 'CMSBanner/nUCMm91vQqYefljAQ6ouauGI3r4LHcmm3vOP4Pf1.jpg',
                ]
            );
        }
    }
}
