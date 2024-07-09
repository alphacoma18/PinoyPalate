<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('paymentmethod')->insert([
            ['name' => 'Credit Card'],
            ['name' => 'Debit Card'],
            ['name' => 'PayPal'],
            ['name' => 'Cash On Delivery']
        ]);
    }
}
