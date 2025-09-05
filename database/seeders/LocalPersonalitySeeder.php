<?php

namespace Database\Seeders;

use App\Models\LocalPersonalities;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocalPersonalitySeeder extends Seeder
{
    public function run(): void
    {
        $personalities = [
            [
                'category' => 'fa-music|Cultural',
                'name' => 'Lucio San Pedro',
                'description' => 'Renowned composer and National Artist for Music.',
                'highlights_title' => 'Musical Genius',
                'highlights_content' => json_encode([
                    ['icon' => 'fa-music', 'text' => 'Composed the timeless lullaby "Sa Ugoy ng Duyan".'],
                    ['icon' => 'fa-award', 'text' => 'Awarded as National Artist for Music.'],
                ]),
                'born' => '1913',
                'died' => '2002',
                'image' => 'images/personalities/sanpedro.jpg',
                'legacy' => 'fa-music|Musical Legacy|His music embodies Filipino values and traditions.'
            ],
            [
                'category' => 'fa-feather|Historical',
                'name' => 'Dr. Jose Rizal',
                'description' => 'National hero of the Philippines, writer, and reformist.',
                'highlights_title' => 'National Hero',
                'highlights_content' => json_encode([
                    ['icon' => 'fa-book', 'text' => 'Author of Noli Me Tangere & El Filibusterismo.'],
                    ['icon' => 'fa-flag', 'text' => 'Inspired the revolution against Spanish colonization.'],
                ]),
                'born' => '1861',
                'died' => '1896',
                'image' => 'images/personalities/rizal.jpg',
                'legacy' => 'fa-flag|National Hero|His writings and martyrdom awakened Filipino nationalism.'
            ],
        ];

        foreach ($personalities as $personality) {
            LocalPersonalities::create($personality);
        }
    }
}
