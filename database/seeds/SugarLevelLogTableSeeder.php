<?php

use Illuminate\Database\Seeder;
use App\SugarLevelLog;
use Faker\Factory as Faker;

class SugarLevelLogTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 100; $i++) {
            $log = new SugarLevelLog;
            $log->sugarLevel = rand(1, 300);
            $log->user_id = 1;
            $log->setCreatedAt($faker->dateTimeBetween('-1 years', 'now') );
            $log->save();

            $log = new SugarLevelLog;
            $log->user_id = 1;
            $log->sugarLevel = rand(1, 200);
            $log->setCreatedAt($faker->dateTimeBetween('-1 years', 'now') );
            $log->save();
        }
    }
}
