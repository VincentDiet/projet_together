<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

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
        \App\Models\Activity::factory()->create(['title' => "Atelier de cuisine italienne",
            'max_participants' => 10,
            'start_datetime' => Carbon::createFromFormat('Y-m-d H:i', '2023-06-10 18:00'),
            'duration' => 3,
            'adress' => "Rue de l'Église 12",
            'city' => "Bruxelles",
            'country' => "Belgique",
            'description' => "Rejoignez-nous pour un atelier de cuisine italienne où vous apprendrez à préparer des plats authentiques de la cuisine italienne. Vous serez guidé par un chef expérimenté qui vous enseignera les techniques de base ainsi que des recettes délicieuses. Venez découvrir les secrets des pâtes fraîches, des sauces savoureuses et des desserts italiens traditionnels. L'atelier est ouvert à tous les niveaux, des débutants aux chefs amateurs.",
            'author_id' => 5,
            'category_id' => 2,
            'latitude' => 50.8503,
            'longitude' => 4.3517], );
        \App\Models\Activity::factory()->create([
            'title' => 'Séance de yoga en plein air',
            'max_participants' => 12,
            'start_datetime' => Carbon::createFromFormat('Y-m-d H:i', '2023-06-12 09:00'),
            'duration' => 1.5,
            'adress' => 'Parc du Cinquantenaire',
            'city' => 'Bruxelles',
            'country' => 'Belgique',
            'description' => "Rejoignez-nous pour une séance de yoga revitalisante en plein air au parc du Cinquantenaire. Cette séance est ouverte à tous les niveaux, des débutants aux yogis expérimentés. Apportez votre tapis de yoga et profitez d'une expérience paisible au cœur de la nature.",
            'author_id' => 3,
            'category_id' => 1,
            'latitude' => 50.8409,
            'longitude' => 4.3938,
        ]);
        \App\Models\Activity::factory()->create([
            'title' => 'Visite guidée du centre historique',
            'max_participants' => 8,
            'start_datetime' => Carbon::createFromFormat('Y-m-d H:i', '2023-06-15 14:30'),
            'duration' => 2,
            'adress' => 'Grand-Place',
            'city' => 'Bruxelles',
            'country' => 'Belgique',
            'description' => "Participez à une visite guidée fascinante du centre historique de Bruxelles. Découvrez l'histoire et l'architecture de la Grand-Place, explorez les ruelles pittoresques et apprenez-en plus sur les légendes locales. Notre guide expérimenté vous dévoilera les secrets de la ville.",
            'author_id' => 7,
            'category_id' => 5,
            'latitude' => 50.8466,
            'longitude' => 4.3528,
        ]);
        \App\Models\Activity::factory()->create([
            "title" => "Randonnée en forêt",
            "max_participants" => 10,
            "start_datetime" => Carbon::createFromFormat("Y-m-d H:i", "2023-06-20 10:00"),
            "duration" => 3,
            "adress" => "Chemin de la Forêt",
            "city" => "Spa",
            "country" => "Belgique",
            "description" => "Partez à la découverte de la nature lors d'une randonnée en forêt à Spa. Profitez de l'air frais et des magnifiques paysages forestiers. Cette activité est ouverte à tous les amateurs de plein air, des débutants aux randonneurs expérimentés.",
            "author_id" => 2,
            "category_id" => 3,
            "latitude" => 50.4847,
            "longitude" => 5.8700,
        ]);
        \App\Models\Activity::factory()->create([
            "title" => "Excursion à la côte belge",
            "max_participants" => 15,
            "start_datetime" => Carbon::createFromFormat("Y-m-d H:i", "2023-06-28 11:30"),
            "duration" => 5,
            "adress" => "Boulevard de la Mer",
            "city" => "Ostende",
            "country" => "Belgique",
            "description" => "Passez une journée à la côte belge à Ostende. Profitez du soleil, de la mer et du sable. Participez à des activités nautiques excitantes, dégustez des spécialités locales et promenez-vous le long du boulevard animé. Une excursion parfaite pour toute la famille.",
            "author_id" => 6,
            "category_id" => 6,
            "latitude" => 51.2211,
            "longitude" => 2.9178,
        ]);
        \App\Models\Activity::factory()->create([
            "title" => "Dégustation de bières belges",
            "max_participants" => 10,
            "start_datetime" => Carbon::createFromFormat("Y-m-d H:i", "2023-07-03 19:00"),
            "duration" => 2,
            "adress" => "Rue des Brasseurs",
            "city" => "Leuven",
            "country" => "Belgique",
            "description" => "Explorez l'univers des bières belges lors d'une dégustation à Leuven. Découvrez différents styles de bières, apprenez-en plus sur le processus de brassage et savourez des saveurs uniques. Cette dégustation est animée par des experts en bière qui partageront leurs connaissances avec passion.",
            "author_id" => 4,
            "category_id" => 7,
            "latitude" => 50.8798,
            "longitude" => 4.7005,
        ]);
        \App\Models\Activity::factory()->create([
            "title" => "Balade à vélo dans les Ardennes",
            "max_participants" => 8,
            "start_datetime" => Carbon::createFromFormat("Y-m-d H:i", "2023-07-06 10:30"),
            "duration" => 4,
            "adress" => "Rue de la Montagne",
            "city" => "Durbuy",
            "country" => "Belgique",
            "description" => "Parcourez les magnifiques paysages des Ardennes lors d'une balade à vélo à Durbuy. Pédalez à travers les collines verdoyantes, longez les rivières et explorez les charmants villages. Cette excursion est idéale pour les amateurs de plein air et les amoureux de la nature.",
            "author_id" => 8,
            "category_id" => 3,
            "latitude" => 50.3517,
            "longitude" => 5.4587,
        ]);
        \App\Models\Activity::factory()->create([
            "title" => "Cours de cuisine belge",
            "max_participants" => 6,
            "start_datetime" => Carbon::createFromFormat("Y-m-d H:i", "2023-07-10 18:00"),
            "duration" => 3,
            "adress" => "Rue des Chefs",
            "city" => "Liège",
            "country" => "Belgique",
            "description" => "Apprenez à préparer des plats traditionnels belges lors d'un cours de cuisine à Liège. Découvrez les secrets des recettes locales, utilisez des ingrédients frais et savourez les délices de la gastronomie belge. Ce cours est animé par un chef expérimenté qui vous guidera à chaque étape.",
            "author_id" => 5,
            "category_id" => 4,
            "latitude" => 50.6411,
            "longitude" => 5.5714,
        ]);
        \App\Models\Activity::factory()->create([
            "title" => "Excursion en kayak sur la Lesse",
            "max_participants" => 10,
            "start_datetime" => Carbon::createFromFormat("Y-m-d H:i", "2023-07-14 11:00"),
            "duration" => 5,
            "adress" => "Rue de l'Eau",
            "city" => "Houyet",
            "country" => "Belgique",
            "description" => "Vivez une aventure aquatique en participant à une excursion en kayak sur la Lesse à Houyet. Pagayez le long de la rivière, admirez les paysages pittoresques et profitez d'une journée de détente en plein air. Cette activité convient à tous les niveaux de kayakistes, des débutants aux experts.",
            "author_id" => 11,
            "category_id" => 6,
            "latitude" => 50.1765,
            "longitude" => 5.0186,
        ]);

        \App\Models\Activity::factory()->create([
            "title" => "Concert en plein air",
            "max_participants" => 12,
            "start_datetime" => Carbon::createFromFormat("Y-m-d H:i", "2023-07-18 20:30"),
            "duration" => 2,
            "adress" => "Place du Marché",
            "city" => "Namur",
            "country" => "Belgique",
            "description" => "Assistez à un concert en plein air sur la Place du Marché à Namur. Profitez d'une soirée musicale animée par des artistes locaux talentueux. Apportez votre chaise pliante et votre bonne humeur pour une soirée mémorable sous les étoiles.",
            "author_id" => 2,
            "category_id" => 8,
            "latitude" => 50.4614,
            "longitude" => 4.8645,
        ]);

        \App\Models\Activity::factory()->create([
            "title" => "Séance de méditation guidée",
            "max_participants" => 8,
            "start_datetime" => Carbon::createFromFormat("Y-m-d H:i", "2023-07-22 09:30"),
            "duration" => 1.5,
            "adress" => "Rue de la Sérénité",
            "city" => "Mons",
            "country" => "Belgique",
            "description" => "Détendez-vous et recentrez-vous lors d'une séance de méditation guidée à Mons. Laissez-vous guider par un instructeur expérimenté dans une ambiance calme et apaisante. Apprenez des techniques de respiration et de pleine conscience pour cultiver la sérénité intérieure.",
            "author_id" => 9,
            "category_id" => 1,
            "latitude" => 50.4541,
            "longitude" => 3.9523,
        ]);
        \App\Models\Activity::factory(29)->create();
        \App\Models\Image::factory(200)->create();
        \App\Models\Participation::factory(30)->create();
        \App\Models\Follower::factory(10)->create();
    }
}
