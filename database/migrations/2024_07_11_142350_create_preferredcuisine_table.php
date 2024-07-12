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
        Schema::create('preferredCuisine', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_id')->notNullable();
            $table->unsignedBigInteger('cuisine_id')->notNullable();
            $table->foreign('customer_id')->references('id')->on('customer')->onDelete('cascade');
            $table->foreign('cuisine_id')->references('id')->on('cuisine')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('preferredCuisine');
    }
};
