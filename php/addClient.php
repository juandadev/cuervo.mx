<?php
require '../private/config.php';
require 'database.php';

$con = connection($db_config);

$statement = $con->query("SELECT id_client FROM clients ORDER BY id_client DESC LIMIT 1");
$statement->execute();
$lastId = $statement->fetchAll();
$lastId = $lastId[0][0];

$mail = 'guest' . $lastId . rand(0, 100) . '@cuervonutrition.com';

$statement = $con->query("INSERT INTO clients(mail_client) VALUES ('$mail')");
$statement->execute();

$statement = $con->query("SELECT id_client FROM clients WHERE mail_client = '$mail'");
$statement->execute();
$newId = $statement->fetchAll();
$newId = $newId[0][0];

$statement = $con->query("INSERT INTO quiz(fk_id_client) VALUES ('$newId')");
$statement->execute();

echo $newId;
