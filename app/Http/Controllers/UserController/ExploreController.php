<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\BarangayInfo;
use Inertia\Inertia;
use App\Models\CMSBanner;
use App\Models\CMSContent;
use App\Models\PakilEstablishments;
use App\Models\PakilHistory;
use App\Models\PakilTerminals;
use App\Models\LocalPersonalities;
use App\Models\LocalProducts;
use App\Models\Attractions;



class ExploreController extends Controller
{
    protected function parseContentValue($value)
    {
        $decoded = json_decode($value, true);
        return (json_last_error() === JSON_ERROR_NONE) ? $decoded : $value;
    }

    public function About()
    {
        $contents = CMSContent::where('page_key', "explore_pakil")
            ->orderBy('section_key')
            ->orderBy('content_key')
            ->get();

        $history = PakilHistory::orderByRaw("CAST(SUBSTRING_INDEX(date, ' ', 1) AS UNSIGNED) ASC")->get();


        $pageData = [];
        foreach ($contents as $content) {
            $pageData['sections'][$content->section_key][$content->content_key] =
                $this->parseContentValue($content->content_value);
        }

        $barangays = BarangayInfo::orderBy('index', 'asc')->get();
        $barangayHighlights = BarangayInfo::whereNotNull('highlights')
            ->orderBy('index', 'asc')
            ->get();


        $banner = CMSBanner::where('key', 'About Pakil')->first();
        return Inertia::render('User/Pages/About', [
            'banner' => $banner,
            'content' => $pageData['sections'] ?? [],
            'history' => $history,
            'barangays' => $barangays,
            'barangayHighlights' => $barangayHighlights,
        ]);
    }

    public function Guide()
    {
        $banner = CMSBanner::where('key', 'Pakil Guide')->first();

        $food = PakilEstablishments::where('type', 'food')
            ->inRandomOrder()
            ->limit(8)
            ->get();


        $accommodation = PakilEstablishments::where('type', 'accommodation')
            ->inRandomOrder()
            ->limit(8)
            ->get();

        return Inertia::render('User/Pages/Guide', [
            'banner' => $banner,
            'food' => $food,
            'accommodation' => $accommodation,
        ]);
    }

    public function terminals()
    {
        $banner = CMSBanner::where('key', 'Terminals')->first();

        $terminals = PakilTerminals::get()->map(function ($terminal) {
            $terminal->routes = $this->parseContentValue($terminal->routes);
            return $terminal;
        });

        return Inertia::render('User/Pages/Terminals', [
            'banner' => $banner,
            'terminals' => $terminals,
        ]);
    }

    public function LocalProducts()
    {
        $products = LocalProducts::get();
        $banner = CMSBanner::where('key', 'Local Products')->first();
        return Inertia::render('User/Pages/LocalProducts', [
            'banner' => $banner,
            'products' => $products,
        ]);
    }

    public function LocalPersonalities()
    {
        $personalities = LocalPersonalities::get();
        $banner = CMSBanner::where('key', 'Local Personalities')->first();

        return Inertia::render('User/Pages/LocalPersonalities', [
            'banner' => $banner,
            'personalities' => $personalities,
        ]);
    }

    public function Attractions()
    {
        $banner = CMSBanner::where('key', 'Attractions')->first();
        // $attractions = Attractions::inRandomOrder()->get();

        $attractions = Attractions::orderBy('name', 'asc')->get();

        return Inertia::render('User/Pages/Attractions', [
            'banner' => $banner,
            'items' => $attractions,
        ]);
    }

    public function AttractionDetails($id)
    {
        $attraction = Attractions::where('attraction_id', $id)->first();
        $attraction->contact = $this->parseContentValue($attraction->contact);

        if (!$attraction) {
            return redirect()->route('user.attractions');
        }

        return Inertia::render(
            'User/Pages/AttractionDetails',
            [
                'item' => $attraction,
            ]
        );
    }

    public function PakilGuide()
    {
        $banner = CMSBanner::where('key', 'Rewards Guide')->first();
        return Inertia::render('User/Pages/Pakilguide', [
            'banner' => $banner,
        ]);
    }



    public function Establishments()
    {
        $banner = CMSBanner::where('key', 'Pakil Establishments')->first();
        $establishments = PakilEstablishments::inRandomOrder()->get();

        return Inertia::render('User/Pages/Establishments', [
            'banner' => $banner,
            'establishments' => $establishments,

        ]);
    }
}
