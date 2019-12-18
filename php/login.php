<?php
session_start();

if (isset($_POST['user']) && isset($_POST['password'])) {
    require '../private/config.php';
    require 'database.php';

    $con = connection($db_config);

    $user = strtolower(trim($_POST['user']));
    $pass = $_POST['password'];
    $pass_hashed = hash('sha512', $pass);
    $pass_hashed = substr($pass_hashed, 0, 50);

    $result = $con->query("SELECT * FROM users WHERE name_user = '$user' AND password_user = '$pass_hashed'");
    $userFinal = $result->fetchAll();

    if (empty($userFinal)) {
        header('Location: ../login.php?error=1');
    } else {
        $_SESSION['admin'] = $user;
        header('Location: ../admin.php');
    }
}
