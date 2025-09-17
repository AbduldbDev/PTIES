<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Mail\ContactUsMail;
use Illuminate\Support\Facades\Mail;
use App\Models\CMSBanner;
use App\Models\PakilGuides;
use App\Models\PakilHotlines;
use App\Models\FAQs;

class ContactUsController extends Controller
{
    public function ContactUs()
    {
        $banner = CMSBanner::where('key', 'Contact Us')->first();
        $guide = PakilGuides::get();
        $hotlines = PakilHotlines::get();
        $faqs = FAQs::get();

        return Inertia::render('User/Pages/Contact', [
            'banner' => $banner,
            'guide' => $guide,
            'hotlines' => $hotlines,
            'faqs' => $faqs,
        ]);
    }


    public function send(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Mail::to('ptiesteam@gmail.com')->send(new ContactUsMail($validated));

        return redirect()->route('contact.confirmation');
    }

    public function confirmation()
    {
        return Inertia::render('User/Pages/ContactConfirmation');
    }
}
