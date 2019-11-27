<?php
require '../private/config.php';
require '../php/database.php';

$con = connection($db_config);
$email = $_COOKIE['client'];

$quiz = searchClientQuiz($con, $email);

$q_06 = $quiz[0]['q_06'];
$q_06_01 = $quiz[0]['q_06_01'];
$q_06_opt = array();
$count = substr_count($q_06, ',');

for ($i = 0; $i < $count; $i++) {
    $position = strpos($q_06, ',');
    array_push($q_06_opt, substr($q_06, 0, $position));
    $q_06 = str_replace($q_06_opt[$i] . ',', "", $q_06);
}

array_push($q_06_opt, $q_06);
?>

<form action="" method="" id="quizForm03" class="quizForm01" onsubmit="insertForm3(event, this, 2)">
    <div class="radioContainer">
        <label for="q_06" class="label">Marque las enfermedades:</label>

        <div class="radioOptions checkOptions">
            <label for="ch_06_01" class="input lblContainer">
                Obesidad
                <input type="checkbox" name="q_06" id="ch_06_01" value="obesidad" <?php for ($i = 0; $i < count($q_06_opt); $i++) { if ($q_06_opt[$i] == 'obesidad') { echo 'checked'; } } ?>>
                <span class="checkmark r01"></span>
            </label>

            <label for="ch_06_02" class="input lblContainer">
                Diabetes
                <input type="checkbox" name="q_06" id="ch_06_02" value="diabetes" <?php for ($i = 0; $i < count($q_06_opt); $i++) { if ($q_06_opt[$i] == 'diabetes') { echo 'checked'; } } ?>>
                <span class="checkmark r01"></span>
            </label>

            <label for="ch_06_03" class="input lblContainer">
                HTA (Hipertensión arterial)
                <input type="checkbox" name="q_06" id="ch_06_03" value="hta" <?php for ($i = 0; $i < count($q_06_opt); $i++) { if ($q_06_opt[$i] == 'hta') { echo 'checked'; } } ?>>
                <span class="checkmark r01"></span>
            </label>

            <label for="ch_06_04" class="input lblContainer">
                Cáncer
                <input type="checkbox" name="q_06" id="ch_06_04" value="cancer" <?php for ($i = 0; $i < count($q_06_opt); $i++) { if ($q_06_opt[$i] == 'cancer') { echo 'checked'; } } ?>>
                <span class="checkmark r01"></span>
            </label>

            <label for="ch_06_05" class="input lblContainer">
                Hipercolesterolemia
                <input type="checkbox" name="q_06" id="ch_06_05" value="hipercolesterolemia" <?php for ($i = 0; $i < count($q_06_opt); $i++) { if ($q_06_opt[$i] == 'hipercolesterolemia') { echo 'checked'; } } ?>>
                <span class="checkmark r01"></span>
            </label>

            <label for="ch_06_06" class="input lblContainer">
                Hipertrigliceridemia
                <input type="checkbox" name="q_06" id="ch_06_06" value="hipertrigliceridemia" <?php for ($i = 0; $i < count($q_06_opt); $i++) { if ($q_06_opt[$i] == 'hipertrigliceridemia') { echo 'checked'; } } ?>>
                <span class="checkmark r01"></span>
            </label>

            <label for="ch_06_07" class="input lblContainer">
                Hipotiroidismo
                <input type="checkbox" name="q_06" id="ch_06_07" value="hipotiroidismo" <?php for ($i = 0; $i < count($q_06_opt); $i++) { if ($q_06_opt[$i] == 'hipotiroidismo') { echo 'checked'; } } ?>>
                <span class="checkmark r01"></span>
            </label>

            <label for="ch_06_08" class="input lblContainer">
                Ninguna
                <input type="checkbox" name="q_06" id="ch_06_08" value="ninguna" <?php for ($i = 0; $i < count($q_06_opt); $i++) { if ($q_06_opt[$i] == 'ninguna') { echo 'checked'; } } ?>>
                <span class="checkmark r01"></span>
            </label>
        </div>
    </div>

    <label for="q_06_01" class="label">Otra:</label>
    <input type="text" id="q_06_01" class="input" placeholder="Especifique" value="<?php echo $q_06_01 == "" ? "" : $q_06_01; ?>">

    <div class="success"></div>

    <button type="submit" class="roundBtn btn06 b06-01 shadow">Guardar cambios</button>
</form>
