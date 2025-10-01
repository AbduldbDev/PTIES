<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\Events;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventsManagementController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = Events::latest()->get();

            return Inertia::render('Admin/Pages/Events/AllEvents', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = Events::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/Events/AllEvents', [
            'items' => $items
        ]);
    }

    public function new()
    {
        return Inertia::render('Admin/Pages/Events/NewEvent');
    }

    public function create(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'Schedule' => 'nullable|array',
                'start_date' => 'required',
                'end_date' => 'required',
                'admission' => 'nullable|string|max:255',
                'attire' => 'nullable|string|max:255',
                'contacts' => 'nullable|string|max:255',
                'long' => 'nullable|numeric',
                'lat' => 'nullable|numeric',
                'image.*' => 'required|image|mimes:jpg,jpeg,png,webp|max:5120',
            ]);

            $imagePaths = [];
            if ($request->hasFile('image')) {
                foreach ($request->file('image') as $file) {
                    $filename = uniqid() . '_' . time() . '.' . $file->getClientOriginalExtension();
                    $path = $file->storeAs('Events', $filename, 'public');
                    $imagePaths[] = '/storage/' . $path;
                }
            }

            Events::create([
                'title' => $request->title,
                'description' => $request->description,
                'schedules' => json_encode($request->input('Schedule', [])),
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'admission' => $request->admission,
                'attire' => $request->attire,
                'contacts' => $request->contacts,
                'long' => $request->long,
                'lat' => $request->lat,
                'image' => json_encode($imagePaths),
            ]);

            return redirect()->route('events.index')
                ->with('success', 'Event added successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'Schedule' => 'nullable|array',
                'start_date' => 'required',
                'end_date' => 'required',
                'admission' => 'nullable|string|max:255',
                'attire' => 'nullable|string|max:255',
                'contacts' => 'nullable|string|max:255',
                'long' => 'nullable|numeric',
                'lat' => 'nullable|numeric',
                'image.*' => 'required|image|mimes:jpg,jpeg,png,webp|max:5120',
            ]);

            $event = Events::findOrFail($id);
            $imagePaths = json_decode($event->image, true) ?? [];

            if ($request->hasFile('image')) {
                foreach ($imagePaths as $oldImage) {
                    $oldPath = public_path($oldImage);
                    if (file_exists($oldPath)) {
                        unlink($oldPath);
                    }
                }
                $imagePaths = [];

                foreach ($request->file('image') as $file) {
                    $filename = uniqid() . '_' . time() . '.' . $file->getClientOriginalExtension();
                    $path = $file->storeAs('Events', $filename, 'public');
                    $imagePaths[] = '/storage/' . $path;
                }
            }

            $event->update([
                'title' => $request->title,
                'description' => $request->description,
                'schedules' => json_encode($request->input('Schedule', [])),
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'admission' => $request->admission,
                'attire' => $request->attire,
                'contacts' => $request->contacts,
                'long' => $request->long,
                'lat' => $request->lat,
                'image' => json_encode($imagePaths),
            ]);

            return redirect()->route('events.index')
                ->with('success', 'Event updated successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }


    public function edit($id)
    {
        $item = Events::findOrFail($id);
        $item->schedules = $this->parseContentValue($item->schedules);

        return Inertia::render('Admin/Pages/Events/EditEvent', [
            'item' => $item,
        ]);
    }

    public function delete($id)
    {
        try {
            $Events = Events::findOrFail($id);
            $Events->delete();

            return redirect()->back()->with('success', 'Events deleted successfully');
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
