<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'jacob',
            'email' => 'jacob@balabanov.ca',
            'password' => bcrypt('Aa123456'),
        ]);

        $this->call(SugarLevelLogTableSeeder::class);
    }
}
