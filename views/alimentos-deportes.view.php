<form action="#" method="post" id="quizForm04" class="quizForm02">
    <label for="q_07" class="label">Redacte los alimentos, platillos y bebidas que consumió hace 24 horas:</label>
    <textarea name="q_07" id="q_07" class="input" cols="30" rows="10" placeholder="p. ej. 9:00 am - Huevos revueltos y jugo de naranja    
          2:00 pm Filete de pescado y coca-cola, etc." autofocus required></textarea>

    <label for="q_08" class="label">Alimentos preferidos:</label>
    <input type="text" id="q_08" class="input" placeholder="Especifique" required>

    <label for="q_09" class="label">Alimentos que no le agradan / no acostumbra:</label>
    <input type="text" id="q_09" class="input" placeholder="Especifique" required>

    <label for="q_010" class="label">Alimentos que le causan malestar:</label>
    <input type="text" id="q_010" class="input" placeholder="Especifique" required>

    <div class="radioContainer">
        <label for="q_011" class="label">¿Es alérgico o intolerante a algún alimento?</label>

        <div class="radioOptions">
            <label for="r_011_01" class="input lblContainer" onclick="toogleOptionOn(this, 11)">
                Sí
                <input type="radio" name="q_011" id="r_011_01" value="1">
                <span class="radio r02"></span>
            </label>

            <label for="r_011_02" class="input lblContainer" onclick="toogleOptionOff(this, 11)">
                No
                <input type="radio" name="q_011" id="r_011_02" value="0" checked>
                <span class="radio r02"></span>
            </label>
        </div>
    </div>

    <div id="op_011" class="optional hiddenOpt">
        <label for="q_011_01" class="label">¿A cuál?</label>
        <input type="text" id="q_011_01" class="input" placeholder="Especifique">
    </div>

    <div class="radioContainer">
        <label for="q_012" class="label">¿Toma algún suplemento / complemento?</label>

        <div class="radioOptions">
            <label for="r_012_01" class="input lblContainer" onclick="toogleOptionOn(this, 12)">
                Sí
                <input type="radio" name="q_012" id="r_012_01" value="1">
                <span class="radio r02"></span>
            </label>

            <label for="r_012_02" class="input lblContainer" onclick="toogleOptionOff(this, 12)">
                No
                <input type="radio" name="q_012" id="r_012_02" value="0" checked>
                <span class="radio r02"></span>
            </label>
        </div>
    </div>

    <div id="op_012" class="optional hiddenOpt">
        <label for="q_012_01" class="label">¿Cuál?</label>
        <input type="text" id="q_012_01" class="input" placeholder="Especifique">

        <label for="q_012_02" class="label">Dosis:</label>
        <input type="text" id="q_012_02" class="input" placeholder="Cantidad">

        <label for="q_012_03" class="label">¿Por qué?</label>
        <input type="text" id="q_012_03" class="input" placeholder="Especifique">
    </div>

    <div class="radioContainer">
        <label for="q_013" class="label">¿Practica algún tipo de deporte?</label>

        <div class="radioOptions">
            <label for="r_013_01" class="input lblContainer" onclick="toogleOptionOn(this, 13)">
                Sí
                <input type="radio" name="q_013" id="r_013_01" value="1">
                <span class="radio r02"></span>
            </label>

            <label for="r_013_02" class="input lblContainer" onclick="toogleOptionOff(this, 13)">
                No
                <input type="radio" name="q_013" id="r_013_02" value="0" checked>
                <span class="radio r02"></span>
            </label>
        </div>
    </div>

    <div id="op_013" class="optional hiddenOpt">
        <label for="q_013_01" class="label">¿Cuáles?</label>
        <input type="text" id="q_013_01" class="input" placeholder="Especifique">

        <label for="q_013_02" class="label">¿Desde cuándo?</label>
        <input type="text" id="q_013_02" class="input" placeholder="Especifique">
    </div>

    <div class="radioContainer">
        <label for="q_014" class="label">¿Tiene alguna lesión?</label>

        <div class="radioOptions">
            <label for="r_014_01" class="input lblContainer" onclick="toogleOptionOn(this, 14)">
                Sí
                <input type="radio" name="q_014" id="r_014_01" value="1">
                <span class="radio r02"></span>
            </label>

            <label for="r_014_02" class="input lblContainer" onclick="toogleOptionOff(this, 14)">
                No
                <input type="radio" name="q_014" id="r_014_02" value="0" checked>
                <span class="radio r02"></span>
            </label>
        </div>
    </div>

    <div id="op_014" class="optional hiddenOpt">
        <label for="q_014_01" class="label">¿Cuál?</label>
        <input type="text" id="q_014_01" class="input" placeholder="Especifique">
    </div>

    <button type="submit" class="roundBtn btn06 b06-02 shadow">Guardar cambios</button>
</form>
