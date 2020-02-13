<?php
session_start();

require '../private/config.php';
require 'database.php';

$con = connection($db_config);
$newPass = $_GET['n'];
$confirmPass = $_GET['c'];
$admin = $_GET['admin'];
$response = [];

if ($admin == $_SESSION['admin']) {
    if ($newPass == $confirmPass) {
        $pass_hashed = hash('sha512', $newPass);

        $con->query("UPDATE users SET password_user = '$pass_hashed' WHERE name_user = '$admin'");
    } else {
        array_push($response, 'error');
        array_push($response, 'Las contraseñas no coinciden');
    }
} else {
    array_push($response, 'error');
    array_push($response, 'No tienes permiso para cambiar la contraseña de este usuario');
}

echo json_encode($response);
