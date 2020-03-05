<body>
    <div class="subscription-details js-subscription-details hidden">
        <i class="fas fa-info-circle"></i>
        <pre><code class="js-subscription-json"></code></pre>
    </div>

    <div id="modal" class="modal hidden">
        <div class="modalCont hidden" id="changePassModal">
            <h2>Cambiar contraseña</h2>

            <label for="newPass">Contraseña nueva</label>
            <input type="password" name="newPass" id="newPass">

            <label for="confirmPass">Confirmar contraseña</label>
            <input type="password" name="confirmPass" id="confirmPass">

            <button id="passBtn" data-admin="<?php echo $_SESSION['admin']; ?>">Cambiar</button>

            <div class="errors hidden" id="passError">
                <p></p>
            </div>

            <div class="success hidden" id="passSuccess">
                <p>Contraseña cambiada con éxito</p>
            </div>
        </div>

        <div class="modalCont hidden" id="changePicModal">
            <div class="currentPic" id="currentPic"></div>

            <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST" enctype="multipart/form-data">
                <input type="file" name="selectPic" id="selectPic">

                <button type="submit">Guardar</button>
            </form>
        </div>

        <div class="modalCont hidden" id="changeNameModal">
            <h2>Cambiar nombre de usuario</h2>

            <label for="newName">Nuevo nombre</label>
            <input type="text" name="newName" id="newName">

            <button id="nameBtn" data-admin="<?php echo $_SESSION['admin']; ?>">Cambiar</button>
        </div>

        <div class="modalCont hidden" id="addUserModal">
            <h2>Agregar usuario administrador</h2>

            <label for="newUser">Nombre de usuario</label>
            <input type="text" name="newUser" id="newUser">

            <label for="newUsPass">Contraseña</label>
            <input type="password" name="newUsPass" id="newUsPass">

            <button id="newUserBtn" data-admin="<?php echo $_SESSION['admin']; ?>">Agregar</button>

            <div class="success hidden" id="userSuccess">
                <p></p>
            </div>
        </div>

        <div class="modalCont hidden" id="deleteConfirm">
            <h2>¿Seguro que desea eliminar los registros?</h2>

            <div class="deleteOptions">
                <button id="deleteYes">Sí</button>

                <button id="deleteNo">No</button>
            </div>
        </div>
    </div>

    <header>
        <?php if (!empty($error)) : ?>
            <div class="errorPic" id="errorPic">
                <p><?php echo $error; ?></p>
            </div>
        <?php endif; ?>

        <div class="logo">
            <img src="img/FULL-CUERVO-BLACK-NOBG.png" alt="Cuervo Nutrition" id="logo">
        </div>

        <div id="adminControl" class="adminControl">
            <div class="adminPic" id="adminPic"></div>

            <p class="adminName"><?php echo $_SESSION['admin']; ?></p>

            <i class="fas fa-chevron-down"></i>

            <div id="controls" class="controls hidden">
                <ul>
                    <li id="addAdmin">Agregar Usuario</li>
                    <li id="modifyAdmin">Cambiar Nombre</li>
                    <li id="changePic">Cambiar Foto</li>
                    <li id="changePass">Cambiar Contraseña</li>
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

        <button id="incomplete" class="update">Clientes incompletos</button>

        <button id="pushButton" class="update"></button>

        <?php if ($_SESSION['admin'] == 'juanda'): ?>
            <button id="sendNoti" class="update">Mandar notificación</button>
        <?php endif; ?>

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

                    <div class="moreOptions hidden" id="moreOptions">
                        <ul>
                            <li id="deleteClient">Eliminar selección</li>
                        </ul>
                    </div>
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
    <script type="text/javascript">
        var adminSession = '<?php echo $_SESSION['admin']; ?>';
    </script>
</body>

</html>