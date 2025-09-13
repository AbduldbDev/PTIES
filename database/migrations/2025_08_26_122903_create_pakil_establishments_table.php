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
        Schema::create('pakil_establishments', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('name');
            $table->string('location');
            $table->string('contact');
            $table->string('facebook')->nullable();
            $table->string('long');
            $table->string('lat');
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pakil_establishments');
    }
};
