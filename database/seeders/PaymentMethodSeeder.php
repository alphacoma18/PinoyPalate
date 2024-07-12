<?php

namespace Database\Seeders;

use App\Models\Paymentmethod;
use Illuminate\Database\Seeder;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Paymentmethod::create([
            ['name' => 'Credit Card'],
            ['name' => 'Debit Card'],
            ['name' => 'PayPal'],
            ['name' => 'Cash On Delivery']
        ]);
    }
}
