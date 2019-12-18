<?php
session_start();

require 'private/config.php';
require 'php/database.php';

$stylesheet = 'admin';
$media = 'media-admin';

if (isset($_SESSION['admin'])) {
    require 'views/head.view.php';
    require 'views/admin.view.php';
} else {
    header('Location: login.php');
}
