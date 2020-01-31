<?php
require '../private/config.php';
require '../php/database.php';

$con = connection($db_config);
$email = $_COOKIE['client'];

$quiz = searchClientQuiz($con, $email);

$q_07 = $quiz[0]['q_07'];
$q_08 = $quiz[0]['q_08'];
$q_09 = $quiz[0]['q_09'];
$q_010 = $quiz[0]['q_010'];
$q_011 = $quiz[0]['q_011'];
$q_011_01 = $quiz[0]['q_011_01'];
$q_012 = $quiz[0]['q_012'];
$q_012_01 = $quiz[0]['q_012_01'];
$q_012_02 = $quiz[0]['q_012_02'];
$q_012_03 = $quiz[0]['q_012_03'];
$q_013 = $quiz[0]['q_013'];
$q_013_01 = $quiz[0]['q_013_01'];
$q_013_02 = $quiz[0]['q_013_02'];
$q_014 = $quiz[0]['q_014'];
$q_014_01 = $quiz[0]['q_014_01'];
?>

<form action="" method="" id="quizForm04" class="quizForm02" onsubmit="insertForm4(event, this, 3)">
    <label for="q_07" class="label">Redacte los alimentos, platillos y bebidas que consumió hace 24 horas:</label>
    <textarea name="q_07" id="q_07" class="input" cols="30" rows="10" placeholder="p. ej. 9:00 am - Huevos revueltos y jugo de naranja    
          2:00 pm Filete de pescado y coca-cola, etc." autofocus required><?php echo $q_07 == "" ? "" : $q_07; ?></textarea>

    <label for="q_08" class="label">Alimentos preferidos:</label>
    <input type="text" id="q_08" class="input" placeholder="Especifique" required value="<?php echo $q_08 == "" ? "" : $q_08; ?>">

    <label for="q_09" class="label">Alimentos que no le agradan / no acostumbra:</label>
    <input type="text" id="q_09" class="input" placeholder="Especifique" required value="<?php echo $q_09 == "" ? "" : $q_09; ?>">

    <label for="q_010" class="label">Alimentos que le causan malestar:</label>
    <input type="text" id="q_010" class="input" placeholder="Especifique" required value="<?php echo $q_010 == "" ? "" : $q_010; ?>">

    <div class="radioContainer">
        <label for="q_011" class="label">¿Es alérgico o intolerante a algún alimento?</label>

        <div class="radioOptions">
            <label for="r_011_01" class="input lblContainer" onclick="toogleOptionOn(this, 11)">
                Sí
                <input type="radio" name="q_011" id="r_011_01" value="1" <?php echo $q_011 == '1' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>

            <label for="r_011_02" class="input lblContainer" onclick="toogleOptionOff(this, 11)">
                No
                <input type="radio" name="q_011" id="r_011_02" value="0" <?php echo $q_011 == '0' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>
        </div>
    </div>

    <div id="op_011" class="optional hiddenOpt">
        <label for="q_011_01" class="label">¿A cuál?</label>
        <input type="text" id="q_011_01" class="input" placeholder="Especifique" value="<?php echo $q_011_01 == "" ? "" : $q_011_01; ?>">
    </div>

    <div class="radioContainer">
        <label for="q_012" class="label">¿Toma algún suplemento / complemento?</label>

        <div class="radioOptions">
            <label for="r_012_01" class="input lblContainer" onclick="toogleOptionOn(this, 12)">
                Sí
                <input type="radio" name="q_012" id="r_012_01" value="1" <?php echo $q_012 == '1' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>

            <label for="r_012_02" class="input lblContainer" onclick="toogleOptionOff(this, 12)">
                No
                <input type="radio" name="q_012" id="r_012_02" value="0" <?php echo $q_012 == '0' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>
        </div>
    </div>

    <div id="op_012" class="optional hiddenOpt">
        <label for="q_012_01" class="label">¿Cuál?</label>
        <input type="text" id="q_012_01" class="input" placeholder="Especifique" value="<?php echo $q_012_01 == "" ? "" : $q_012_01; ?>">

        <label for="q_012_02" class="label">Dosis:</label>
        <input type="text" id="q_012_02" class="input" placeholder="Cantidad" value="<?php echo $q_012_02 == "" ? "" : $q_012_02; ?>">

        <label for="q_012_03" class="label">¿Por qué?</label>
        <input type="text" id="q_012_03" class="input" placeholder="Especifique" value="<?php echo $q_012_03 == "" ? "" : $q_012_03; ?>">
    </div>

    <div class="radioContainer">
        <label for="q_013" class="label">¿Practica algún tipo de deporte?</label>

        <div class="radioOptions">
            <label for="r_013_01" class="input lblContainer" onclick="toogleOptionOn(this, 13)">
                Sí
                <input type="radio" name="q_013" id="r_013_01" value="1" <?php echo $q_013 == '1' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>

            <label for="r_013_02" class="input lblContainer" onclick="toogleOptionOff(this, 13)">
                No
                <input type="radio" name="q_013" id="r_013_02" value="0" <?php echo $q_013 == '0' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>
        </div>
    </div>

    <div id="op_013" class="optional hiddenOpt">
        <label for="q_013_01" class="label">¿Cuáles?</label>
        <input type="text" id="q_013_01" class="input" placeholder="Especifique" value="<?php echo $q_013_01 == "" ? "" : $q_013_01; ?>">

        <label for="q_013_02" class="label">¿Desde cuándo?</label>
        <input type="text" id="q_013_02" class="input" placeholder="Especifique" value="<?php echo $q_013_02 == "" ? "" : $q_013_02; ?>">
    </div>

    <div class="radioContainer">
        <label for="q_014" class="label">¿Tiene alguna lesión?</label>

        <div class="radioOptions">
            <label for="r_014_01" class="input lblContainer" onclick="toogleOptionOn(this, 14)">
                Sí
                <input type="radio" name="q_014" id="r_014_01" value="1" <?php echo $q_014 == '1' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>

            <label for="r_014_02" class="input lblContainer" onclick="toogleOptionOff(this, 14)">
                No
                <input type="radio" name="q_014" id="r_014_02" value="0" <?php echo $q_014 == '0' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>
        </div>
    </div>

    <div id="op_014" class="optional hiddenOpt">
        <label for="q_014_01" class="label">¿Cuál?</label>
        <input type="text" id="q_014_01" class="input" placeholder="Especifique" value="<?php echo $q_014_01 == "" ? "" : $q_014_01; ?>">
    </div>

    <div class="success"></div>

    <button type="submit" class="roundBtn btn06 b06-02 shadow">Guardar cambios</button>
</form>
