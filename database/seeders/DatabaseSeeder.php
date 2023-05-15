<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create([
            'lastname' => "Diet",
            'firstname' => "Vincent",
            'pseudo' => "Rocket",
            'date_of_birth' => "1998-03-06",
            'city' => "Liège",
            'country' => "Belgium",
            'email' => "dietvincent@gmail.com",
            'profile_photo_path' => "https://cdn.vox-cdn.com/thumbor/FPnbvLPFJ6Pnh96Mol1NzCW35oE=/0x0:3823x1595/1200x800/filters:focal(1607x493:2217x1103)/cdn.vox-cdn.com/uploads/chorus_image/image/70505683/ian_mckellan_gandalf_4k_lotr.0.jpg",
        ]);

        \App\Models\User::factory(10)->create();
        \App\Models\Category::factory(10)->create();
        \App\Models\Activity::factory(30)->create();
        \App\Models\Image::factory(200)->create();
        \App\Models\Participation::factory(30)->create();
        \App\Models\Follower::factory(10)->create();
    }
}