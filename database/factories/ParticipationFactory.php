<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Validation\Rule;
use Faker\Factory as FakerFactory;
use Carbon\Carbon;
use App\Models\Activity;
use App\Models\User;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Activity>
 */
class ParticipationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

    
        return [
            'activity_id' => $this->faker->numberBetween(1, 30),
            'participant_id' => $this->faker->numberBetween(1, 11),
            'organizator_note' => $this->faker->optional()->numberBetween(1, 5),
            'participant_note' => $this->faker->optional()->numberBetween(1, 5),
        ];

    }
}
