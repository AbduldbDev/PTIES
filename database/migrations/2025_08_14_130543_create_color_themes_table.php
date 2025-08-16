<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cms_color', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('value');
            $table->timestamps();
        });

        DB::table('cms_color')->insert([
            ['key' => 'primary', 'value' => '#052675', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'secondary', 'value' => '#f59e0b', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'accent', 'value' => '#10b981', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cms_color');
    }
};
