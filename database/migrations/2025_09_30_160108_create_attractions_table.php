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
        Schema::create('attractions', function (Blueprint $table) {
            $table->id();
            $table->string('attraction_id');
            $table->string('name');
            $table->string('category');
            $table->string('operating_hours');
            $table->text('information');
            $table->text('history')->nullable();
            $table->text('local_rules')->nullable();
            $table->text('fun_facts')->nullable();
            $table->text('fees')->nullable();
            $table->text('contact')->nullable();
            $table->text('images');
            $table->string('distance');
            $table->decimal('long', 10, 7);
            $table->decimal('lat', 10, 7);
            $table->integer('points')->default(0);
            $table->string('qr_path');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attractions');
    }
};
