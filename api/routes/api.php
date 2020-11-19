<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/plants/{id}', function ($id) {

    // Yuck
    $plants = DB::select('SELECT rg_app_plant_general_data.plant_id, rg_app_plant_descriptive_data.state_id, common_name, latin_name, type, color_name, full_sun, part_sun, part_shade, full_shade, upland, slope, bottom, height, width, bloom_time, native, notes, image_url, location
			  FROM rg_app_plant_general_data RIGHT JOIN rg_app_plant_descriptive_data
			  ON rg_app_plant_general_data.plant_id = rg_app_plant_descriptive_data.plant_id
			  LEFT JOIN rg_app_plant_color_data AS pcd
			  ON rg_app_plant_general_data.plant_id = pcd.plant_id AND rg_app_plant_descriptive_data.state_id = pcd.state_id
			  LEFT JOIN rg_app_colors AS c
			  ON pcd.color_id = c.color_id
			  LEFT JOIN rg_app_states AS ras
			  ON rg_app_plant_descriptive_data.state_id = ras.state_id
			  WHERE app_supported = 1 AND rg_app_plant_descriptive_data.state_id = ?', [$id]);

    return response()->json($plants);
})->where(['id' => '[0-9]+']);
