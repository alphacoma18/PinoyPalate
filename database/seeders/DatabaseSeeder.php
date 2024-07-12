<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
// import Region.json in same directory
use Illuminate\Support\Facades\File;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // parse json file
        $regions = json_decode(File::get(database_path('seeders/Region.json')), true);
        DB::table('region')->insert($regions);

        DB::table('orderstatus')->insert([
            ['status_name' => 'Pending'],
            ['status_name' => 'Confirmed'],
            ['status_name' => 'On The Way'],
            ['status_name' => 'Delivered'],
            ['status_name' => 'Cancelled']
        ]);

        DB::table('paymentmethod')->insert([
            ['name' => 'Credit Card'],
            ['name' => 'Debit Card'],
            ['name' => 'PayPal'],
            ['name' => 'Cash On Delivery']
        ]);

        DB::table('cuisine')->insert([
            ['name' => 'Savory'],
            ['name' => 'Sweet'],
            ['name' => 'Sour'],
            ['name' => 'Bittery'],
            ['name' => 'Vegan'],
            ['name' => 'Bread'],
        ]);


        // DB::table('paymentmethod')->insert([
        //     ['name' => 'Credit Card'],
        //     ['name' => 'Debit Card'],
        //     ['name' => 'PayPal'],
        //     ['name' => 'Cash On Delivery']
        // ]);
    }
}
