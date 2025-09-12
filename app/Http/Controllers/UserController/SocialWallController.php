<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\SocialWall;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SocialWallController extends Controller {
    
    public function index (Request $request){
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = SocialWall::latest()->get();

            return Inertia::render('Admin/Pages/SocailWall/AllPost', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
            ]);
        }

        $items = SocialWall::latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/SocailWall/AllPost', [
            'items' => $items
        ]);

    }

    public function upload(Request $request){
        try{
            $request->validate([
                'image' => $request->image,
                'caption' => $request->caption,
            ]);

            $ImagePath = null;
            if ($request->hasFile('image')) {
                $filename = uniqid() . '_' . time() . '.' . $request->file('image')->getClientOriginalExtension();
                $ImagePath = $request->file('image')->storeAs('SociallWall', $filename, 'public');
            }

            SocialWall::create([
                'user_id' => Auth::id(),
                'post_id'  => Auth::id(),
                'image' => $ImagePath,
                'caption' => $request->caption,
            ]);

        }catch(\Exception $e)
        {
            return redirect()->back()->withErrors(['error', $e->getMessage()]);
        }
    }
}
