<?php

namespace Database\Seeders;


use App\Models\Question;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $csvFile = fopen(storage_path("data/pqrs.csv"), "r");
        $firstline = true;
        while (($data = fgetcsv($csvFile, 200, ";")) !== FALSE) {
            if (!$firstline && isset($data['1'])) {
                Question::create([
                    'name' => $data['0'],
                    'description' => $data['1'],
                    'created_at' => now()->toDateTimeString(),
                    'updated_at' => now()->toDateTimeString()
                ]);
            }
            $firstline = false;
        }
        fclose($csvFile);
    }
}
