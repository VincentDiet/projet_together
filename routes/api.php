<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/categories', function () {
    $categories = App\Models\Category::all();
    return response()->json($categories);
});

Route::get('/activities/closest', function () {
    $activities = App\Models\Activity::take(10)->with('category', 'images', 'participations', 'author')->get();
    return response()->json($activities);
});
