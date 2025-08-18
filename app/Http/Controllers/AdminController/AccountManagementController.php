<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\AccountEmployee;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\CMSColor;

class AccountManagementController extends Controller
{

    public function App(Request $request)
    {
        return Inertia::render('Admin/Pages/Dashboard');
    }


    public function index(Request $request)
    {

        $items = User::with('profile')->whereIn('user_type', ['admin', 'content_manager'])->latest()->paginate(20)
            ->withQueryString();
        return Inertia::render('Admin/Pages/AccountManagement/AllAccounts', [
            'items' => $items
        ]);
    }


    public function form(Request $request)
    {
        return Inertia::render('Admin/Pages/AccountManagement/Newform');
    }


    public function create(Request $request)
    {

        try {
            $request->validate([
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:8|confirmed',
                'user_type' => 'required|string',
                'profileImage' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                'firstname' => 'required|string|max:255',
                'middlename' => 'nullable|string|max:255',
                'lastname' => 'required|string|max:255',
                'gender' => 'required|in:male,female,other',
                'contact' => 'required|string|max:20',
                'address' => 'required|string|max:500',
                'position' => 'required|string|max:255',
            ], [
                'email.required' => 'Email is required.',
                'email.email' => 'Please enter a valid email address.',
                'email.unique' => 'This email is already taken.',
                'password.required' => 'Password is required.',
                'password.min' => 'Password must be at least 8 characters.',
                'password.confirmed' => 'Password confirmation does not match.',
                'user_type.required' => 'User type is required.',
                'firstname.required' => 'First name is required.',
                'lastname.required' => 'Last name is required.',
                'gender.required' => 'Please select a gender.',
                'gender.in' => 'Selected gender is invalid.',
                'contact.required' => 'Contact is required.',
                'address.required' => 'Address is required.',
                'position.required' => 'Position is required.',
            ]);

            $profileImagePath = null;
            if ($request->hasFile('profileImage')) {
                $profileImagePath = $request->file('profileImage')->store('EmployeAvatars', 'public');
            }
            
            $user =  User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'user_type' => $request->user_type,
                'avatar' => $profileImagePath,
            ]);

            AccountEmployee::create([
                'user_id' => $user->id,
                'first_name'  => $request->firstname,
                'middle_name' => $request->middlename,
                'last_name' => $request->lastname,
                'gender' => $request->gender,
                'contact' => $request->contact,
                'address'  => $request->address,
                'position' => $request->position,
                'email'  =>  $request->email,
                'date_employed' => Carbon::now(),
            ]);

            return redirect()->route('account.management.index')->with('success', 'User Account Created Successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function update(Request $request)
    {
        try {
            $request->validate([
                'user_type' => 'required|string',
                'profileImage' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                'firstname' => 'required|string|max:255',
                'middlename' => 'nullable|string|max:255',
                'lastname' => 'required|string|max:255',
                'gender' => 'required|in:male,female,other',
                'contact' => 'required|string|max:20',
                'address' => 'required|string|max:500',
                'position' => 'required|string|max:255',
            ], [
                'user_type.required' => 'User type is required.',
                'firstname.required' => 'First name is required.',
                'lastname.required' => 'Last name is required.',
                'gender.required' => 'Please select a gender.',
                'gender.in' => 'Selected gender is invalid.',
                'contact.required' => 'Contact is required.',
                'address.required' => 'Address is required.',
                'position.required' => 'Position is required.',
            ]);

            $user = User::findOrFail($request->id);

            // Handle profile image update
            if ($request->hasFile('profileImage')) {
                // Delete old image if it exists
                if ($user->avatar) {
                    Storage::disk('public')->delete($user->avatar);
                }

                // Store new image
                $profileImagePath = $request->file('profileImage')->store('EmployeAvatars', 'public');
                $user->avatar = $profileImagePath;
                $user->save();
            }

            AccountEmployee::where("user_id",  $request->id)->update([
                'first_name'  => $request->firstname,
                'middle_name' => $request->middlename,
                'last_name' => $request->lastname,
                'gender' => $request->gender,
                'contact' => $request->contact,
                'address'  => $request->address,
                'position' => $request->position,
                'date_employed' => Carbon::now(),
            ]);

            return redirect()->route('account.management.index')->with('success', 'User Account Update Successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }






    public function edit($id)
    {
        $user = User::with('profile')->findOrFail($id);
        return Inertia::render('Admin/Pages/AccountManagement/EditForm', [
            'user' => $user,
        ]);
    }

    public function delete($id)
    {
        $product = User::findOrFail($id);
        $product->delete();

        return redirect()->back()->with('success', 'User deleted successfully!');
    }
}
