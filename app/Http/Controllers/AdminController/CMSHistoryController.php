<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\PakilHistory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class CMSHistoryController extends Controller
{
    public function index(Request $request)
    {

        $perPage = $request->input('per_page', 20);
        if ($request->input('per_page') === 'all') {
            $history = PakilHistory::latest()->get();
            return Inertia::render('Admin/Pages/CMSHistory/AllHistory', [
                'items' => [
                    'data' => $history,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $history = PakilHistory::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $history->appends(['per_page' => $perPage]);
        }


        return Inertia::render(
            'Admin/Pages/CMSHistory/AllHistory',
            [
                'items' => $history,
            ]
        );
    }

    public function new()
    {
        return Inertia::render('Admin/Pages/CMSHistory/NewHistory');
    }


    public function edit($id)
    {
        $history = PakilHistory::findOrFail($id);


        return Inertia::render('Admin/Pages/CMSHistory/EditHistory', [
            'item' => $history,
        ]);
    }

    public function create(Request $request)
    {
        try {
            $request->validate([
                'date' => 'required',
                'title' => 'required',
                'description' => 'required',
                'image' =>  'required|image|mimes:jpeg,png,jpg,gif|max:25600',
            ]);

            $ImagePath = null;
            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('PakilHistory', $filename, 'public');
            }


            PakilHistory::create([
                'date' => $request->date,
                'title' => $request->title,
                'description' => $request->description,
                'image' => $ImagePath,
            ]);

            return redirect()->route('cms.history.index')->with('success', 'History created successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error', $e->getMessage()]);
        }
    }

    public function update(Request $request, $id)
    {
        try {

            $history = PakilHistory::find($id);

            if (!$history) {
                return redirect()->back()->with('error', 'history not found');
            }

            $request->validate([
                'date' => 'required',
                'title' => 'required',
                'description' => 'required',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:25600',
            ]);

            $ImagePath = $history->image;

            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('PakilHistory', $filename, 'public');

                if ($history->image) {
                    Storage::disk('public')->delete($history->image);
                }
            }

            $history->update([
                'date' => $request->date,
                'title' => $request->title,
                'description' => $request->description,
                'image' => $ImagePath,
            ]);

            return redirect()->route('cms.history.index')->with('success', 'History updated successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }


    public function delete($id)
    {
        try {
            $history = PakilHistory::findOrFail($id);
            if ($history->image) {
                Storage::disk('public')->delete($history->image);
            }
            $history->delete();

            return redirect()->back()->with('success', 'Pakil history deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
