<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('content_promvid', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slogan');
            $table->string('description');
            $table->json('highlights');
            $table->string('thumbnail');
            $table->string('video');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('content_promvid');
    }
};
