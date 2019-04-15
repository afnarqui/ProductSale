<?php

use Illuminate\Database\Seeder;

class shoppingCarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 6; $i++) {
            DB::table('shopping_cars')->insert([
                'status' => "A",
                'idProduct' => 1,
                'idUser' => 1,
            ]);
            }
    }
}
