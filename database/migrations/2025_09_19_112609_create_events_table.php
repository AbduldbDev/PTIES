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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('image');
            $table->date('start_date');
            $table->date('end_date');
            $table->text('description');
            $table->text('schedules')->nullable();
            $table->text('admission')->nullable();
            $table->text('attire')->nullable();
            $table->text('contacts')->nullable();
            $table->string('long');
            $table->string('lat');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
