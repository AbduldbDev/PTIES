<?php

namespace App\Http\Controllers\AdminController;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Models\Attractions;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Endroid\QrCode\QrCode;
use Endroid\QrCode\Writer\PngWriter;

class AttractionsController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = Attractions::latest()->get();

            return Inertia::render('Admin/Pages/Attractions/AllAttractions', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = Attractions::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/Attractions/AllAttractions', [
            'items' => $items
        ]);
    }

    public function new()
    {
        $Attractions = Attractions::get();
        return Inertia::render(
            'Admin/Pages/Attractions/NewAttractions',
            [
                'items' => $Attractions
            ]
        );
    }

    public function create(Request $request)
    {
        try {
            $request->validate([
                'name'            => 'required|string|max:255',
                'category'        => 'required|string|max:255',
                'operating_hours' => 'required|string|max:255',
                'information'     => 'required|string',
                'history'         => 'nullable|string',
                'local_rules'     => 'nullable|string',
                'fun_facts'       => 'nullable|string',
                'fees'            => 'nullable|string',
                'distance'        => 'nullable|string',
                'long'            => 'required|numeric|between:-180,180',
                'lat'             => 'required|numeric|between:-90,90',
                'points'          => 'required|integer',
                'Contact'         => 'nullable|array',
                'images.*'        => 'required|image|mimes:jpg,jpeg,png,webp|max:5120',
            ]);

            $imagesPaths = [];
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $file) {
                    $filename = uniqid() . '_' . time() . '.' . $file->getClientOriginalExtension();
                    $path = $file->storeAs('Attractions', $filename, 'public');
                    $imagesPaths[] = '/storage/' . $path;
                }
            }

            do {
                $AttractionId = 'PKL' . strtoupper(Str::random(5));
            } while (Attractions::where('attraction_id', $AttractionId)->exists());

            $qrCode = new QrCode($AttractionId);
            $writer = new PngWriter();

            $filename = $AttractionId . '_qrcode.png';
            $path = public_path('QRcodes/' . $filename);

            if (!file_exists(public_path('QRcodes'))) {
                mkdir(public_path('QRcodes'), 0755, true);
            }

            $result = $writer->write($qrCode);
            $binaryData = $result->getString();
            Storage::disk('public')->put("QRcodes/{$filename}", $binaryData);

            Attractions::create([
                'attraction_id'   => $AttractionId,
                'name'            => $request->name,
                'category'        => $request->category,
                'operating_hours' => $request->operating_hours,
                'information'     => $request->information,
                'history'         => $request->history,
                'local_rules'     => $request->local_rules,
                'fun_facts'       => $request->fun_facts,
                'fees'            => $request->fees,
                'distance'        => $request->distance,
                'long'            => $request->long,
                'lat'             => $request->lat,
                'points'          => $request->points ?? 0,
                'contact'         => json_encode($request->input('Contact', [])),
                'images'          => json_encode($imagesPaths),
                'qr_path'         => '/storage/QRcodes/' . $filename,
            ]);

            return redirect()->route('attractions.index')
                ->with('success', 'Attraction added successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'name'            => 'required|string|max:255',
                'category'        => 'required|string|max:255',
                'operating_hours' => 'required|string|max:255',
                'information'     => 'required|string',
                'history'         => 'nullable|string',
                'local_rules'     => 'nullable|string',
                'fun_facts'       => 'nullable|string',
                'fees'            => 'nullable|string',
                'distance'        => 'nullable|string',
                'long'            => 'required|numeric|between:-180,180',
                'lat'             => 'required|numeric|between:-90,90',
                'points'          => 'required|integer',
                'Contact'         => 'nullable|array',
                'images.*'        => 'required|image|mimes:jpg,jpeg,png,webp|max:5120',
            ]);

            $attraction = Attractions::findOrFail($id);

            $imagesPaths = $attraction->images ? json_decode($attraction->images, true) : [];
            if ($request->hasFile('images')) {
                $imagesPaths = [];
                foreach ($request->file('images') as $file) {
                    $filename = uniqid() . '_' . time() . '.' . $file->getClientOriginalExtension();
                    $path = $file->storeAs('Attractions', $filename, 'public');
                    $imagesPaths[] = '/storage/' . $path;
                }
            }

            $attraction->update([
                'name'            => $request->name,
                'category'        => $request->category,
                'operating_hours' => $request->operating_hours,
                'information'     => $request->information,
                'history'         => $request->history,
                'local_rules'     => $request->local_rules,
                'fun_facts'       => $request->fun_facts,
                'fees'            => $request->fees,
                'distance'        => $request->distance,
                'long'            => $request->long,
                'lat'             => $request->lat,
                'points'          => $request->points ?? $attraction->points,
                'contact'         => json_encode($request->input('Contact', [])),
                'images'          => json_encode($imagesPaths),
            ]);

            return redirect()->route('attractions.index')
                ->with('success', 'Attraction updated successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }


    public function edit($id)
    {
        $item = Attractions::findOrFail($id);
        $item->contact = $this->parseContentValue($item->contact);

        return Inertia::render('Admin/Pages/Attractions/EditAttraction', [
            'item' => $item,
        ]);
    }

    public function delete($id)
    {
        try {
            $Attractions = Attractions::findOrFail($id);
            $Attractions->delete();

            return redirect()->back()->with('success', 'Attraction deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    protected function parseContentValue($value)
    {
        $decoded = json_decode($value, true);
        return (json_last_error() === JSON_ERROR_NONE) ? $decoded : $value;
    }
}
