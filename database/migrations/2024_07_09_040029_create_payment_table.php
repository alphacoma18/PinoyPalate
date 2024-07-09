<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentTable extends Migration
{
    public function up()
    {
        Schema::create('payment', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id')->notNullable();
            $table->unsignedBigInteger('payment_method_id')->notNullable();
            $table->decimal('amount', 10, 2)->notNullable();
            $table->string('status', 20)->notNullable();
            $table->foreign('payment_method_id')->references('id')->on('paymentmethod')->onDelete('cascade');
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('payment');
    }
}