<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenuTable extends Migration
{
    public function up()
    {
        Schema::create('menu', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('restaurant_id')->notNullable();
            $table->string('description')->nullable();
            $table->string('origin')->notNullable();
            $table->string('item_name')->notNullable();
            $table->decimal('price', 10, 2)->notNullable();
            $table->foreign('restaurant_id')->references('id')->on('restaurant')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('menu');
    }
}
