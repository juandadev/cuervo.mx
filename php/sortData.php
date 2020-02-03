<?php
require '../private/config.php';
require 'database.php';

error_reporting(0);

header('Content-type: application/json; charset=utf-8');

$con = connection($db_config);

if ($con) {
    switch ($_GET['opt']) {
        case 'name':
            $clients = sortClient($con, 'clients.name_client', 'ASC');
            break;

        case 'age':
            $clients = sortClient($con, 'clients.age_client', 'ASC');
            break;

        case 'gender':
            $clients = sortClient($con, 'clients.gender_client', 'ASC');
            break;

        case 'date':
            $clients = sortClient($con, 'quiz.date_quiz', 'ASC');
            break;

        default:
            $clients = sortClient($con, 'quiz.date_quiz', 'ASC');
            break;
    }

    $response = [];

    for ($i = 0; $i < count($clients); $i++) {
        if ($clients[$i]['name_client'] != "") {
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
    }
} else {
    $response = [
        'error' => true
    ];
}

echo json_encode($response);
