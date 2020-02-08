<?php
session_start();

require 'private/config.php';
require 'php/database.php';

$stylesheet = 'admin';
$media = 'media-admin';
$admin = $_SESSION['admin'];

$con = connection($db_config);

if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_FILES)) {
    if ($_FILES['selectPic']['error'] > 0) {
        $error = 'Ha ocurrido un error al subir la imagen1';
    } else {
        $permission = array("image/jpg", "image/jpeg", "image/png");

        if (in_array($_FILES['selectPic']['type'], $permission)) {
            $fecha = date("dHi");
            $random = rand(10, 99);

            $route = "img/users/" . $fecha . $random . $_FILES['selectPic']['name'];

            if (!file_exists($route)) {
                $move = @move_uploaded_file($_FILES['selectPic']['tmp_name'], $route);

                if ($move) {
                    $image = $fecha . $random . $_FILES['selectPic']['name'];
                    loadImageProfile($con, $image, $admin);
                    $error = 'La imagen se ha cargado exitosamente!';
                    header('Location: admin.php');
                } else {
                    $error = 'Ha ocurrido un error al subir la imagen2';
                }
            } else {
                $error = $_FILES['selectPic']['name'] . ", este archivo ya existe";
            }
        } else {
            $error = 'Este tipo de archivo no está permitido';
        }
    }
}

if (isset($_SESSION['admin'])) {
    require 'views/head.view.php';
    require 'views/admin.view.php';
} else {
    header('Location: login.php');
}
