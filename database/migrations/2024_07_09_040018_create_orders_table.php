<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreateOrdersTable extends Migration
{
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->notNullable();
            $table->unsignedBigInteger('restaurant_id')->notNullable();
            $table->decimal('order_total', 10, 2)->notNullable();
            $table->unsignedBigInteger('order_status_id')->notNullable();
            $table->foreign('user_id')->references('id')->on('user')->onDelete('cascade');
            $table->foreign('restaurant_id')->references('id')->on('restaurant')->onDelete('cascade');
            $table->foreign('order_status_id')->references('id')->on('orderstatus')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('orders');
    }
}