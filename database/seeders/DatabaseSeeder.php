<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(UserSeeder::class);
        $this->call(CMSBannerSeeder::class);
        $this->call(CMSContentSeeder::class);
        $this->call(BarangayInfoSeeder::class);
        $this->call(LocalPersonalitiesSeeder::class);
        $this->call(LocalProductsSeeder::class);
        $this->call(PakilEstablishmentsSeeder::class);
        $this->call(PakilFaqsSeeder::class);
        $this->call(PakilHistoriesSeeder::class);
        $this->call(PakilHotlinesSeeder::class);
        $this->call(PakilTerminalsSeeder::class);
        $this->call(PakilGuideSeeder::class);
        $this->call(DepartmentSeeder::class);
        $this->call(OfficialsSeeder::class);
        $this->call(PastMayorsSeeder::class);
        $this->call(AttractionsSeeder::class);
    }
}
