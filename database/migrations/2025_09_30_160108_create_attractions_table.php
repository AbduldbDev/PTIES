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
            $table->string('name');
            $table->string('category')->nullable();
            $table->string('operating_hours')->nullable();
            $table->text('information')->nullable();
            $table->text('history')->nullable();
            $table->text('local_rules')->nullable();
            $table->text('fun_facts')->nullable();
            $table->text('fees')->nullable();
            $table->text('contact')->nullable();
            $table->text('images')->nullable();
            $table->string('distance')->nullable();
            $table->decimal('long', 10, 7)->nullable();
            $table->decimal('lat', 10, 7)->nullable();
            $table->integer('points')->default(0);
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
