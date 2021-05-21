<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Seeder;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Transaction::create([
            'title' => 'Xiaomi 34inc',
            'amount'=> 5000000,
            'type'=> 'expense'
        ]);
    }
}
