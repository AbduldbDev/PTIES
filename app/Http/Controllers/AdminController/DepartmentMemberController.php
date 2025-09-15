<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Department;
use App\Models\DepartmentMembers;
use Inertia\Inertia;

class DepartmentMemberController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = DepartmentMembers::with('department')->latest()->get();

            return Inertia::render('Admin/Pages/DepartmentsMember/AllMembers', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = DepartmentMembers::with('department')->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/DepartmentsMember/AllMembers', [
            'items' => $items
        ]);
    }

    public function new()
    {
        $departments = Department::get();
        return Inertia::render(
            'Admin/Pages/DepartmentsMember/NewMember',
            [
                'items' => $departments
            ]
        );
    }

    public function create(Request $request)
    {

        try {
            $request->validate([
                'department' => 'required|numeric|max:255',
                'name' => 'required|string|max:255',
                'position' => 'required|string|max:255',
                'is_leader' => 'required|max:255',
            ]);

            $type = false;
            if ($request->is_leader === 'head') {
                $type = true;
            }

            DepartmentMembers::create([
                'department_id'  => $request->department,
                'name' => $request->name,
                'position' => $request->position,
                'is_leader' =>  $type,
            ]);

            return redirect()->route('deptstructure.index')->with('success', 'Department Member created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' =>  $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $item = DepartmentMembers::findOrFail($id);
        $departments = Department::get();
        return Inertia::render('Admin/Pages/DepartmentsMember/EditMember', [
            'item' => $item,
            'items' => $departments,
        ]);
    }

    public function update(Request $request, $id)
    {

        try {
            $request->validate([
                'department' => 'required|numeric|max:255',
                'name' => 'required|string|max:255',
                'position' => 'required|string|max:255',
                'is_leader' => 'required|max:255',
            ]);

            $type = false;
            if ($request->is_leader === 'head') {
                $type = true;
            }

            DepartmentMembers::where('id', $id)->update([
                'department_id'  => $request->department,
                'name' => $request->name,
                'position' => $request->position,
                'is_leader' =>  $type,
            ]);

            return redirect()->route('deptstructure.index')->with('success', 'Department Member updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' =>  $e->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {

            $establishment = DepartmentMembers::findOrFail($id);
            $establishment->delete();

            return redirect()->back()->with('success', 'Department member deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
