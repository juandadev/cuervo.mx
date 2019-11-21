<?php
require '../private/config.php';
require '../php/database.php';

$con = connection($db_config);
$email = $_COOKIE['client'];

$client = searchClientInfo($con, $email);
$quiz = searchClientQuiz($con, $email);

$name = $client[0]['name_client'];
$age = $client[0]['age_client'];
$weight = $client[0]['weight_client'];
$height = $client[0]['height_client'];
$gender = $client[0]['gender_client'];
$birth = $client[0]['birth_client'];
$civil = $client[0]['civil_client'];
$ocupation = $client[0]['ocupation_client'];
$phone = $client[0]['phone_client'];
$q_01 = $quiz[0]['q_01'];
?>

<form action="" method="" id="quizForm01" class="quizForm01" onsubmit="insertClientData(event, this, 0)">
    <label for="name" class="label">Nombre:</label>
    <input type="text" id="name" class="name" placeholder="Nombre completo" autofocus required value="<?php echo $name == "" ? "" : $name; ?>">

    <label for="age" class="label">Edad:</label>
    <input type="number" id="age" class="input" min="0" max="99" placeholder="p. ej. 22" required value="<?php echo $age == 0 ? "" : (int) $age; ?>">

    <label for="weight" class="label">Peso (kg):</label>
    <input type="number" id="weight" class="input" min="0" max="200" placeholder="p. ej. 80" required value="<?php echo $weight == 0 ? "" : (int) $weight; ?>">

    <label for="height" class="label">Estatura (cm):</label>
    <input type="number" id="height" class="input" min="0" max="300" placeholder="p. ej. 170" required value="<?php echo $height == 0 ? "" : (int) $height; ?>">

    <div class="radioContainer">
        <label for="gender" class="label">Género:</label>

        <div class="radioOptions">
            <label for="male" class="input lblContainer">
                Hombre
                <input type="radio" name="gender" id="male" value="hombre" <?php echo $gender == 'hombre' ? 'checked' : ''; ?>>
                <span class="radio r01"></span>
            </label>

            <label for="female" class="input lblContainer">
                Mujer
                <input type="radio" name="gender" id="female" value="mujer" <?php echo $gender == 'mujer' ? 'checked' : ''; ?>>
                <span class="radio r01"></span>
            </label>

            <label for="other" class="input lblContainer">
                Otro
                <input type="radio" name="gender" id="other" value="otro" <?php echo $gender == 'otro' ? 'checked' : ''; ?>>
                <span class="radio r01"></span>
            </label>
        </div>
    </div>

    <label for="birth" class="label">Fecha de nacimiento:</label>
    <input type="date" id="birth" class="input" required value="<?php echo $birth == "" ? '' : $birth; ?>">

    <div class="radioContainer">
        <label for="civil" class="label">Estado civil:</label>

        <div class="radioOptions">
            <label for="single" class="input lblContainer">
                Soltero
                <input type="radio" name="civil" id="single" value="soltero" <?php echo $civil == 'soltero' ? 'checked' : ''; ?>>
                <span class="radio r01"></span>
            </label>

            <label for="married" class="input lblContainer">
                Casado
                <input type="radio" name="civil" id="married" value="casado" <?php echo $civil == 'casado' ? 'checked' : ''; ?>>
                <span class="radio r01"></span>
            </label>

            <label for="divorced" class="input lblContainer">
                Divorciado
                <input type="radio" name="civil" id="divorced" value="divorciado" <?php echo $civil == 'divorciado' ? 'checked' : ''; ?>>
                <span class="radio r01"></span>
            </label>

            <label for="widower" class="input lblContainer">
                Viudo
                <input type="radio" name="civil" id="widower" value="viudo" <?php echo $civil == 'viudo' ? 'checked' : ''; ?>>
                <span class="radio r01"></span>
            </label>

            <label for="other02" class="input lblContainer">
                Otro
                <input type="radio" name="civil" id="other02" value="otro" <?php echo $civil == 'otro' ? 'checked' : ''; ?>>
                <span class="radio r01"></span>
            </label>
        </div>
    </div>

    <label for="ocupation" class="label">Ocupación:</label>
    <input type="text" id="ocupation" class="input" placeholder="Especifique" required value="<?php echo $ocupation == "" ? '' : $ocupation; ?>">

    <label for="phone" class="label">Teléfono:</label>
    <input type="number" id="phone" class="input" min="0" max="9999999999" placeholder="p. ej. 6271234567" required value="<?php echo $phone == 0 ? "" : (double) $phone; ?>">

    <label for="q_01" class="label">Motivo de la consulta:</label>
    <textarea name="q_01" id="q_01" class="input" cols="30" rows="10" placeholder="Especifique" required><?php echo $q_01 == "" ? "" : $q_01; ?></textarea>

    <button type="submit" class="roundBtn btn06 b06-01 shadow">Guardar cambios</button>
</form>
