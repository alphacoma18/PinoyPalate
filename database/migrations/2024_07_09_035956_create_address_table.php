<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('address', function (Blueprint $table) {
            $table->id(); // Auto-incrementing ID
            $table->string('region', 20)->notNullable();
            $table->string('location', 20)->notNullable();
            $table->string('municipality')->notNullable();
            $table->string('street', 255)->notNullable();
            $table->integer('post_code')->notNullable();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('address');
    }
}
