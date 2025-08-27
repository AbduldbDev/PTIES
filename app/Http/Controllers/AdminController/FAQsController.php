<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\FAQs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FAQsController extends Controller
{

    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = FAQs::latest()->get();

            return Inertia::render('Admin/Pages/FAQs/AllFAQs', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = FAQs::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/FAQs/AllFAQs', [
            'items' => $items,
        ]);
    }

    public function new()
    {
        return Inertia::render('Admin/Pages/FAQs/NewFAQs');
    }

    public function edit($id)
    {
        $item = FAQs::findOrFail($id);
        return Inertia::render('Admin/Pages/FAQs/EditFAQs', [
            'item' => $item,
        ]);
    }

    public function create(Request $request)
    {

        try {
            $request->validate([
                'question' => 'required|string|max:255',
                'answer' => 'required|string|max:255',
            ]);

            FAQs::create([
                'question' => $request->question,
                'answer' => $request->answer,
            ]);

            return redirect()->route('faqs.index')->with('success', 'FAQs created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' =>  $e->getMessage()]);
        }
    }

    public function update(Request $request, $id)
    {

        try {
            $request->validate([
                'question' => 'required|string|max:255',
                'answer' => 'required|string|max:255',
            ]);

            FAQs::where('id', $id)->update([
                'question' => $request->question,
                'answer' => $request->answer,
            ]);

            return redirect()->route('faqs.index')->with('success', 'FAQs updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' =>  $e->getMessage()]);
        }
    }


    public function delete($id)
    {
        try {
            $guide = FAQs::findOrFail($id);
            $guide->delete();

            return redirect()->back()->with('success', 'FAQs deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
