<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShoppingCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shopping_cars', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('status', 1);
            $table->integer('idProduct')->unsigned();
            $table->integer('idUser')->unsigned();
        });

        Schema::table('shopping_cars', function (Blueprint $table) {
            $table->foreign('idProduct')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('idUser')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropForeign(['idProduct']);
        Schema::dropForeign(['idUser']);
        Schema::dropIfExists('shopping_cars');
    }
}
