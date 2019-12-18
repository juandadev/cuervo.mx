<body>
    <header>
        <div class="logo">
            <img src="img/FULL-CUERVO-BLACK-NOBG.png" alt="Cuervo Nutrition">
        </div>
    </header>

    <main>
        <form action="php/login.php" method="POST" class="login" onsubmit="checkUser(event)">
            <h1>Iniciar sesión</h1>

            <label for="user">Usuario:</label>
            <input type="text" name="user" placeholder="Nombre de usuario">

            <label for="password">Contraseña:</label>
            <input type="password" name="password" placeholder="Contraseña de usuario">

            <button type="submit">Ingresar</button>

            <?php
            if (isset($_GET['error'])) {
            ?>
                <div class="error">Correo o contraseña incorrectos</div>
            <?php
            }
            ?>
        </form>
    </main>

    <script src="js/login.js"></script>
</body>

</html>