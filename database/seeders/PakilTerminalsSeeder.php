<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PakilTerminalsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pakil_terminals')->insert([
            [
                'name' => 'Pakil Town Plaza Terminal',
                'routes' => '[{"name":"To San Pedro Church & Turumba Shrine"},{"name":"To Ping-as Falls (via Brgy. Rizal)"},{"name":"To Municipal Hall Complex"},{"name":"To neighboring towns (Paete, Pangil)"}]',
                'sched' => 'Daily: 5:00 AM - 10:00 PM',
                'sched_desc' => 'Extended hours during festivals',
                'long' => '121.478769',
                'lat' => '14.381009',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Rizal Barangay Terminal',
                'routes' => '[{"name":"To Ping-as Falls and hiking trails"},{"name":"To Brgy. Tavera and farmlands"}]',
                'sched' => 'Daily: 6:00 AM - 8:00 PM',
                'sched_desc' => 'Limited service during rainy season',
                'long' => '121.478769',
                'lat' => '14.381009',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Lakeview Terminal',
                'routes' => '[{"name":"To Laguna Lake view decks"},{"name":"To fishing villages"},{"name":"To lakeside resorts"}]',
                'sched' => 'Daily: 5:30 AM - 9:00 PM',
                'sched_desc' => 'Weather permitting',
                'long' => '121.478769',
                'lat' => '14.381009',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Marketplace Terminal',
                'routes' => '[{"name":"To Pakil Public Market"},{"name":"To neighboring barangays"},{"name":"To bus terminals (for Manila/Rizal trips)"}]',
                'sched' => 'Monday - Saturday: 4:30 AM - 9:00PM',
                'sched_desc' => 'Sunday: 5:00 AM - 8:00 PM',
                'long' => '121.478769',
                'lat' => '14.381009',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
