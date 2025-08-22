<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\PakilTerminals;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class TerminalController extends Controller
{

    public function index()
    {
        $terminals = PakilTerminals::latest()->paginate(20);
        $terminals->getCollection()->transform(function ($terminal) {
            $terminal->routes = $this->parseContentValue($terminal->routes);
            return $terminal;
        });

        return Inertia::render('Admin/Pages/Terminals/AllTerminals', [
            'items' => $terminals,
        ]);
    }

    public function new()
    {
        return Inertia::render('Admin/Pages/Terminals/NewTerminal');
    }

    public function create(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'sched' => 'nullable|string|max:255',
                'sched_desc' => 'nullable|string|max:255',
                'long' => 'required',
                'lat' => 'required',
                'routes' => 'nullable|array',
            ]);

            PakilTerminals::create([
                'name' => $request->name,
                'sched' => $request->sched,
                'sched_desc' => $request->sched_desc,
                'long' => $request->long,
                'lat' => $request->lat,
                'routes' => json_encode($request->input('routes', [])),
            ]);
            return redirect()->back()->with('success', 'Terminal created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'An error occurred while creating the terminal: ' . $e->getMessage());
        }
    }

    public function edit($id)
    {
        $terminal = PakilTerminals::findOrFail($id);
        $terminal->routes = $this->parseContentValue($terminal->routes);

        return Inertia::render('Admin/Pages/Terminals/EditTerminal', [
            'item' => $terminal,
        ]);
    }

    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'sched' => 'nullable|string|max:255',
                'sched_desc' => 'nullable|string|max:255',
                'long' => 'required',
                'lat' => 'required',
                'routes' => 'nullable|array',
            ]);

            $terminal = PakilTerminals::findOrFail($id);
            $terminal->update([
                'name' => $request->name,
                'sched' => $request->sched,
                'sched_desc' => $request->sched_desc,
                'long' => $request->long,
                'lat' => $request->lat,
                'routes' => json_encode($request->input('routes', [])),
            ]);

            return redirect()->back()->with('success', 'Terminal updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'An error occurred while updating the terminal: ' . $e->getMessage());
        }
    }


    public function delete($id)
    {
        try {
            $guide = PakilTerminals::findOrFail($id);
            if ($guide->image) {
                Storage::disk('public')->delete($guide->image);
            }
            $guide->delete();

            return redirect()->back()->with('success', 'Terminal deleted successfully');
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
