<body>
    <header>
        <img src="" alt="" id="logo" class="logo">

        <div id="adminControl" class="adminControl">
            <img src="" alt="" class="adminPic">

            <p class="adminName"></p>

            <i class="fas fa-chevron-down"></i>

            <div id="controls" class="controls">
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
            <i class="fas fa-search"></i>

            <input type="text" id="search" placeholder="Buscar contacto">
        </div>

        <div class="container">
            <div class="containerHead">
                <div class="h01">
                    <h1>Contacto</h1>

                    <p>Total:</p>

                    <p id="count">52</p>
                </div>

                <div class="h02">
                    <p>Ordenado por:</p>

                    <div id="filter">
                        <p></p>

                        <i class="fas fa-chevron-down"></i>

                        <div id="filterOpt" class="filterOpt">
                            <ul>
                                <li id="fName">Nombre</li>
                                <li id="fAge">Edad</li>
                                <li id="fGender">Género</li>
                                <li id="fdate">Fecha de registro</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="h03">
                    <button id="addUser">
                        <i class="fas fa-user-plus"></i>Agregar Contacto
                    </button>

                    <button id="more">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
            </div>

            <div class="containerList">
                <table id="containerList">
                    <tr>
                        <th></th>
                        <th>Información básica</th>
                        <th>Edad</th>
                        <th>Género</th>
                        <th>Teléfono</th>
                        <th>Fecha registro</th>
                        <th></th>
                    </tr>

                    <tr id="1">
                        <td>
                            <input type="check" id="rCheck">
                        </td>

                        <td>
                            <img src="" alt="" class="userPic">

                            <div class="rinfo">
                                <p id="rUser"></p>

                                <p id="rMail"></p>
                            </div>
                        </td>

                        <td id="rAge">
                            <p id="rAge"></p>
                        </td>

                        <td>
                            <p id="rGender"></p>
                        </td>

                        <td>
                            <p id="rPhone"></p>
                        </td>

                        <td>
                            <p id="rDate"></p>
                        </td>

                        <td id="rMore">
                            <i class="fas fa-ellipsis-h"></i>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</body>

</html>
