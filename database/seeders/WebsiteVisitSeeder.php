<?php

namespace Database\Seeders;

use App\Models\WebsiteVisit;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class WebsiteVisitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        $startDate = Carbon::create(2025, 9, 1, 0, 0, 0);
        $endDate = Carbon::create(2025, 10, 22, 23, 59, 59);

        $totalRecords = 55;
        $timeInterval = ($endDate->timestamp - $startDate->timestamp) / $totalRecords;

        for ($i = 1; $i <= $totalRecords; $i++) {
            $currentDate = Carbon::createFromTimestamp($startDate->timestamp + ($i * $timeInterval));

            $data[] = [
                'visitor_id' => 'visitor_' . str_pad($i, 3, '0', STR_PAD_LEFT),
                'ip_address' => $this->generateIpAddress(),
                'user_agent' => $this->generateUserAgent(),
                'url' => $this->generateUrl(),
                'visited_at' => $currentDate->format('Y-m-d H:i:s'),
                'created_at' => $currentDate->format('Y-m-d H:i:s'),
                'updated_at' => $currentDate->format('Y-m-d H:i:s'),
            ];

            if ($i % 10 === 0) {
                WebsiteVisit::insert($data);
                $data = [];
            }
        }

        if (!empty($data)) {
            WebsiteVisit::insert($data);
        }
    }

    private function generateIpAddress(): string
    {
        $ips = [
            '192.168.1.100',
            '10.0.0.50',
            '172.16.254.1',
            '203.0.113.45',
            '198.51.100.23',
            '192.0.2.146',
            '104.16.249.249',
            '172.217.16.206',
            '157.240.22.35',
            '142.250.185.174'
        ];

        return $ips[array_rand($ips)];
    }

    private function generateUserAgent(): string
    {
        $userAgents = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
            'Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
            'Mozilla/5.0 (Android 11; Mobile; rv:68.0) Gecko/68.0 Firefox/89.0'
        ];

        return $userAgents[array_rand($userAgents)];
    }

    private function generateUrl(): string
    {
        $urls = [
            'https://example.com/home',
            'https://example.com/about',
            'https://example.com/contact',
            'https://example.com/products',
            'https://example.com/services',
            'https://example.com/blog',
            'https://example.com/pricing',
            'https://example.com/faq',
            'https://example.com/login',
            'https://example.com/register',
            'https://example.com/dashboard',
            'https://example.com/profile',
            'https://example.com/settings'
        ];

        return $urls[array_rand($urls)];
    }
}
