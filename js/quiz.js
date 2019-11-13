//Quiz container buttons
var btn = [document.getElementById('btn01'),
           document.getElementById('btn02'),
           document.getElementById('btn03'),
           document.getElementById('btn04'),
           document.getElementById('btn05')];

//Quiz containers
var cont = [document.getElementById('c01'),
            document.getElementById('c02'),
            document.getElementById('c03'),
            document.getElementById('c04'),
            document.getElementById('c05')];

//Submenu items
var item = [document.getElementById('item01'),
            document.getElementById('item02'),
            document.getElementById('item03'),
            document.getElementById('item04')];

var titles = document.getElementsByClassName('titleCont');
var quizNav = document.getElementById('quizNav');
var logo = document.getElementById('logo');
var wrapped = document.getElementById('wrapped-content02');
var http_request;

btn[0].addEventListener('click', function () {
    setTimeout(function () {
        AJAXpetition('datos-personales.view.php');
    }, 500);

    cont[0].classList.add('current');
    cont[1].classList.remove('current');
    cont[2].classList.remove('current');
    cont[3].classList.remove('current');

    cont[1].classList.add('hidden02');
    setTimeout(function () {
        cont[1].classList.add('hidden');
    }, 500);
    cont[2].classList.add('hidden03');
    setTimeout(function () {
        cont[2].classList.add('hidden');
    }, 500);
    cont[3].classList.add('hidden04');
    setTimeout(function () {
        cont[3].classList.add('hidden');
    }, 500);

    setTimeout(function () {
        cont[0].classList.add('ccontent01');
        cont[0].classList.remove('c01');
        titles[0].classList.add('hidden');
        btn[0].classList.add('hidden');
    }, 500);

    setTimeout(function () {
        cont[4].classList.remove('hideContent');
        cont[4].classList.remove('hidden');
        cont[4].classList.add('show');
    }, 500);

    quizNav.dataset.cont = '1';
    item[0].classList.add('selected-menu01');
    item[1].classList.remove('selected-menu02');
    item[2].classList.remove('selected-menu03');
    item[3].classList.remove('selected-menu04');

    setTimeout(function () {
        logo.setAttribute('src', 'img/FULL-CUERVO-BLACK-NOBG.png');
    }, 200);
});

btn[1].addEventListener('click', function () {
    setTimeout(function () {
        AJAXpetition('antecedentes-salud.view.php');
    }, 500);

    cont[0].classList.remove('current');
    cont[1].classList.add('current');
    cont[2].classList.remove('current');
    cont[3].classList.remove('current');

    setTimeout(function () {
        cont[1].classList.add('ccontent02');
        cont[1].classList.remove('c02');
        titles[1].classList.add('hidden');
        btn[1].classList.add('hidden');
    }, 500);

    cont[0].classList.add('hidden01');
    setTimeout(function () {
        cont[0].classList.add('hidden');
    }, 500);
    cont[2].classList.add('hidden03');
    setTimeout(function () {
        cont[2].classList.add('hidden');
    }, 500);
    cont[3].classList.add('hidden04');
    setTimeout(function () {
        cont[3].classList.add('hidden');
    }, 500);


    setTimeout(function () {
        cont[4].classList.remove('hideContent');
        cont[4].classList.remove('hidden');
        cont[4].classList.add('show');
    }, 500);

    quizNav.dataset.cont = '2';
    item[0].classList.remove('selected-menu01');
    item[1].classList.add('selected-menu02');
    item[2].classList.remove('selected-menu03');
    item[3].classList.remove('selected-menu04');

    setTimeout(function () {
        logo.setAttribute('src', 'img/FULL-CUERVO-WHITE-NOBG.png');
    }, 200);
});

btn[2].addEventListener('click', function () {
    setTimeout(function () {
        AJAXpetition('antecedentes-familiares.view.php');
    }, 500);

    cont[0].classList.remove('current');
    cont[1].classList.remove('current');
    cont[2].classList.add('current');
    cont[3].classList.remove('current');

    setTimeout(function () {
        cont[2].classList.add('ccontent03');
        cont[2].classList.remove('c03');
        titles[2].classList.add('hidden');
        btn[2].classList.add('hidden');
    }, 500);

    cont[0].classList.add('hidden01');
    setTimeout(function () {
        cont[0].classList.add('hidden');
    }, 500);
    cont[1].classList.add('hidden02');
    setTimeout(function () {
        cont[1].classList.add('hidden');
    }, 500);
    cont[3].classList.add('hidden04');
    setTimeout(function () {
        cont[3].classList.add('hidden');
    }, 500);


    setTimeout(function () {
        cont[4].classList.remove('hideContent');
        cont[4].classList.remove('hidden');
        cont[4].classList.add('show');
    }, 500);

    quizNav.dataset.cont = '3';
    item[0].classList.remove('selected-menu01');
    item[1].classList.remove('selected-menu02');
    item[2].classList.add('selected-menu03');
    item[3].classList.remove('selected-menu04');

    setTimeout(function () {
        logo.setAttribute('src', 'img/FULL-CUERVO-WHITE-NOBG.png');
    }, 200);
});

btn[3].addEventListener('click', function () {
    setTimeout(function () {
        AJAXpetition('alimentos-deportes.view.php');
    }, 500);

    cont[0].classList.remove('current');
    cont[1].classList.remove('current');
    cont[2].classList.remove('current');
    cont[3].classList.add('current');

    setTimeout(function () {
        cont[0].classList.add('hidden');
    }, 500);
    cont[1].classList.add('hidden02');
    setTimeout(function () {
        cont[1].classList.add('hidden');
    }, 500);
    cont[2].classList.add('hidden03');
    setTimeout(function () {
        cont[2].classList.add('hidden');
    }, 500);

    setTimeout(function () {
        cont[3].classList.add('ccontent04');
        cont[3].classList.remove('c04');
        titles[3].classList.add('hidden');
        btn[3].classList.add('hidden');
    }, 600);

    setTimeout(function () {
        cont[4].classList.remove('hideContent');
        cont[4].classList.remove('hidden');
        cont[4].classList.add('show');
    }, 500);

    quizNav.dataset.cont = '4';
    item[0].classList.remove('selected-menu01');
    item[1].classList.remove('selected-menu02');
    item[2].classList.remove('selected-menu03');
    item[3].classList.add('selected-menu04');

    setTimeout(function () {
        logo.setAttribute('src', 'img/FULL-CUERVO-WHITE-NOBG.png');
    }, 200);
});

function backMenu(container) {
    var c = container.parentNode;
    var noCont = c.dataset.cont;

    cont[4].classList.add('hideContent');
    cont[4].classList.remove('show');
    setTimeout(function () {
        cont[4].classList.add('hidden');
    }, 500);

    cont[noCont - 1].classList.remove('ccontent0' + noCont);
    titles[noCont - 1].classList.remove('hidden');
    btn[noCont - 1].classList.remove('hidden');
    cont[noCont - 1].classList.add('c0' + noCont);

    switch (noCont - 1) {
        case 0:
            cont[1].classList.remove('hidden');
            cont[1].classList.remove('current');
            setTimeout(function () {
                cont[1].classList.remove('hidden02');
            }, 500);
            cont[2].classList.remove('hidden');
            cont[2].classList.remove('current');
            setTimeout(function () {
                cont[2].classList.remove('hidden03');
            }, 500);
            cont[3].classList.remove('hidden');
            cont[3].classList.remove('current');
            setTimeout(function () {
                cont[3].classList.remove('hidden04');
            }, 500);
            break;

        case 1:
            cont[0].classList.remove('hidden');
            cont[0].classList.remove('current');
            setTimeout(function () {
                cont[0].classList.remove('hidden01');
            }, 500);
            cont[2].classList.remove('hidden');
            cont[2].classList.remove('current');
            setTimeout(function () {
                cont[2].classList.remove('hidden03');
            }, 500);
            cont[3].classList.remove('hidden');
            cont[3].classList.remove('current');
            setTimeout(function () {
                cont[3].classList.remove('hidden04');
            }, 500);
            break;

        case 2:
            cont[0].classList.remove('hidden');
            cont[0].classList.remove('current');
            setTimeout(function () {
                cont[0].classList.remove('hidden01');
            }, 500);
            cont[1].classList.remove('hidden');
            cont[1].classList.remove('current');
            setTimeout(function () {
                cont[1].classList.remove('hidden02');
            }, 500);
            cont[3].classList.remove('hidden');
            cont[3].classList.remove('current');
            setTimeout(function () {
                cont[3].classList.remove('hidden04');
            }, 500);
            break;

        case 3:
            cont[0].classList.remove('hidden');
            cont[0].classList.remove('current');
            setTimeout(function () {
                cont[0].classList.remove('hidden01');
            }, 500);
            cont[1].classList.remove('hidden');
            cont[1].classList.remove('current');
            setTimeout(function () {
                cont[1].classList.remove('hidden02');
            }, 500);
            cont[2].classList.remove('hidden');
            cont[2].classList.remove('current');
            setTimeout(function () {
                cont[2].classList.remove('hidden03');
            }, 500);
            break;
    }

    setTimeout(function () {
        logo.setAttribute('src', 'img/FULL-CUERVO-BLACK-NOBG.png');
    }, 700);
}

function subMenu(menu) {
    switch (menu.getAttribute('id')) {
        case 'item01':
            AJAXpetition('datos-personales.view.php');

            subNavigation(0, 1, 2, 3, 'BLACK');
            break;

        case 'item02':
            AJAXpetition('antecedentes-salud.view.php');

            subNavigation(1, 0, 2, 3, 'WHITE');
            break;

        case 'item03':
            AJAXpetition('antecedentes-familiares.view.php');

            subNavigation(2, 1, 0, 3, 'WHITE');
            break;

        case 'item04':
            AJAXpetition('alimentos-deportes.view.php');

            subNavigation(3, 2, 1, 0, 'WHITE');
            break;
    }
}

function AJAXpetition(url) {
    http_request = new XMLHttpRequest();
    http_request.onreadystatechange = changeStateRequest;
    http_request.open('POST', 'http://localhost/cuervo-nut/views/' + url);
    http_request.send();
}

function changeStateRequest() {
    if (http_request.readyState == XMLHttpRequest.DONE) {
        if (http_request.status == 200) {
            wrapped.innerHTML = http_request.responseText;
        } else {
            console.log('Hubo un error');
        }
    }
}

function subNavigation(c01, c02, c03, c04, color) {
    quizNav.dataset.cont = c01 + 1;

    logo.setAttribute('src', 'img/FULL-CUERVO-' + color + '-NOBG.png');

    item[c01].classList.add('selected-menu0' + (c01 + 1));
    item[c02].classList.remove('selected-menu0' + (c02 + 1));
    item[c03].classList.remove('selected-menu0' + (c03 + 1));
    item[c04].classList.remove('selected-menu0' + (c04 + 1));

    cont[c01].classList.add('opacity');
    setTimeout(function () {
        cont[c01].classList.remove('opacity');
    }, 600);
    cont[c01].classList.add('current');
    cont[c01].classList.add('ccontent0' + (c01 + 1));
    cont[c01].classList.remove('hidden0' + (c01 + 1));
    cont[c01].classList.remove('hidden');
    cont[c01].classList.remove('c0' + (c01 + 1));
    titles[c01].classList.add('hidden');
    btn[c01].classList.add('hidden');

    cont[c02].classList.remove('current');
    cont[c02].classList.remove('ccontent0' + (c02 + 1));
    cont[c02].classList.add('hidden');
    cont[c02].classList.add('hidden0' + (c02 + 1));
    cont[c02].classList.add('c0' + (c02 + 1));
    titles[c02].classList.remove('hidden');
    btn[c02].classList.remove('hidden');

    cont[c03].classList.remove('current');
    cont[c03].classList.remove('ccontent0' + (c03 + 1));
    cont[c03].classList.add('hidden');
    cont[c03].classList.add('hidden0' + (c03 + 1));
    cont[c03].classList.add('c0' + (c03 + 1));
    titles[c03].classList.remove('hidden');
    btn[c03].classList.remove('hidden');

    cont[c04].classList.remove('current');
    cont[c04].classList.remove('ccontent0' + (c04 + 1));
    cont[c04].classList.add('hidden');
    cont[c04].classList.add('hidden0' + (c04 + 1));
    cont[c04].classList.add('c0' + (c04 + 1));
    titles[c04].classList.remove('hidden');
    btn[c04].classList.remove('hidden');
}
