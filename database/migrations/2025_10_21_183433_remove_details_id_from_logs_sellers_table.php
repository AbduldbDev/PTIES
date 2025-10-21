<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('logs_sellers', function (Blueprint $table) {
            // Drop the foreign key constraint first
            $table->dropForeign(['details_id']);
            // Then drop the column
            $table->dropColumn('details_id');
        });
    }

    public function down()
    {
        Schema::table('logs_sellers', function (Blueprint $table) {
            // Recreate the column and foreign key if needed for rollback
            $table->foreignId('details_id')->constrained('local_market_sellers')->cascadeOnDelete();
        });
    }
};