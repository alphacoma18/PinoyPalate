<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRestaurantTable extends Migration
{
    public function up()
    {
        Schema::create('restaurant', function (Blueprint $table) {
            $table->id();
            $table->string('name')->notNullable();
            $table->string('phone')->notNullable();
            $table->unsignedBigInteger('address_id')->notNullable();
            $table->unsignedBigInteger('owner_id')->notNullable();
            $table->foreign('address_id')->references('id')->on('address')->onDelete('cascade');
            // $table->foreign('owner_id')->references('id')->on('restaurant_owner')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('restaurant');
    }
}