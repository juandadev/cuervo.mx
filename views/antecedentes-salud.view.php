<?php
require '../private/config.php';
require '../php/database.php';

$con = connection($db_config);
$email = $_COOKIE['client'];

$quiz = searchClientQuiz($con, $email);

$q_02 = $quiz[0]['q_02'];
$q_02_01 = $quiz[0]['q_02_01'];
$q_03 = $quiz[0]['q_03'];
$q_03_01 = $quiz[0]['q_03_01'];
$q_04 = $quiz[0]['q_04'];
$q_04_01 = $quiz[0]['q_04_01'];
$q_04_02 = $quiz[0]['q_04_02'];
$q_05 = $quiz[0]['q_05'];
$q_05_01 = $quiz[0]['q_05_01'];
?>

<form action="" method="" id="quizForm02" class="quizForm02" onsubmit="insertForm2(event, this, 1)">
    <div class="radioContainer">
        <label for="q_02" class="label">¿Padece alguna enfermedad diagnosticada?</label>

        <div class="radioOptions">
            <label for="r_02_01" class="input lblContainer" onclick="toogleOptionOn(this, 02)">
                Sí
                <input type="radio" name="q_02" id="r_02_01" value="1" <?php echo $q_02 == '1' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>

            <label for="r_02_02" class="input lblContainer" onclick="toogleOptionOff(this, 02)">
                No
                <input type="radio" name="q_02" id="r_02_02" value="0" <?php echo $q_02 == '0' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>
        </div>
    </div>

    <div id="op_02" class="optional hiddenOpt">
        <label for="q_02_01" class="label">¿Cuál?</label>
        <input type="text" id="q_02_01" class="input" placeholder="Especifique" value="<?php echo $q_02_01 == "" ? "" : $q_02_01; ?>">
    </div>

    <div class="radioContainer">
        <label for="q_03" class="label">¿Ha padecido alguna enfermedad importante?</label>

        <div class="radioOptions">
            <label for="r_03_01" class="input lblContainer" onclick="toogleOptionOn(this, 03)">
                Sí
                <input type="radio" name="q_03" id="r_03_01" value="1" <?php echo $q_03 == '1' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>

            <label for="r_03_02" class="input lblContainer" onclick="toogleOptionOff(this, 03)">
                No
                <input type="radio" name="q_03" id="r_03_02" value="0" <?php echo $q_03 == '0' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>
        </div>
    </div>

    <div id="op_03" class="optional hiddenOpt">
        <label for="q_03_01" class="label">¿Cuál?</label>
        <input type="text" id="q_03_01" class="input" placeholder="Especifique" value="<?php echo $q_03_01 == "" ? "" : $q_03_01; ?>">
    </div>

    <div class="radioContainer">
        <label for="q_04" class="label">¿Toma algún medicamento?</label>

        <div class="radioOptions">
            <label for="r_04_01" class="input lblContainer" onclick="toogleOptionOn(this, 04)">
                Sí
                <input type="radio" name="q_04" id="r_04_01" value="1" <?php echo $q_04 == '1' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>

            <label for="r_04_02" class="input lblContainer" onclick="toogleOptionOff(this, 04)">
                No
                <input type="radio" name="q_04" id="r_04_02" value="0" <?php echo $q_04 == '0' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>
        </div>
    </div>

    <div id="op_04" class="optional hiddenOpt">
        <label for="q_04_01" class="label">¿Cuál?</label>
        <input type="text" id="q_04_01" class="input" placeholder="Especifique" value="<?php echo $q_04_01 == "" ? "" : $q_04_01; ?>">

        <label for="q_04_02" class="label">Dosis:</label>
        <input type="text" id="q_04_02" class="input" placeholder="Cantidad" value="<?php echo $q_04_02 == "" ? "" : $q_04_02; ?>">
    </div>

    <div class="radioContainer">
        <label for="q_05" class="label">¿Le han practicado alguna cirugía?</label>

        <div class="radioOptions">
            <label for="r_05_01" class="input lblContainer" onclick="toogleOptionOn(this, 05)">
                Sí
                <input type="radio" name="q_05" id="r_05_01" value="1" <?php echo $q_05 == '1' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>

            <label for="r_05_02" class="input lblContainer" onclick="toogleOptionOff(this, 05)">
                No
                <input type="radio" name="q_05" id="r_05_02" value="0" <?php echo $q_05 == '0' ? 'checked' : ''; ?>>
                <span class="radio r02"></span>
            </label>
        </div>
    </div>

    <div id="op_05" class="optional hiddenOpt">
        <label for="q_05_01" class="label">¿De qué?</label>
        <input type="text" id="q_05_01" class="input" placeholder="Especifique" value="<?php echo $q_05_01 == "" ? "" : $q_05_01; ?>">
    </div>

    <div class="success"></div>

    <button type="submit" class="roundBtn btn06 b06-02 shadow">Guardar cambios</button>
</form>
