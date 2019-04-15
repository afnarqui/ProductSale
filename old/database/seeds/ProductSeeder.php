<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 40; $i++) {
            DB::table('products')->insert([
                'name' => "Short $i",
                'price' => '1500',
                'description' => 'Excellent',
                'idCategory' => 1,
                'idUser' => 1,
                'photo' => ""
            ]);
            }
    }
}
