<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    public function getActivitiesWithDistances(Request $request)
    {
        $userLatitude = $request->input('latitude');
        $userLongitude = $request->input('longitude');

        $activities = Activity::with('category', 'images', 'participations', 'author', 'author.activities.participations')->get();

        foreach ($activities as $activity) {
            $activity->distance = $this->getActivityDistance(
                $userLatitude,
                $userLongitude,
                $activity->latitude,
                $activity->longitude
            );
        }

        $activitiesFiltered = $activities->filter(function ($activity) {
            return $activity->distance < 50;
        })->values()->toArray();

        return response()->json($activitiesFiltered);
    }

    public function getActivityDistance(
        $userLatitude,
        $userLongitude,
        $activityLatitude,
        $activityLongitude
    ) {
        $earthRadius = 6371; // Rayon moyen de la Terre en kilomètres

        // Convertir les degrés en radians
        $userLatRad = deg2rad($userLatitude);
        $userLonRad = deg2rad($userLongitude);
        $activityLatRad = deg2rad($activityLatitude);
        $activityLonRad = deg2rad($activityLongitude);

        // Calcul des différences de latitude et de longitude
        $deltaLat = $activityLatRad - $userLatRad;
        $deltaLon = $activityLonRad - $userLonRad;

        // Formule de la distance entre deux points sur une sphère
        $distance = 2 * $earthRadius * asin(sqrt(
            pow(sin($deltaLat / 2), 2) +
            cos($userLatRad) * cos($activityLatRad) * pow(sin($deltaLon / 2), 2)
        ));

        return $distance;
    }
}
