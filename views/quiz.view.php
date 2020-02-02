<body>
    <header>
        <img src="img/FULL-CUERVO-BLACK-NOBG.png" alt="Cuervo Nutrition" class="logo" id="logo">
    </header>

    <div class="modal show" id="modal">
        <form action="php/insertMail.php" method="POST" id="mailForm" class="mailForm show animate">
            <label for="mail" class="label">Correo:</label>
            <input type="email" name="mail" placeholder="Ingresa tu correo" autofocus required id="mail" class="input">

            <button type="submit" id="btn07" class="roundBtn">Ingresar</button>
        </form>

        <div id="logout" class="mailForm hidden animate">
            <p class="label">Estás seguro que deseas salir?</p>

            <div class="logoutOptions">
                <button id="btn09" class="roundBtn">Sí</button>

                <button id="btn10" class="roundBtn">No</button>
            </div>
        </div>
    </div>

    <div class="wrapped-content01">
        <div class="container c01" id="c01">
            <div class="titleCont">
                <h2>Datos</h2>

                <h2>Personales</h2>
            </div>

            <button class="roundBtn btn01 shadow" id="btn01">Completar</button>
        </div>

        <div class="container c02" id="c02">
            <div class="titleCont">
                <h2>Antecedentes</h2>

                <h2>de</h2>

                <h2>Salud</h2>
            </div>

            <button class="roundBtn btn02 shadow" id="btn02">Completar</button>
        </div>

        <div class="container c03" id="c03">
            <div class="titleCont">
                <h2>Antecedentes</h2>

                <h2>Familiares</h2>
            </div>

            <button class="roundBtn btn03 shadow" id="btn03">Completar</button>
        </div>

        <div class="container c04" id="c04">
            <div class="titleCont">
                <h2>Alimentos</h2>

                <h2>Y</h2>

                <h2>Deportes</h2>
            </div>

            <button class="roundBtn btn04 shadow" id="btn04">Completar</button>
        </div>

        <div class="c05 hidden" id="c05">
            <nav id="quizNav" class="quizNav show">
                <div id="btn05" class="controls btn05 shadow show" onclick="backMenu(this)">
                    <i class="fas fa-chevron-up"></i>
                </div>

                <div class="bars" id="bars">
                    <i class="fas fa-bars"></i>
                </div>

                <ul>
                    <li id="item01" onclick="subMenu(this)">Datos personales</li>
                    <li id="item02" onclick="subMenu(this)">Antecedentes de salud</li>
                    <li id="item03" onclick="subMenu(this)">Antecedentes familiares</li>
                    <li id="item04" onclick="subMenu(this)">Alimentos y deportes</li>
                </ul>
            </nav>

            <div id="wrapped-content02" class="wrapped-content02 show"></div>
        </div>
    </div>

    <footer class="show">
        <p>&copy 2019 <a href="https://www.juandamartinez.com/" target="_blank">Juan Daniel Martínez</a></p>

        <button id="btn08" class="roundBtn">Cerrar sesión</button>
    </footer>

    <script src="js/cookies.js"></script>
    <script src="private/config.js"></script>
    <script type="text/javascript" language="javascript">
        var versionUpdate = (new Date()).getTime();
        var quiz = document.createElement("script");

        setScript(quiz, 'quiz');
    </script>
</body>

</html>
