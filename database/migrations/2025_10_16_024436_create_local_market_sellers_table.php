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
        Schema::create('local_market_sellers', function (Blueprint $table) {
            $table->id();
            $table->string('shop_id');
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('business_name');
            $table->string('barangay');
            $table->string('location');
            $table->text('bio')->nullable();
            $table->string('logo')->nullable();
            $table->string('owner_name');
            $table->string('owner_contact');
            $table->string('owner_address');
            $table->string('email');
            $table->text('category');
            $table->text('product_description');
            $table->text('product_images');
            $table->decimal('min_price', 10, 2);
            $table->decimal('max_price', 10, 2);
            $table->string('availability');
            $table->string('facebook_link')->nullable();
            $table->string('instagram_link')->nullable();
            $table->string('tiktok_link')->nullable();
            $table->string('website_link')->nullable();
            $table->string('business_permit');
            $table->text('additional_docs')->nullable();
            $table->string('long');
            $table->string('lat');
            $table->boolean('status')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('local_market_sellers');
    }
};
