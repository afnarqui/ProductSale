<?php

use Illuminate\Database\Seeder;

class Category extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       for ($i = 1; $i <= 40; $i++) {
            DB::table('categories')->insert([
                'nombre' => "Category $i",
            ]);
            }
    }
}
