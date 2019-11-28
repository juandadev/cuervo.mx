<?php
require 'private/config.php';
require 'php/database.php';

$stylesheet = 'client';

$con = connection($db_config);
$id = $_GET['id'];

$data = searchAllData($con, $id);

require 'views/head.view.php';
?>

<body>
    <a href="admin.php" class="back">Regresar</a>

    <h1 id="h01">DATOS PERSONALES <i class="fas fa-plus"></i></h1>

    <div id="form01" class="container">
        <p class="question">Nombre:</p>
        <p class="name"><?php echo $data[0][1] ?></p>
        <p class="question">Edad:</p>
        <p><?php echo $data[0][2] ?></p>
        <p class="question">Peso:</p>
        <p><?php echo $data[0][3] ?>kg</p>
        <p class="question">Estatura:</p>
        <p><?php echo $data[0][4] ?>cm</p>
        <p class="question">Género:</p>
        <p><?php echo $data[0][5] ?></p>
        <p class="question">Fecha de nacimiento:</p>
        <p><?php echo $data[0][6] ?></p>
        <p class="question">Estado civil:</p>
        <p><?php echo $data[0][7] ?></p>
        <p class="question">Ocupación:</p>
        <p><?php echo $data[0][8] ?></p>
        <p class="question">Teléfono:</p>
        <p><?php echo $data[0][9] ?></p>
        <p class="question">Correo:</p>
        <p><?php echo $data[0][10] ?></p>
        <p class="question">Motivo de la consulta:</p>
        <p><?php echo $data[0][14] ?></p>
    </div>

    <h1 id="h02">ANTECEDENTES DE SALUD <i class="fas fa-plus"></i></h1>

    <div class="container hidden" id="form02">
        <p class="question">Padece alguna enfermedad diagnosticada?:</p>
        <p><?php echo $data[0][15] == 0 ? 'No' : 'Sí'; ?></p>
        <p class="question">Cuál?:</p>
        <p><?php echo $data[0][16] ?></p>
        <p class="question">Ha padecido alguna enfermedad importante?:</p>
        <p><?php echo $data[0][17] == 0 ? 'No' : 'Sí'; ?></p>
        <p class="question">Cuál?:</p>
        <p><?php echo $data[0][18] ?></p>
        <p class="question">Toma algún medicamento?:</p>
        <p><?php echo $data[0][19] == 0 ? 'No' : 'Sí'; ?></p>
        <p class="question">Cuál?:</p>
        <p><?php echo $data[0][20] ?></p>
        <p class="question">Dosis:</p>
        <p><?php echo $data[0][21] ?></p>
        <p class="question">Le han practicado alguna cirugía?:</p>
        <p><?php echo $data[0][22] == 0 ? 'No' : 'Sí'; ?></p>
        <p class="question">De qué?:</p>
        <p><?php echo $data[0][23] ?></p>
    </div>

    <h1 id="h03">ANTECEDENTES FAMILIARES <i class="fas fa-plus"></i></h1>

    <div id="form03" class="container hidden">
        <p class="question">Enfermedades de antecedentes familiares:</p>
        <p><?php echo $data[0][24] ?></p>
        <p class="question">Otra enfermedad no enlistada:</p>
        <p><?php echo $data[0][25] ?></p>
    </div>

    <h1 id="h04">ALIMENTOS Y DEPORTES <i class="fas fa-plus"></i></h1>

    <div id="form04" class="container hidden">
        <p class="question">Redacte los alimentos, platillos y bebidas que consumió hace 24 horas:</p>
        <p><?php echo $data[0][26] ?></p>
        <p class="question">Alimentos preferidos:</p>
        <p><?php echo $data[0][27] ?></p>
        <p class="question">Alimentos que no le agradan / no acostumbra:</p>
        <p><?php echo $data[0][28] ?></p>
        <p class="question">Alimentos que le causan malestar:</p>
        <p><?php echo $data[0][29] ?></p>
        <p class="question">Es alérgico o intolerante a algún alimento:</p>
        <p><?php echo $data[0][30] == 0 ? 'No' : 'Sí'; ?></p>
        <p class="question">A cuál?:</p>
        <p><?php echo $data[0][31] ?></p>
        <p class="question">Toma algún suplemento / medicamento?:</p>
        <p><?php echo $data[0][32] == 0 ? 'No' : 'Sí'; ?></p>
        <p class="question">Cuál?:</p>
        <p><?php echo $data[0][33] ?></p>
        <p class="question">Dosis:</p>
        <p><?php echo $data[0][34] ?></p>
        <p class="question">Por qué?:</p>
        <p><?php echo $data[0][35] ?></p>
        <p class="question">Practica algún tipo de deporte?:</p>
        <p><?php echo $data[0][36] == 0 ? 'No' : 'Sí'; ?></p>
        <p class="question">Cuáles?:</p>
        <p><?php echo $data[0][37] ?></p>
        <p class="question">Desde cuándo?:</p>
        <p><?php echo $data[0][38] ?></p>
        <p class="question">Tiene alguna lesión?:</p>
        <p><?php echo $data[0][39] == 0 ? 'No' : 'Sí'; ?></p>
        <p class="question">Cuál?:</p>
        <p><?php echo $data[0][40] ?></p>
    </div>

    <script src="js/client.js"></script>
</body>

</html>
