<?php
session_start();

require 'database.php';
require '../private/config.php';

$subscription = json_decode(file_get_contents('php://input'), true);
$con = connection($db_config);

if (!isset($subscription['endpoint'])) {
    echo 'Error: not a subscription';
    return;
}

$method = $_SERVER['REQUEST_METHOD'];
$endpoint = $subscription['endpoint'];
$admin = $_SESSION['admin'];

switch ($method) {
    case 'POST':
        // create a new subscription entry in your database (endpoint is unique)
        $statement = $con->query("UPDATE users SET endpoint_user = '$endpoint' WHERE name_user = '$admin'");
        break;
    case 'DELETE':
        // delete the subscription corresponding to the endpoint
        $statement = $con->query("UPDATE users SET endpoint_user = '' WHERE name_user = '$admin'");
        break;
    default:
        echo "Error: method not handled";
        return;
}
