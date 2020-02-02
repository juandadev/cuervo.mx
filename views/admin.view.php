<body>
    <header>
        <div class="logo">
            <img src="img/FULL-CUERVO-BLACK-NOBG.png" alt="Cuervo Nutrition" id="logo">
        </div>

        <div id="adminControl" class="adminControl">
            <div class="adminPic">
                <img src="img/cuervo-logo-min.png" alt="Pic Profile" id="adminPic">
            </div>

            <p class="adminName">Luis Carlos</p>

            <i class="fas fa-chevron-down"></i>

            <div id="controls" class="controls hidden">
                <ul>
                    <li id="addAdmin">Agregar Usuario</li>
                    <li id="modifyAdmin">Modificar Usuario</li>
                    <li id="changePic">Cambiar Foto</li>
                    <li id="changePass">Cambiar contraseña</li>
                    <li id="logout">Cerrar Sesión</li>
                </ul>
            </div>
        </div>
    </header>

    <div class="wrapped-content">
        <div class="search">
            <label for="search">
                <i class="fas fa-search"></i>
            </label>

            <input type="text" id="search" placeholder="Buscar contacto" onkeyup="searchClient(this.value)">
        </div>

        <button id="update" class="update">Actualizar</button>

        <div id="errors" class="errors hidden">
            <p>Se ha producido un error</p>
        </div>

        <div class="container">
            <div class="containerHead">
                <div class="h01">
                    <h1>Contactos</h1>

                    <p>Total:</p>

                    <p id="count"></p>
                </div>

                <div class="h02">
                    <p>Ordenado por:</p>

                    <select name="filter" id="filter" class="filter">
                        <option value="name">Nombre</option>
                        <option value="age">Edad</option>
                        <option value="gender">Género</option>
                        <option value="date">Fecha de registro</option>
                    </select>

                    <!--                    <i class="fas fa-chevron-down"></i>-->
                </div>

                <div class="h03">
                    <button id="addUser">
                        <i class="fas fa-user-plus"></i>
                        <p>Agregar Contacto</p>
                    </button>

                    <button id="more">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
            </div>

            <div class="containerList" id="containerList"></div>
        </div>
    </div>

    <script src="private/config.js"></script>
    <script type="text/javascript" language="javascript">
        var versionUpdate = (new Date()).getTime();
        var admin = document.createElement("script");

        setScript(admin, 'admin');
    </script>
</body>

</html>
