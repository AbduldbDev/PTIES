<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ProductApprovalMail extends Mailable
{
    use Queueable, SerializesModels;

    public $seller;
    public $product;
    public $dashboardUrl;

    function __construct($seller, $product)
    {
        $this->seller = $seller;
        $this->product = $product;
    }


    public function build()
    {
        return $this->subject('Your Product Has Been Approved!')
            ->view('emails.product_approval')
            ->with([
                'seller' => $this->seller,
                'product' => $this->product,
            ]);
    }
}
