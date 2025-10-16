<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SellerConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;
    public $seller;

    public function __construct($seller)
    {
        $this->seller = $seller;
    }

    public function build()
    {
        return $this->subject('Thank You for Applying as a Seller')
            ->view('emails.seller_confirmation');
    }
}
