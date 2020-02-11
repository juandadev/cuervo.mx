<?php
require 'private/config.php';
require 'php/database.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

$stylesheet = 'success';
$media = 'media-success';
$con = connection($db_config);
$mailClient = $_COOKIE['client'];

$result = $con->query("SELECT name_client, id_client FROM clients WHERE mail_client = '$mailClient'");
$result->execute();
$clientName = $result->fetchAll();
$idClient = $clientName[0][1];
$clientNameF = $clientName[0][0];

//Send mail confirmation
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->setLanguage('es', 'PHPMailer/language/phpmailer.lang-es.php');
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = $mail_config['username'];                     // SMTP username
    $mail->Password   = $mail_config['password'];                               // SMTP password
    $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('contacto@cuervonutrition.com', 'Cuervo Nutrition');
    $mail->addAddress('jdmartinez@itparral.edu.mx');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "Cliente registrado 0$idClient";
    $mail->Body    = "El cliente <b>$clientNameF</b> se ha registrado en la plataforma!";
    $mail->AltBody = "El cliente $clientNameF se ha registrado en la plataforma!";

    $mail->send();
    //echo 'Message has been sent';
} catch (Exception $e) {
    echo "El mensaje no pudo ser enviado. Mailer Error: {$mail->ErrorInfo}";
}

require 'views/head.view.php';
require 'views/success.view.php';
