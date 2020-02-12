<?php
require '../private/config.php';
require 'database.php';

$con = connection($db_config);
$id = $_GET['id'];

$result = $con->query("DELETE FROM clients WHERE id_client = '$id'");
$result->execute();
