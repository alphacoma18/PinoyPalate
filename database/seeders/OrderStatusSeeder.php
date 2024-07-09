<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('orderstatus')->insert([
            ['status_name' => 'Pending'],
            ['status_name' => 'Confirmed'],
            ['status_name' => 'Shipped'],
            ['status_name' => 'Delivered'],
            ['status_name' => 'Cancelled']
        ]);
    }
}
