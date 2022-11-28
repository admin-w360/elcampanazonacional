<?php

namespace Database\Factories;


use App\Models\Question;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class QuestionFactory extends Factory
{
    /**
     * @var string
     */
    protected $model = Question::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->text,
            'description' => $this->faker->realText,
        ];
    }

}
