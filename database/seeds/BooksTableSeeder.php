<?php

use Illuminate\Database\Seeder;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 10; $i++) {
   	    	DB::table('books')->insert([
	            'name' => 'Foo bar',
	            'price' => '19.99',
            ]);
        }
    }
}
