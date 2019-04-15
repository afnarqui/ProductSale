<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('name');
            $table->decimal('price', 6,2);
            $table->string('description');
            $table->string('photo', 300);
            $table->integer('idCategory')->unsigned();
            $table->integer('idUser')->unsigned();
         });

         Schema::table('products', function (Blueprint $table) {
            $table->foreign('idCategory')->references('id')->on('categories')->onDelete('cascade');
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
        Schema::dropForeign(['idCategory']);
        Schema::dropIfExists('products');
    }
}
