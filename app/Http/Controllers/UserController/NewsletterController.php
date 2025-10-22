<?php

namespace App\Http\Controllers\UserController;

use App\Mail\NewsLetterConfirmation;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Models\Newsletter;
use Inertia\Inertia;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:newsletters,email',
            'name'  => 'nullable|string|max:255',
        ]);

        $subscriber = Newsletter::create([
            'name'  => $request->name ?: 'Anonymous',
            'email' => $request->email,
        ]);

        Mail::to($subscriber->email)->send(new NewsLetterConfirmation($subscriber));

        return redirect()->route('newsletter.confirmationpage');
    }

    public function confirmation()
    {
        return Inertia::render('User/Pages/NewsLetterConfirmation');
    }
}
