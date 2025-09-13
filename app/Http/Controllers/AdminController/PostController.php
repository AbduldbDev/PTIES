<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\SocialWall;

class PostController extends Controller
{
    public function pending(Request $request)
    {
        $text = "Pending Approval";
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = SocialWall::with('user')->where('is_approved', 0)->latest()->get();

            return Inertia::render('Admin/Pages/SocialWall/PostsTable', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
                'text' => $text,
            ]);
        }

        $items = SocialWall::with('user')->where('is_approved', 0)->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/SocialWall/PostsTable', [
            'items' => $items,
            'text' => $text,

        ]);
    }

    public function rejected(Request $request)
    {
        $text = "Rejected";
        $perPage = $request->input('per_page', 20);

        if ($request->input('per_page') === 'all') {
            $items = SocialWall::with('user')->where('is_approved', 2)->latest()->get();

            return Inertia::render('Admin/Pages/SocialWall/PostsTable', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
                'text' => $text,
            ]);
        }

        $items = SocialWall::with('user')->where('is_approved', 2)->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/SocialWall/PostsTable', [
            'items' => $items,
            'text' => $text,
        ]);
    }

    public function approved(Request $request)
    {
        $text = "Approved";
        $perPage = $request->input('per_page', 20);
        if ($request->input('per_page') === 'all') {
            $items = SocialWall::with('user')->where('is_approved', 1)->latest()->get();

            return Inertia::render('Admin/Pages/SocialWall/PostsTable', [
                'items' => [
                    'data' => $items,
                    'links' => [],
                    'meta' => null
                ],
                'text' => $text,
            ]);
        }

        $items = SocialWall::with('user')->where('is_approved', 1)->latest()->paginate($perPage);
        if ($request->has('per_page')) {
            $items->appends(['per_page' => $perPage]);
        }

        return Inertia::render('Admin/Pages/SocialWall/PostsTable', [
            'items' => $items,
            'text' => $text,
        ]);
    }

    public function view($id)
    {
        $item = SocialWall::with('user')->findOrFail($id);
        return Inertia::render('Admin/Pages/SocialWall/EditPost', [
            'item' => $item
        ]);
    }

    public function approve($id)
    {
        $post = SocialWall::findOrFail($id);
        $post->is_approved = 1;
        $post->save();
        return redirect()->back()->with('success', 'Post Approved successfully.');
    }

    public function reject($id)
    {
        $post = SocialWall::findOrFail($id);
        $post->is_approved = 2;
        $post->save();

        return redirect()->back()->with('success', 'Post Rejected successfully.');
    }

    public function delete($id)
    {
        $post = SocialWall::findOrFail($id);
        $post->delete();

        return redirect()->route('socailwall.approved')->with('success', 'Post Deleted successfully.');
    }
}
