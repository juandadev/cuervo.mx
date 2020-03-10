<body>
    <header class="show">
        <a href="index.php">
            <img id="logo" class="logo" src="img/FULL-CUERVO-BLACK-NOBG-BIG.png">
        </a>
    </header>

    <main>
        <?php if (isset($_GET['status']) && $_GET['status'] == 'success'): ?>
            <div class="success">
                Plan adquirido con éxito!
            </div>
        <?php endif; ?>

        <div class="paymentPlan">
            <div class="plan lite">
                <div class="headP">
                    <p>Paquete Cuervo</p>

                    <h3 class="titleP">Lite</h3>

                    <h3 class="pricing"><strong>$399.00</strong> / mensual</h3>
                </div>

                <ul>
                    <li>
                        <i class="fas fa-check"></i> Plan alimenticio
                    </li>

                    <li>
                        <i class="fas fa-check"></i> Supervisión online
                    </li>
                </ul>

                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W9HFE2E4PFGJA"><button>Contratar ahora</button></a>
            </div>

            <div class="plan pro">
                <div class="headP">
                    <p>Paquete Cuervo</p>

                    <h3 class="titleP">Pro</h3>

                    <h3 class="pricing"><strong>$499.00</strong> / mensual</h3>
                </div>

                <ul>
                    <li>
                        <i class="fas fa-check"></i> Plan alimenticio
                    </li>

                    <li>
                        <i class="fas fa-check"></i> Plan de entrenamiento
                    </li>

                    <li>
                        <i class="fas fa-check"></i> Supervisión online
                    </li>
                </ul>

                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3883DERQ6EH8Q"><button>Contratar ahora</button></a>
            </div>
        </div>

        <div class="description red">
            <h2>Plan alimenticio</h2>

            <p>
                Te ofrecemos planes elaborados exclusivamente para ti, adaptado a tu gasto semanal en el mercado así como tu disponibilidad de tiempo para realizar tus comidas
            </p>
        </div>

        <div class="description">
            <h2>Plan de entrenamiento</h2>

            <p>
                Si eres principiante, ofrecemos rutinas de ejercicio para que tu cuerpo se adapte poco a poco a su transformación. Este plan incluye entrenamientos intensos que garantizan activar esos músculos que no sabías que tenías
            </p>
        </div>

        <div class="description brown">
            <h2>Supervisión Online / Personal</h2>

            <p>
                Nosotros nos esforzamos en que tengas la mejor experiencia brindándote el apoyo y motivación que necesitas para que cumplas tus metas
            </p>
        </div>
    </main>
</body>

</html>