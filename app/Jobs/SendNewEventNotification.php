<?php

namespace App\Jobs;

use App\Models\Events;
use App\Models\User;
use App\Mail\NewsLetterMail;
use App\Models\Newsletter;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendNewEventNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The event instance.
     */
    public function __construct(
        public Events $event,
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $subscribers = Newsletter::get();

        foreach ($subscribers as $subscriber) {
            Mail::to($subscriber->email)->send(new NewsLetterMail($this->event));
        }
    }
}
