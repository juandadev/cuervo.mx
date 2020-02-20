<?php
require '../private/config.php';
require 'database.php';

$con = connection($db_config);
if(isset($_POST['mail'])) {
    $email = $_POST['mail'];
} else {
    $email = $_COOKIE['client'];
}
$id_client = mailExists($con, $email);
$id_client = $id_client[0]['id_client'];

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $weight = $_POST['weight'];
    $height = $_POST['height'];
    $gender = $_POST['gender'];
    $birth = $_POST['birth'];
    $civil = $_POST['civil'];
    $ocupation = $_POST['ocupation'];
    $phone = $_POST['phone'];
    $q_01 = $_POST['q_01'];


    insertClientData($con, $name, $age, $weight, $height, $gender, $birth, $civil, $ocupation, $phone, $id_client);
    insertForm1($con, $q_01, $id_client);
} else if (isset($_POST['q_02'])) {
    $q_02 = (int) $_POST['q_02'];
    $q_02_01 = $_POST['q_02_01'];
    $q_03 = (int) $_POST['q_03'];
    $q_03_01 = $_POST['q_03_01'];
    $q_04 = (int) $_POST['q_04'];
    $q_04_01 = $_POST['q_04_01'];
    $q_04_02 = $_POST['q_04_02'];
    $q_05 = (int) $_POST['q_05'];
    $q_05_01 = $_POST['q_05_01'];
    
    insertForm2($con, $q_02, $q_02_01, $q_03, $q_03_01, $q_04, $q_04_01, $q_04_02, $q_05, $q_05_01, $id_client);
} else if (isset($_POST['q_0601']) || isset($_POST['q_0602']) || isset($_POST['q_0603']) || isset($_POST['q_0604']) || isset($_POST['q_0605']) || isset($_POST['q_0606']) || isset($_POST['q_0607']) || isset($_POST['q_0608'])) {
    $q_0601 = $_POST['q_0601'];
    $q_0602 = $_POST['q_0602'];
    $q_0603 = $_POST['q_0603'];
    $q_0604 = $_POST['q_0604'];
    $q_0605 = $_POST['q_0605'];
    $q_0606 = $_POST['q_0606'];
    $q_0607 = $_POST['q_0607'];
    $q_0608 = $_POST['q_0608'];
    $q_06 = "";
    $check = array();
    
    $data = array($q_0601, $q_0602, $q_0603, $q_0604, $q_0605, $q_0606, $q_0607, $q_0608);
    
    for ($i = 0; $i < 8; $i++) {
        if ($data[$i] == !null) {
            array_push($check, $data[$i]);
        }
    }

    for ($i = 0; $i < count($check); $i++) {
        $q_06 .= $check[$i] . ',';
    }
    
    if ($q_06 == null && $q_06_01 == null) {
        $q_06 = 'ninguna';
    }
    
    $q_06_01 = $_POST['q_06_01'];
    
    insertForm3($con, $q_06, $q_06_01, $id_client);
} else if (isset($_POST['q_07'])) {
    $q_07 = $_POST['q_07'];
    $q_08 = $_POST['q_08'];
    $q_09 = $_POST['q_09'];
    $q_010 = $_POST['q_010'];
    $q_011 = (int) $_POST['q_011'];
    $q_011_01 = $_POST['q_011_01'];
    $q_012 = (int) $_POST['q_012'];
    $q_012_01 = $_POST['q_012_01'];
    $q_012_02 = $_POST['q_012_02'];
    $q_012_03 = $_POST['q_012_03'];
    $q_013 = (int) $_POST['q_013'];
    $q_013_01 = $_POST['q_013_01'];
    $q_013_02 = $_POST['q_013_02'];
    $q_014 = (int) $_POST['q_014'];
    $q_014_01 = $_POST['q_014_01'];
    
    insertForm4($con, $q_07, $q_08, $q_09, $q_010, $q_011, $q_011_01, $q_012, $q_012_01, $q_012_02, $q_012_03, $q_013, $q_013_01, $q_013_02, $q_014, $q_014_01, $id_client);
}
?>
