<?php
require 'vendor/autoload.php';

//  Load env Variables
Dotenv\Dotenv::createImmutable(__DIR__)->load();




// Lazy dev, lazy CORS
header("Access-Control-Allow-Origin: *");

$app = new \Slim\App();

$container = $app->getContainer();

// Dependency Injection for database
$container['db'] = function($c){
    try {
        $db = new Database(
            
            // DSN
            "mysql:host={$_ENV['DB_HOST']};dbname={$_ENV['DB_DATABASE']};charset=utf8mb4", 
            
            // Username
            $_ENV['DB_USERNAME'], 
            
            // Password
            $_ENV['DB_PASSWORD']

        );

    } catch (\PDOException $e) {
        // Whoops, couldn't connect
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
    return $db;
};






// The default endpoint is forbidden
$app->get('/', function ($request, $response, $args) {
    return $response->withStatus(403);
});

/**
 * Endpoint:
 * /plants/state_id
 * OR
 * /plants/state_id/plant_id
 * 
 * @url https://www.slimframework.com/docs/v3/objects/router.html#route-placeholders
 */
$app->get('/plants/{state_id:[0-9]+}[/{plant_id:[0-9]+}]', function ($request, $response, $args) {

    // Old Query from getPlants.php
    $query = 'SELECT rg_app_plant_general_data.plant_id, rg_app_plant_descriptive_data.state_id, common_name, latin_name, type, color_name, full_sun, part_sun, part_shade, full_shade, upland, slope, bottom, height, width, bloom_time, native, notes, image_url, location
                FROM rg_app_plant_general_data RIGHT JOIN rg_app_plant_descriptive_data
                ON rg_app_plant_general_data.plant_id = rg_app_plant_descriptive_data.plant_id
                LEFT JOIN rg_app_plant_color_data AS pcd
                ON rg_app_plant_general_data.plant_id = pcd.plant_id AND rg_app_plant_descriptive_data.state_id = pcd.state_id
                LEFT JOIN rg_app_colors AS c
                ON pcd.color_id = c.color_id
                LEFT JOIN rg_app_states AS ras
                ON rg_app_plant_descriptive_data.state_id = ras.state_id
                WHERE app_supported = 1 AND rg_app_plant_descriptive_data.state_id = :state_id';

    // Named Params for substitution
    $params = array(':state_id' => $args['state_id']);

    // Limit the results to a specific plant_id
    if(isset($args['plant_id'])){
        $query .= ' AND rg_app_plant_general_data.plant_id=:plant_id';
        $params[':plant_id'] = $args['plant_id'];
    }

    // Run the query 
    $results = $this->db->run($query, $params)->fetchAll();
    
    // Return JSON
    return $response->withJson($results, 200, JSON_UNESCAPED_UNICODE);
});

$app->run();