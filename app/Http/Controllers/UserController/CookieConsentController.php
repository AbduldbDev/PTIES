<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CookieConsentController extends Controller
{
    public function accept(Request $request)
    {
        return redirect()->back()
            ->withCookie(cookie('cookie_consent', true, 60 * 24 * 365));
    }

    public function decline(Request $request)
    {
        return redirect()->back()
            ->withCookie(cookie('cookie_consent', false, 60 * 24 * 365));
    }

    public function clearCookies(Request $request)
    {
        return redirect()->back()
            ->withCookie(cookie()->forget('cookie_consent'));
    }
}
