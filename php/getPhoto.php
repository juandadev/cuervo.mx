<?php
require '../private/config.php';
require 'database.php';

$con = connection($db_config);

if (isset($_GET['admin'])) {
    $user = $_GET['admin'];

    $statement = $con->query("SELECT photo FROM users WHERE name_user = '$user'");
    $statement->execute();
    $photo = $statement->fetchAll();

    echo $photo[0][0];
}