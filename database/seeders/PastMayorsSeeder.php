<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PastMayors;
use Carbon\Carbon;

class PastMayorsSeeder extends Seeder
{
    public function run(): void
    {
        $mayors = [
            [
                'name' => 'Bernardo M. Gonzales',
                'position' => 'Presidente Federal',
                'term' => '1899 - 1900',
                'image' => '/default/mayors/1.jpg',
            ],
            [
                'name' => 'Bernardo M. Gonzales',
                'position' => 'Presidente Municipal',
                'term' => '1901 - 1903',
                'image' => '/default/mayors/1.jpg',
            ],
            [
                'name' => 'Roman M. Maulawin',
                'position' => 'Presidente Municipal',
                'term' => '1910 - 1911',
                'image' => '/default/mayors/6.jpg',
            ],
            [
                'name' => 'Engracio G. Balita',
                'position' => 'Presidente Municipal',
                'term' => '1911 - 1918',
                'image' => '/default/mayors/8.jpg',
            ],
            [
                'name' => 'Gelacio G. Galleros',
                'position' => 'Presidente Federal',
                'term' => '1927 - 1928',
                'image' => '/default/mayors/2.jpg',
            ],
            [
                'name' => 'Emeterio P. Ramos',
                'position' => 'Presidente Municipal',
                'term' => '1928 - 1931',
                'image' => '/default/mayors/3.jpg',
            ],
            [
                'name' => 'Ciriaco M. Gonzales',
                'position' => 'Alkalde Municipal',
                'term' => '1932 - 1937',
                'image' => '/default/mayors/5.jpg',
            ],
            [
                'name' => 'Gregorio F. Valera',
                'position' => 'Alkalde Municipal',
                'term' => '1938 - 1940',
                'image' => '/default/mayors/4.jpg',
            ],
            [
                'name' => 'Roman M. Maulawin',
                'position' => 'Presidente Municipal',
                'term' => '1941 - 1943',
                'image' => '/default/mayors/6.jpg',
            ],
            [
                'name' => 'Diosdado C. Dalena',
                'position' => 'Alkalde Municipal',
                'term' => '1944 - 1945',
                'image' => '/default/mayors/7.jpg',
            ],
            [
                'name' => 'Engracio G. Balita',
                'position' => 'Alkalde Municipal',
                'term' => '1945 - 1946',
                'image' => '/default/mayors/8.jpg',
            ],
            [
                'name' => 'Roman M. Maulawin',
                'position' => 'Alkalde Municipal',
                'term' => '1946 - 1947',
                'image' => '/default/mayors/6.jpg',
            ],
            [
                'name' => 'Valentin R. Rarela',
                'position' => 'Alkalde Municipal',
                'term' => '1948 - 1950',
                'image' => '/default/mayors/9.jpg',
            ],
            [
                'name' => 'Luis I. Reyes',
                'position' => 'Alkalde Municipal',
                'term' => '1950 - 1951',
                'image' => '/default/mayors/10.jpg',
            ],
            [
                'name' => 'Cirilo A. Balubayan',
                'position' => 'Alkalde',
                'term' => '1952 - 1959',
                'image' => '/default/mayors/11.jpg',
            ],
            [
                'name' => 'Agapito P. Macapanpan',
                'position' => 'Alkalde',
                'term' => '1960 - 1960',
                'image' => '/default/mayors/12.jpg',
            ],
            [
                'name' => 'Temistocle D. Macapanpan',
                'position' => 'Alkalde',
                'term' => '1960 - 1963',
                'image' => '/default/mayors/13.jpg',
            ],
            [
                'name' => 'Salustiano M. Manalo',
                'position' => 'Alkalde',
                'term' => '1964 - 1967',
                'image' => '/default/mayors/14.jpg',
            ],
            [
                'name' => 'Temistocle D. Macapanpan',
                'position' => 'Alkalde',
                'term' => '1967 - 1967',
                'image' => '/default/mayors/13.jpg',
            ],
            [
                'name' => 'Juan R. Rarela',
                'position' => 'Alkalde',
                'term' => '1968 - 1971',
                'image' => '/default/mayors/15.jpg',
            ],
            [
                'name' => 'Gregorio C. Ybardolaza',
                'position' => 'Mayor',
                'term' => '1972 - 1980',
                'image' => '/default/mayors/16.jpg',
            ],
            [
                'name' => 'Amancio R. Regalado',
                'position' => 'OIC - Mayor',
                'term' => '1979 - 1980',
                'image' => '/default/mayors/17.jpg',
            ],
            [
                'name' => 'Feliciano V. Iglesia',
                'position' => 'Mayor',
                'term' => '1980 - 1985',
                'image' => '/default/mayors/18.jpg',
            ],
            [
                'name' => 'Daniel N. Martinez',
                'position' => 'Punong Bayan',
                'term' => '1985 - 1986',
                'image' => '/default/mayors/19.jpg',
            ],
            [
                'name' => 'Nicandro N. Sanchez',
                'position' => 'OIC Mayor (*People Power Revolution)',
                'term' => '1986 - 1987',
                'image' => '/default/mayors/20.jpg',
            ],
            [
                'name' => 'Artemio M. Galiluyo',
                'position' => 'OIC Mayor (People Power Revolution)',
                'term' => '1987 - 1988',
                'image' => '/default/mayors/21.jpg',
            ],
            [
                'name' => 'Daniel N. Martinez',
                'position' => 'Punong Bayan',
                'term' => '1988 - 1992',
                'image' => '/default/mayors/19.jpg',
            ],
            [
                'name' => 'Nicandro N. Sanchez',
                'position' => 'Mayor',
                'term' => '1992 - 1995',
                'image' => '/default/mayors/20.jpg',
            ],
            [
                'name' => 'Nicandro N. Sanchez',
                'position' => 'Mayor',
                'term' => '1995 - 1997',
                'image' => '/default/mayors/20.jpg',
            ],
            [
                'name' => 'Gelacio C. Martinez',
                'position' => 'Punong Bayan',
                'term' => '1997 - 1998',
                'image' => '/default/mayors/22.jpg',
            ],
            [
                'name' => 'Ignacio M. Martinez',
                'position' => 'Punong Bayan',
                'term' => '1998 - 2007',
                'image' => '/default/mayors/23.jpg',
            ],
            [
                'name' => 'Vipops Charles R. Martinez',
                'position' => 'Punong Bayan',
                'term' => '2007 - 2016',
                'image' => '/default/mayors/24.jpg',
            ],
            [
                'name' => 'Vincent L. Soriano',
                'position' => 'Mayor',
                'term' => '2016 - 2025',
                'image' => '/default/mayors/25.jpg',
            ],
            [
                'name' => 'Ronald James D. Hidalgo',
                'position' => 'Mayor',
                'term' => '2025 - Present',
                'image' => '/default/mayors/26.jpg',
            ],
        ];

        foreach ($mayors as $mayor) {
            PastMayors::create(array_merge($mayor, [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]));
        }
    }
}
