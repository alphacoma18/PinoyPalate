<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRatingTable extends Migration
{
    public function up()
    {
        Schema::create('rating', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->notNullable();
            $table->unsignedBigInteger('restaurant_id')->notNullable();
            $table->integer('rating')->notNullable();
            $table->string('review')->nullable();
            $table->foreign('user_id')->references('id')->on('user')->onDelete('cascade');
            $table->foreign('restaurant_id')->references('id')->on('restaurant')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('rating');
    }
}
