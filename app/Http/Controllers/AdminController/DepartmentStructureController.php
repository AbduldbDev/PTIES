<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepartmentStructureController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = Department::with('parent')->latest()->get();

            return Inertia::render('Admin/Pages/Departments/AllDepartments', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = Department::with('parent')->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/Departments/AllDepartments', [
            'items' => $items
        ]);
    }

    public function new()
    {
        $departments = Department::get();
        return Inertia::render(
            'Admin/Pages/Departments/NewDepartment',
            [
                'items' => $departments
            ]
        );
    }

    public function create(Request $request)
    {

        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'subtitle' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'icon' => 'required|string|max:255',
                'parent_id' => 'nullable|numeric|max:255',
            ]);

            Department::create([
                'title'  => $request->title,
                'subtitle' => $request->subtitle,
                'description' => $request->description,
                'icon' =>  $request->icon,
                'parent_id' =>  $request->parent_id,
            ]);

            return redirect()->route('departments.index')->with('success', 'Department created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' =>  $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $item = Department::findOrFail($id);
        $departments = Department::get();
        return Inertia::render('Admin/Pages/Departments/EditDepartment', [
            'item' => $item,
            'items' => $departments,
        ]);
    }

    public function update(Request $request, $id)
    {

        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'subtitle' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'icon' => 'required|string|max:255',
                'parent_id' => 'nullable|numeric|max:255',
            ]);

            Department::where('id', $id)->update([
                'title'  => $request->title,
                'subtitle' => $request->subtitle,
                'description' => $request->description,
                'icon' =>  $request->icon,
                'parent_id' =>  $request->parent_id,
            ]);

            return redirect()->route('departments.index')->with('success', 'Department updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' =>  $e->getMessage()]);
        }
    }


    public function delete($id)
    {
        try {
            $establishment = Department::findOrFail($id);
            $establishment->delete();
            return redirect()->back()->with('success', 'Department deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
