<?php

use Illuminate\Database\Seeder;

class userSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 3; $i++) {
            DB::table('users')->insert([
                'name' => "new $i",
                'email' => "new@$i.com",
                'password' => "$i",
            ]);
            }

    }
}
