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
        Schema::create('local_market_products', function (Blueprint $table) {
            $table->id();
            $table->string('product_id');
            $table->foreignId('shop_id')->constrained('local_market_sellers')->cascadeOnDelete();
            $table->string('product_name');
            $table->string('category');
            $table->text('description')->nullable();
            $table->text('images');
            $table->text('variants');
            $table->boolean('status')->default(0);
            $table->boolean('is_approved')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('local_market_products');
    }
};
