<?php
session_start();

if (isset($_SESSION['admin']) != true) {
    header('Location: login.php');
}

require 'private/config.php';
require 'php/database.php';

$stylesheet = 'client';
$media = 'media-client';
$con = connection($db_config);

$id = $_GET['id'];

$data = searchAllData($con, $id);
$files = searchFiles($con, $id);
$isEmpty = empty($data);

if ($isEmpty != 1) {
    $position = strpos($data[0][1], ' ');
    $firstN = substr($data[0][1], 0, $position);
    $secondN = substr($data[0][1], $position + 1, strlen($data[0][1]));
    $secondN = strpos($secondN, ' ');
    $secondN = substr($data[0][1], $position + 1, $secondN);
} else if ($isEmpty == 1) {
    $statement = $con->query("SELECT mail_client FROM clients WHERE id_client = '$id'");
    $statement->execute();
    $mailClient = $statement->fetchAll();
    $mailClient = $mailClient[0][0];
}

require 'views/head.view.php';
?>

<body>
    <header>
        <i class="fas fa-chevron-left" id="back"></i>
    </header>

    <main>
        <div class="profile">
            <div class="picProfile" id="picProfile">
                <img src="https://ui-avatars.com/api/?name=
                <?php
                if ($isEmpty != 1) {
                    echo $firstN . '+' . $secondN;
                }
                ?>
                &size=255&background=a1a1a1&color=fff" alt="
                <?php
                if ($isEmpty != 1) {
                    echo $data[0][1];
                }
                ?>">
            </div>

            <h1 id="clientName">
                <?php
                if ($isEmpty != 1) {
                    echo $data[0][1];
                }
                ?>
            </h1>

            <p id="mailC"><?php echo $data[0][10] ?></p>

            <div class="sub">
                <p><?php echo ucfirst($data[0][5]) ?></p>

                <p><?php echo $data[0][2] ?> años</p>
            </div>

            <div class="sub">
                <p><?php echo $data[0][3] . ' ' ?>kg</p>

                <p><?php echo $data[0][4] . ' ' ?>cm</p>
            </div>

            <div class="contactClient">
                <i class="far fa-envelope" id="mail"></i>

                <i class="fab fa-whatsapp" id="wp"></i>

                <i id="change" class="
                <?php
                if (isset($_GET['edit'])) {
                    echo 'fas fa-eye';
                } else {
                    echo 'fas fa-edit';
                }
                ?>
                "></i>
            </div>
        </div>

        <div class="menu">
            <ul>
                <li id="h01" class="current">Datos personales</li>
                <li id="h02">Antecedentes de salud</li>
                <li id="h03">Antecedentes familiares</li>
                <li id="h04">Alimentos y deportes</li>
                <li id="h05">Archivos</li>
            </ul>
        </div>

        <div class="content">
            <div class="success01 hidden" id="success"></div>

            <div class="error hidden" id="error"></div>

            <div id="form01" class="container">
                <?php if (isset($_GET['edit'])) { ?>
                    <?php include('views/datos-personales.view.php'); ?>
                <?php } else { ?>
                    <p class="question">Fecha de nacimiento:</p>
                    <p><?php echo $data[0][6] ?></p>
                    <p class="question">Estado civil:</p>
                    <p><?php echo ucfirst($data[0][7]) ?></p>
                    <p class="question">Ocupación:</p>
                    <p><?php echo $data[0][8] ?></p>
                    <p class="question">Teléfono:</p>
                    <p><?php echo $data[0][9] ?></p>
                    <p class="question">Motivo de la consulta:</p>
                    <p><?php echo $data[0][14] ?></p>
                <?php } ?>
            </div>

            <div class="container hidden" id="form02">
                <?php if (isset($_GET['edit'])) { ?>
                    <?php include('views/antecedentes-salud.view.php'); ?>
                <?php } else { ?>
                    <p class="question">Padece alguna enfermedad diagnosticada?:</p>
                    <p><?php echo $data[0][15] == 0 ? 'No' : 'Sí'; ?></p>
                    <p class="question">Cuál?:</p>
                    <p><?php echo $data[0][16] == '' ? '-' : $data[0][16] ?></p>
                    <p class="question">Ha padecido alguna enfermedad importante?:</p>
                    <p><?php echo $data[0][17] == 0 ? 'No' : 'Sí'; ?></p>
                    <p class="question">Cuál?:</p>
                    <p><?php echo $data[0][18]  == '' ? '-' : $data[0][18] ?></p>
                    <p class="question">Toma algún medicamento?:</p>
                    <p><?php echo $data[0][19] == 0 ? 'No' : 'Sí'; ?></p>
                    <p class="question">Cuál?:</p>
                    <p><?php echo $data[0][20]  == '' ? '-' : $data[0][20] ?></p>
                    <p class="question">Dosis:</p>
                    <p><?php echo $data[0][21]  == '' ? '-' : $data[0][21] ?></p>
                    <p class="question">Le han practicado alguna cirugía?:</p>
                    <p><?php echo $data[0][22] == 0 ? 'No' : 'Sí'; ?></p>
                    <p class="question">De qué?:</p>
                    <p><?php echo $data[0][23]  == '' ? '-' : $data[0][23] ?></p>
                <?php } ?>
            </div>

            <div id="form03" class="container hidden">
                <?php if (isset($_GET['edit'])) { ?>
                    <?php include('views/antecedentes-familiares.view.php'); ?>
                <?php } else { ?>
                    <p class="question">Enfermedades de antecedentes familiares:</p>
                    <p><?php $format = str_replace(',', '<br> ', $data[0][24]);
                        echo ucwords($format); ?></p>
                    <p class="question">Otra enfermedad no enlistada:</p>
                    <p><?php echo $data[0][25]  == '' ? '-' : $data[0][25] ?></p>
                <?php } ?>
            </div>

            <div id="form04" class="container hidden">
                <?php if (isset($_GET['edit'])) { ?>
                    <?php include('views/alimentos-deportes.view.php'); ?>
                <?php } else { ?>
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
                    <p><?php echo $data[0][31]  == '' ? '-' : $data[0][31] ?></p>
                    <p class="question">Toma algún suplemento / medicamento?:</p>
                    <p><?php echo $data[0][32] == 0 ? 'No' : 'Sí'; ?></p>
                    <p class="question">Cuál?:</p>
                    <p><?php echo $data[0][33]  == '' ? '-' : $data[0][33] ?></p>
                    <p class="question">Dosis:</p>
                    <p><?php echo $data[0][34]  == '' ? '-' : $data[0][34] ?></p>
                    <p class="question">Por qué?:</p>
                    <p><?php echo $data[0][35]  == '' ? '-' : $data[0][35] ?></p>
                    <p class="question">Practica algún tipo de deporte?:</p>
                    <p><?php echo $data[0][36] == 0 ? 'No' : 'Sí'; ?></p>
                    <p class="question">Cuáles?:</p>
                    <p><?php echo $data[0][37]  == '' ? '-' : $data[0][37] ?></p>
                    <p class="question">Desde cuándo?:</p>
                    <p><?php echo $data[0][38]  == '' ? '-' : $data[0][38] ?></p>
                    <p class="question">Tiene alguna lesión?:</p>
                    <p><?php echo $data[0][39] == 0 ? 'No' : 'Sí'; ?></p>
                    <p class="question">Cuál?:</p>
                    <p><?php echo $data[0][40]  == '' ? '-' : $data[0][40] ?></p>
                <?php } ?>
            </div>

            <div id="form05" class="container hidden">
                <form method="POST"  action="php/uploadFiles.php" enctype="multipart/form-data">
                    <p>Rutina</p>
                    <embed class="files" src="<?php if ($files[0][1] != "") {
                                                    echo 'docs/' . $files[0][1];
                                                } ?>" />
                    <input type="file" name="routine" id="routine">

                    <button class="roundBtn" type="submit">Guardar</button>

                    <a href="<?php if ($files[0][1] != "") {
                                    echo 'docs/' . $files[0][1];
                                } ?>">Descargar rutina</a>

                    <p>Dieta</p>
                    <embed class="files" src="<?php if ($files[0][2] != "") {
                                                    echo 'docs/' . $files[0][2];
                                                } ?>" />
                    <input type="file" name="diet" id="diet">

                    <input type="text" class="hidden" name="client" id="client" value="<?php echo $_GET['id']; ?>">

                    <button class="roundBtn" type="submit">Guardar</button>

                    <a href="<?php if ($files[0][2] != "") {
                                    echo 'docs/' . $files[0][2];
                                } ?>">Descargar dieta</a>
                </form>
            </div>
        </div>
    </main>

    <script>
        var clientPhone = '<?php if ($isEmpty != 1) {
                                echo $data[0][9];
                            } ?>';
        var clientMail = '<?php if ($isEmpty != 1) {
                                echo $data[0][10];
                            } else if ($isEmpty == 1) {
                                echo $mailClient;
                            } ?>';
        var clientId = '<?php echo $_GET['id']; ?>';
    </script>
    <script src="private/config.js"></script>
    <script type="text/javascript" language="javascript">
        var versionUpdate = (new Date()).getTime();
        var admin = document.createElement("script");

        setScript(admin, 'client');
    </script>
</body>

</html>