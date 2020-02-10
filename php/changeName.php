<?php
session_start();

require '../private/config.php';
require 'database.php';

$con = connection($db_config);
$name = strtolower($_GET['n']);
$admin = $_GET['admin'];

$result = $con->query("SELECT id_user FROM users WHERE name_user = '$admin'");
$result->execute();
$idAdmin = $result->fetchAll();
$newId = $idAdmin[0][0];

$con->query("UPDATE users SET name_user = '$name' WHERE id_user = '$newId'");

session_destroy();
