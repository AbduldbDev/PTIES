<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\Newsletter;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:newsletters,email',
            'name'  => 'nullable|string|max:255',
        ]);

        Newsletter::create([
            'name'  => $request->name ?: 'Anonymous',
            'email' => $request->email,
        ]);

        return redirect()->route('newsletter.confirmation');
    }

    public function confirmation()
    {
        return Inertia::render('User/Pages/NewsLetterConfirmation');
    }
}
