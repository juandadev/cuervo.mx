<?php
require '../private/config.php';
require 'database.php';

//echo '<a href="../quiz.php">Regresar</a>';

$con = connection($db_config);

//Store variables
$mail = $_POST['mail'];
//echo $mail;

if (mailExists($con, $mail) == true) {
    //echo 'el mail ya existe';
    setcookie('client', $mail, time() + (86400 * 30), "/");
    header("Location: ../quiz.php");
} else {
    //echo 'el mail no existe';
    insertMail($con, $mail);
    $id = searchId($con, $mail);
    $id = $id[0]['id_client'];
    insertFk($con, $id);
    setcookie('client', $mail, time() + (86400 * 30), "/");
    header("Location: ../quiz.php");
}
