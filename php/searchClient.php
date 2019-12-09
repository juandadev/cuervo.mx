<?php
require '../private/config.php';
require 'database.php';

error_reporting(0);

header('Content-type: application/json; charset=utf-8');

$con = connection($db_config);
$w = $_GET['w'];

if ($con) {
    $clients = searchClientCustom($con, $w);
    $response = [];
    
    for ($i = 0; $i < count($clients); $i++) {
        $clients2 = [
            'id' => $clients[$i]['id_client'],
            'name' => $clients[$i]['name_client'],
            'age' => $clients[$i]['age_client'],
            'gender' => $clients[$i]['gender_client'],
            'phone' => $clients[$i]['phone_client'],
            'date' => str_replace('-', '/', substr($clients[$i]['date_quiz'], 0, 10))
        ];
        array_push($response, $clients2);
    }
} else {
    $response = [
        'error' => true
    ];
}

echo json_encode($response);

?>