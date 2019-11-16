<form action="#" method="post" id="quizForm01" class="quizForm01">
    <label for="name" class="label">Nombre:</label>
    <input type="text" id="name" class="name" placeholder="Nombre completo" autofocus required>

    <label for="age" class="label">Edad:</label>
    <input type="number" id="age" class="input" min="0" max="99" placeholder="p. ej. 22" required>

    <div class="radioContainer">
        <label for="gender" class="label">Sexo:</label>

        <div class="radioOptions">
            <label for="male" class="input lblContainer">
                Hombre
                <input type="radio" name="gender" id="male" value="hombre" checked>
                <span class="radio r01"></span>
            </label>

            <label for="female" class="input lblContainer">
                Mujer
                <input type="radio" name="gender" id="female" value="mujer">
                <span class="radio r01"></span>
            </label>
        </div>
    </div>

    <label for="birth" class="label">Fecha de nacimiento:</label>
    <input type="date" id="birth" class="input" required>

    <div class="radioContainer">
        <label for="civil" class="label">Estado civil:</label>

        <div class="radioOptions">
            <label for="single" class="input lblContainer">
                Soltero
                <input type="radio" name="civil" id="single" value="soltero" checked>
                <span class="radio r01"></span>
            </label>

            <label for="married" class="input lblContainer">
                Casado
                <input type="radio" name="civil" id="married" value="casado">
                <span class="radio r01"></span>
            </label>

            <label for="divorced" class="input lblContainer">
                Divorciado
                <input type="radio" name="civil" id="divorced" value="divorciado">
                <span class="radio r01"></span>
            </label>

            <label for="widower" class="input lblContainer">
                Viudo
                <input type="radio" name="civil" id="widower" value="viudo">
                <span class="radio r01"></span>
            </label>

            <label for="other02" class="input lblContainer">
                Otro
                <input type="radio" name="civil" id="other02" value="otro">
                <span class="radio r01"></span>
            </label>
        </div>
    </div>

    <label for="ocupation" class="label">Ocupación:</label>
    <select name="ocupation" id="ocupation" class="input">
        <option value="null" selected>Seleccionar</option>
    </select>

    <label for="phone" class="label">Teléfono:</label>
    <input type="number" id="phone" class="input" min="0" max="9999999999" placeholder="p. ej. 6271234567" required>

    <label for="q_01" class="label">Motivo de la consulta:</label>
    <textarea name="q_01" id="q_01" class="input" cols="30" rows="10" placeholder="Especifique" required></textarea>

    <button type="submit" class="roundBtn btn06 b06-01 shadow">Guardar cambios</button>
</form>
