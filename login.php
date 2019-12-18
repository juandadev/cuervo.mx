<?php
session_start();

require 'private/config.php';
require 'php/database.php';

$stylesheet = 'login';
$media = 'media-login';

if (isset($_SESSION['admin'])) {
    header('Location: admin.php');
} else {
    require 'views/head.view.php';
    require 'views/login.view.php';
}
