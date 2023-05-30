<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as FakerFactory;
use Carbon\Carbon;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Activity>
 */
class ActivityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = FakerFactory::create('fr_BE');
        $faker->addProvider(new \Faker\Provider\fr_BE\Address($faker));
        $currentDateTime = Carbon::now();

    
        $startDateTime = $faker->dateTimeBetween($currentDateTime, $currentDateTime->copy()->addMonths(1));

    return [
        'title' => $this->faker->sentence(4),
        'max_participants' => $faker->numberBetween(5, 20),
        'start_datetime' => $startDateTime,
        'duration' => $this->faker->randomDigitNotZero(),
        'adress' => $faker->streetAddress(), 
        'city' => $faker->city(), 
        'country' => 'Belgium', 
        'description' => $this->faker->sentence(12),
        'author_id' => $faker->numberBetween(1, 11),
        'category_id' => $faker->numberBetween(1, 10),
        'latitude' => $faker->latitude(49.5, 51.5),
        'longitude' => $faker->longitude(2.55, 6.4),
    ];

    }
}
