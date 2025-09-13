<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PakilEstablishmentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pakil_establishments')->insert([
            [
                'type' => 'food',
                'name' => 'Muchos Hauz',
                'location' => 'Gonzales Street, Pakil Laguna 4017 Pakil',
                'contact' => '09195433785',
                'facebook' => 'https://www.facebook.com/p/Muchos-Hauz-100054318258737/',
                'long' => '121.47786855697632',
                'lat' => '14.382037483375761',
                'image' => 'Establishments/68c4a3029bb36_1757717250.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'type' => 'food',
                'name' => "GERK's",
                'location' => '91 Adonay St. Brgy. Tavera, Pakil',
                'contact' => '09951391246',
                'facebook' => 'https://www.facebook.com/GerksCafe',
                'long' => '121.47775053977966',
                'lat' => '14.384001677259988',
                'image' => 'Tourestablishments/68c4a3cca4976_1757717452.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'type' => 'food',
                'name' => "Ala Eh Tonios's Burger",
                'location' => 'Manila East Road, Gonzales St, Pakil, Laguna',
                'contact' => '09552803161',
                'facebook' => 'https://www.facebook.com/p/Ala-Eh-Tonioss-Burger-Pakil-100069553290955/',
                'long' => '121.47616267204285',
                'lat' => '14.385726828014553',
                'image' => 'Establishments/68c4a3c5a9bd6_1757717445.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'type' => 'accommodation',
                'name' => 'Analisa Apartelle',
                'location' => 'Baño St, Poblacion, Pakil, 4017 Laguna',
                'contact' => '09087749704',
                'facebook' => 'https://www.facebook.com/analisaapartelle/',
                'long' => '121.47961735725403',
                'lat' => '14.380081066747806',
                'image' => 'Establishments/68c4a42ac09d6_1757717546.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'type' => 'accommodation',
                'name' => 'Mary Grace Suites',
                'location' => '47 Tavera St, Pakil, Laguna',
                'contact' => '09162580982',
                'facebook' => 'https://www.facebook.com/p/Mary-Grace-Suites-61557383250291/',
                'long' => '121.47821992635727',
                'lat' => '14.382525935319856',
                'image' => 'Establishments/68c4a475a2aad_1757717621.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'type' => 'accommodation',
                'name' => 'Oliver Apartelle',
                'location' => 'Rizal St. Pakil, Laguna, Pakil, Philippines, 4017',
                'contact' => '0495571534',
                'facebook' => 'https://www.facebook.com/oliverapartelle/',
                'long' => '121.47908091545105',
                'lat' => '14.381433412340442',
                'image' => 'Establishments/68c4a58c4afe1_1757717900.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'type' => 'food',
                'name' => 'Pares Line',
                'location' => 'Brgy, Gonzales, Pakil, Laguna (besides Marissa Lomihan)',
                'contact' => '09271680568',
                'facebook' => 'https://www.facebook.com/ParesLine/',
                'long' => '121.47825211286545',
                'lat' => '14.381790658848963',
                'image' => 'Establishments/68c4a6ba5f0b6_1757718202.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'type' => 'accommodation',
                'name' => 'Turumba Spring Resort',
                'location' => 'Baño St, Pakil, Laguna',
                'contact' => '0495571766',
                'facebook' => 'https://www.facebook.com/p/Turumba-Spring-Resort-at-Pakil-Laguna-100071304523128/',
                'long' => '121.47974610328674',
                'lat' => '14.379657563947688',
                'image' => 'Establishments/68c4a7540a44b_1757718356.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
