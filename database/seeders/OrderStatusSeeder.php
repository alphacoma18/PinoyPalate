<?php

namespace Database\Seeders;

use App\Models\OrderStatus;
use Illuminate\Database\Seeder;

class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        OrderStatus::create([
            ['status_name' => 'Pending'],
            ['status_name' => 'Confirmed'],
            ['status_name' => 'On The Way'],
            ['status_name' => 'Delivered'],
            ['status_name' => 'Cancelled']
        ]);
    }
}
