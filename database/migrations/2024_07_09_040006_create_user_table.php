<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserTable extends Migration
{
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {
            $table->id();
            $table->string('name')->notNullable();
            $table->string('email')->notNullable()->unique();
            $table->string('password')->notNullable();
            $table->string('phone')->notNullable();
            $table->unsignedBigInteger('address_id')->notNullable();
            $table->foreign('address_id')->references('id')->on('address')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('user');
    }
}