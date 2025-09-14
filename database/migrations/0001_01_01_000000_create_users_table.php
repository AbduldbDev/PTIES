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

        // Users table (central auth)
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->string('google_id')->nullable()->unique();
            $table->string('user_type')->default('user');
            $table->string('avatar')->nullable();
            $table->rememberToken();
            $table->string('otp')->nullable();
            $table->timestamp('otp_expires_at')->nullable();
            $table->boolean('is_verified')->default(false);
            $table->timestamps();
        });

        // Admins & Employees personal info
        Schema::create('account_employees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('gender');
            $table->string('contact');
            $table->string('address');
            $table->string('position');
            $table->string('facebook')->nullable();
            $table->string('email')->nullable();
            $table->date('date_employed')->nullable();
            $table->timestamps();
        });

        // // Sellers personal info
        // Schema::create('account_sellers', function (Blueprint $table) {
        //     $table->id();
        //     $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
        //     $table->string('shop_name');
        //     $table->string('contact_person')->nullable();
        //     $table->string('phone')->nullable();
        //     $table->string('address')->nullable();
        //     $table->timestamps();
        // });

        // Customers personal info
        Schema::create('account_customers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->timestamps();
        });

        // Laravel's default password reset
        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        // Laravel's default sessions table
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->string('contact');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('customers');
        // Schema::dropIfExists('sellers');
        Schema::dropIfExists('admins_employees');
        Schema::dropIfExists('users');
    }
};
