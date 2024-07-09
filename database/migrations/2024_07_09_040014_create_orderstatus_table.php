<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderStatusTable extends Migration
{
    public function up()
    {
        Schema::create('orderstatus', function (Blueprint $table) {
            $table->id();
            $table->string('status_name', 10)->unique()->notNullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('orderstatus');
    }
}