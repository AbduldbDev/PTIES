<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SellerApprovalMail extends Mailable
{
    use Queueable, SerializesModels;
    public $seller;

    public function __construct($seller)
    {
        $this->seller = $seller;
    }

    public function build()
    {
        return $this->subject('Welcome To Pakil Local Market!')
            ->view('emails.seller_approval');
    }
}
