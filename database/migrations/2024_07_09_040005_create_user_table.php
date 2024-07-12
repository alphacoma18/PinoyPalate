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
            $table->unsignedBigInteger('user_type_id')->notNullable()->default(2);
            $table->foreign('user_type_id')->references('id')->on('user_type')->onDelete('cascade');
            $table->unsignedBigInteger('address_id')->notNullable();
            $table->foreign('address_id')->references('id')->on('address')->onDelete('cascade');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    public function down()
    {
        Schema::dropIfExists('user');
    }
}