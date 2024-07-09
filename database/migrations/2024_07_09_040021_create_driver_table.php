<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreateDriverTable extends Migration
{
    public function up()
    {
        Schema::create('driver', function (Blueprint $table) {
            $table->id();
            $table->string('name')->notNullable();
            $table->string('phone')->notNullable();
            $table->string('location')->notNullable();
            $table->string('email')->notNullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('driver');
    }
}