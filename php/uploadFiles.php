<?php
require '../private/config.php';
require 'database.php';

$con = connection($db_config);
$id = $_POST['client'];
print_r($_FILES['routine']);
echo '<br>';
print_r($_FILES['diet']);
$logs = [];

if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_FILES)) {
    if ($_FILES['routine']['error'] > 0 && $_FILES['diet']['error'] > 0) {
        $logs = [
            'error' => 'Ha ocurrido un error al subir el archivo'
        ];
    } else if ($_FILES['routine']['error'] == 0) {
        $permission = array("application/pdf");

        if (in_array($_FILES['routine']['type'], $permission)) {
            $date = date("dHi");
            $random = rand(10, 99);

            $route = "../docs/" . $date . $random . $id . $_FILES['routine']['name'];

            if (!file_exists($route)) {
                $move = @move_uploaded_file($_FILES['routine']['tmp_name'], $route);

                if ($move) {
                    $file = $date . $random . $id . $_FILES['routine']['name'];
                    loadRoutine($con, $file, $id);
                    $logs = [
                        'success' => 'El archivo se ha cargado exitosamente!'
                    ];
                } else {
                    $logs = [
                        'error' => 'Ha ocurrido un error al subir el archivo'
                    ];
                }
            } else {
                $logs = [
                    'error' => $_FILES['diet']['name'] . ", este archivo ya existe"
                ];
            }
        } else {
            $logs = [
                'error' => 'Este tipo de archivo no está permitido'
            ];
        }
    } else {
        $permission = array("application/pdf");

        if (in_array($_FILES['diet']['type'], $permission)) {
            $date = date("dHi");
            $random = rand(10, 99);

            $route = "../docs/" . $date . $random . $id . $_FILES['diet']['name'];

            if (!file_exists($route)) {
                $move = @move_uploaded_file($_FILES['diet']['tmp_name'], $route);

                if ($move) {
                    $file = $date . $random . $id . $_FILES['diet']['name'];
                    loadDiet($con, $file, $id);
                    $logs = [
                        'success' => 'El archivo se ha cargado exitosamente!'
                    ];
                } else {
                    $logs = [
                        'error' => 'Ha ocurrido un error al subir el archivo'
                    ];
                }
            } else {
                $logs = [
                    'error' => $_FILES['diet']['name'] . ", este archivo ya existe"
                ];
            }
        } else {
            $logs = [
                'error' => 'Este tipo de archivo no está permitido'
            ];
        }
    }
}

header('Location: ../client.php?id=' . $id);
