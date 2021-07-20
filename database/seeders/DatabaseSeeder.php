<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
//        $this->call('ProductDatabaseSeeder');
        DB::table('products')->insert(
            [
                'id' => 1,
                'product_name' => 'Iphone 6',
                'product_price' => 5000,
                'product_qty' => 10,
                'product_status' => 1
            ]
        );
    }
}
//class ProductDatabaseSeeder extends Seeder{
//    public function run(){
//        DB::table('products')->insert([
//            ['id' => 1],
//            ['product_name' => 'Iphone 6'],
//            ['product_price' => 5000],
//            ['product_qty' => 10],
//            ['product_status' => 1]
//        ]);
//    }
//}
