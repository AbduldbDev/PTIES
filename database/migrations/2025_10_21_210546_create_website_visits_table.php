<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('website_visits', function (Blueprint $table) {
            $table->id();
            $table->string('visitor_id', 191); 
            $table->string('ip_address', 45)->nullable(); 
            $table->text('user_agent')->nullable();
            $table->text('url'); 
            $table->timestamp('visited_at');
            $table->timestamps();

            $table->index(['visitor_id', 'visited_at']);
            $table->index('visited_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('website_visits');
    }
};
