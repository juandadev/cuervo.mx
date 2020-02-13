<?php
require '../private/config.php';
require 'database.php';

$con = connection($db_config);

$user = strtolower($_GET['n']);
$pass = $_GET['pass'];
$pass_hashed = hash('sha512', $pass);
$admin = $_GET['admin'];
$response = [];

$con->query("INSERT INTO users (name_user, password_user, photo) VALUES ('$user', '$pass_hashed', default)");

array_push($response, 'Usuario agregado con éxito');

echo json_encode($response);
