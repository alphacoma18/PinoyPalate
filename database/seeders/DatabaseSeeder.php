<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Insert user types
        DB::table('user_type')->insert([
            ['name' => 'Admin'],
            ['name' => 'Customer'],
            ['name' => 'Restaurant'],
            ['name' => 'Rider'],
        ]);

        // Insert regions
        $regions = json_decode(File::get(database_path('seeders/Region.json')), true);
        DB::table('region')->insert($regions);

        // Insert addresses
        $addresses = json_decode(File::get(database_path('seeders/Address.json')), true);
        DB::table('address')->insert($addresses);

        // Insert users
        $users = json_decode(File::get(database_path('seeders/User.json')), true);
        DB::table('user')->insert($users);

        // Insert restaurant owners
        $restaurantOwners = json_decode(File::get(database_path('seeders/RestaurantOwner.json')), true);
        DB::table('restaurant_owner')->insert($restaurantOwners);

        // Debug information
        echo "Inserted restaurant owners:\n";
        foreach ($restaurantOwners as $owner) {
            echo "ID: " . $owner['id'] . "\n";
        }

        // Insert restaurants
        $restaurants = json_decode(File::get(database_path('seeders/Restaurant.json')), true);
        DB::table('restaurant')->insert($restaurants);

        // Debug information
        echo "Inserted restaurants:\n";
        foreach ($restaurants as $restaurant) {
            echo "ID: " . $restaurant['id'] . ", Owner ID: " . $restaurant['owner_id'] . "\n";
        }

        // Insert order statuses
        DB::table('orderstatus')->insert([
            ['status_name' => 'Pending'],
            ['status_name' => 'Confirmed'],
            ['status_name' => 'On The Way'],
            ['status_name' => 'Delivered'],
            ['status_name' => 'Cancelled']
        ]);

        // Insert payment methods
        DB::table('paymentmethod')->insert([
            ['name' => 'Credit Card'],
            ['name' => 'Debit Card'],
            ['name' => 'PayPal'],
            ['name' => 'Cash On Delivery']
        ]);

        // Insert cuisines
        DB::table('cuisine')->insert([
            ['name' => 'Savory'],
            ['name' => 'Sweet'],
            ['name' => 'Sour'],
            ['name' => 'Bittery'],
            ['name' => 'Vegan'],
            ['name' => 'Bread'],
        ]);
    }
}
