<?php

namespace App\Http\Controllers\AdminController;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Models\Rewards;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RewardsManagementContoller extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = Rewards::get();

            return Inertia::render('Admin/Pages/Rewards/AllRewards', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = Rewards::paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/Rewards/AllRewards', [
            'items' => $items
        ]);
    }

    public function new()
    {
        return Inertia::render('Admin/Pages/Rewards/NewReward');
    }

    public function create(Request $request)
    {


        try {
            $request->validate([
                'name' => 'required|max:255',
                'description' => 'required',
                'category' => 'required|max:255',
                'points' => 'required|max:255',
                'image' => 'required',
            ]);

            $ImagePath = null;
            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('Rewards', $filename, 'public');
            }

            Rewards::create([
                'name' => $request->name,
                'description' => $request->description,
                'category' => $request->category,
                'price'  => $request->points,
                'image' => $ImagePath,
            ]);

            return redirect()->route('rewards.index')->with('success', 'Reward added successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $reward = Rewards::findOrFail($id);

        return Inertia::render('Admin/Pages/Rewards/EditReward', [
            'item' => $reward,
        ]);
    }

    public function update(Request $request, $id)
    {


        try {
            $request->validate([
                'name' => 'required|max:255',
                'description' => 'required',
                'category' => 'required|max:255',
                'points' => 'required|max:255',
                'image' => 'nullable',
                'status' => 'required|numeric'
            ]);

            $reward = Rewards::find($id);

            if (!$reward) {
                return redirect()->back()->with('error', 'Reward not found');
            }
            $status = $request->status;


            $ImagePath = $reward->image;

            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('Rewards', $filename, 'public');

                if ($reward->image) {
                    Storage::disk('public')->delete($reward->image);
                }
            }

            $reward->update([
                'name' => $request->name,
                'description' => $request->description,
                'category' => $request->category,
                'price'  => $request->points,
                'image' => $ImagePath,
                'status' => $status,
            ]);

            return redirect()->route('rewards.index')->with('success', 'Reward updated successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {
            $guide = Rewards::findOrFail($id);
            if ($guide->image) {
                Storage::disk('public')->delete($guide->image);
            }
            $guide->delete();

            return redirect()->back()->with('success', 'Reward deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
