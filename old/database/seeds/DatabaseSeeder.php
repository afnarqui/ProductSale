<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->truncartablas([
            'categories',
            'products',
            'users',
            'shopping_cars'
        ]);

        $this->call(Category::class);
        $this->call(userSeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(shoppingCarSeeder::class);
    }
    protected function truncartablas(array $tables){
        DB::statement('SET FOREIGN_KEY_CHECKS = 0;');

        foreach($tables as $table){
            DB::table($table)->truncate();
        }

        DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
    }
}
