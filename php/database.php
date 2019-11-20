<?php
function connection($db_config) {
    try {
        $con = new PDO('mysql:host='.$db_config['host'].';dbname='.$db_config['database'].'', $db_config['user'], $db_config['pass']);
        return $con;
    } catch (PDOException $e) {
        echo "Error: ". $e->getMessage();
        return false;
    }
}

function insertMail($con, $mail) {
    $result = $con->query("INSERT INTO clients (mail_client) VALUES ('$mail')");
    return true;
}

function insertFk($con, $id) {
    $result = $con->query("INSERT INTO quiz (fk_id_client) VALUES ('$id')");
    return true;
}

function searchId($con, $mail) {
    $result = $con->query("SELECT id_client FROM clients WHERE mail_client = '$mail'");
    $result->execute();
    return $result->fetchAll();
}

function searchClientInfo($con, $mail) {
    $result = $con->query("SELECT * FROM clients WHERE mail_client = '$mail'");
    $result->execute();
    return $result->fetchAll();
}

function mailExists($con, $mail) {
    $result = $con->query("SELECT mail_client FROM clients WHERE mail_client = '$mail'");
    $result->execute();
    return $result->fetchAll();
}
?>
