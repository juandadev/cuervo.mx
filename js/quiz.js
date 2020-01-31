//Quiz container buttons
var btn = [document.getElementById('btn01'),
document.getElementById('btn02'),
document.getElementById('btn03'),
document.getElementById('btn04'),
document.getElementById('btn05'),
document.getElementById('btn07'),
document.getElementById('btn08'),
document.getElementById('btn09'),
document.getElementById('btn10')];

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

var modal = document.getElementById('modal');
var titles = document.getElementsByClassName('titleCont');
var quizNav = document.getElementById('quizNav');
var bars = document.getElementById('bars');
var sMenu = document.querySelector('.quizNav ul');
var logo = document.getElementById('logo');
var wrapped = document.getElementById('wrapped-content02');
var http_request;

//Phone menu event
bars.addEventListener('click', function () {
    if (sMenu.style.display == 'flex') {
        sMenu.style.display = 'none';
    } else {
        sMenu.style.display = 'flex';
    }
});

//Link to index
logo.addEventListener('click', function () {
    window.location = 'index.php';
});

//Logout
btn[6].addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add('show');

    var mailForm = document.querySelector('#mailForm');
    mailForm.style.display = 'none';

    btn[7].addEventListener('click', function () {
        deleteCookie('client');
        window.location = urlDir1 + 'index.php';
    });

    btn[8].addEventListener('click', function () {
        modal.classList.remove('show');
        modal.classList.add('hidden');
    });
});

//Email modal
if (checkCookie('client') == true) {
    modal.classList.remove('show');
    modal.classList.add('hidden');
} else {
    var logout = document.querySelector('#logout');
    logout.style.display = 'none';
}

btn[0].addEventListener('click', function () {
    setTimeout(function () {
        AJAXpetition(urlDir1, 'datos-personales.view.php');
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
        AJAXpetition(urlDir1, 'antecedentes-salud.view.php');
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
        AJAXpetition(urlDir1, 'antecedentes-familiares.view.php');
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
        AJAXpetition(urlDir1, 'alimentos-deportes.view.php');
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
            AJAXpetition(urlDir1, 'datos-personales.view.php');

            subNavigation(0, 1, 2, 3, 'BLACK');

            if (screen.width <= 480) {
                if (sMenu.style.display == 'flex') {
                    sMenu.style.display = 'none';
                } else {
                    sMenu.style.display = 'flex';
                }
            }
            break;

        case 'item02':
            AJAXpetition(urlDir1, 'antecedentes-salud.view.php');

            subNavigation(1, 0, 2, 3, 'WHITE');

            if (screen.width <= 480) {
                if (sMenu.style.display == 'flex') {
                    sMenu.style.display = 'none';
                } else {
                    sMenu.style.display = 'flex';
                }
            }
            break;

        case 'item03':
            AJAXpetition(urlDir1, 'antecedentes-familiares.view.php');

            subNavigation(2, 1, 0, 3, 'WHITE');

            if (screen.width <= 480) {
                if (sMenu.style.display == 'flex') {
                    sMenu.style.display = 'none';
                } else {
                    sMenu.style.display = 'flex';
                }
            }
            break;

        case 'item04':
            AJAXpetition(urlDir1, 'alimentos-deportes.view.php');

            subNavigation(3, 2, 1, 0, 'WHITE');

            if (screen.width <= 480) {
                if (sMenu.style.display == 'flex') {
                    sMenu.style.display = 'none';
                } else {
                    sMenu.style.display = 'flex';
                }
            }
            break;
    }
}

function AJAXpetition(url1, url2) {
    http_request = new XMLHttpRequest();
    http_request.onreadystatechange = changeStateRequest;

    http_request.open('POST', url1 + 'views/' + url2);
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

function toogleOptionOn(radio, i) {
    var nameR = radio.childNodes[1].getAttribute('id');
    var selected = document.querySelector('input[id=' + nameR + ']:checked');
    var opt = document.querySelector('#op_0' + i);

    opt.classList.remove('hiddenOpt');
    opt.classList.add('showOpt');

    var required = document.querySelectorAll('#op_0' + i + ' input');
    required[0].setAttribute('required', '');
    required[1] ? required[1].setAttribute('required', '') : console.log();
    required[2] ? required[2].setAttribute('required', '') : console.log();
}

function toogleOptionOff(radio, i) {
    var nameR = radio.childNodes[1].getAttribute('id');
    var selected = document.querySelector('input[id=' + nameR + ']:checked');
    var opt = document.querySelector('#op_0' + i);

    opt.classList.add('hiddenOpt');
    opt.classList.remove('showOpt');

    var required = document.querySelectorAll('#op_0' + i + ' .input');
    required[0].removeAttribute('required');
    if (required[1] != null && required[2] != null) {
        required[1].removeAttribute('required');
        required[2].removeAttribute('required');
    }
}

function insertClientData(evt, form, i) {
    evt.preventDefault();

    http_request = new XMLHttpRequest();
    http_request.open('POST', urlDir1 + 'php/insertData.php');

    var name = form.name.value.trim().toUpperCase();
    var age = parseInt(form.age.value.trim());
    var weight = parseInt(form.weight.value.trim());
    var height = parseInt(form.height.value.trim());
    var gender = form.gender.value;
    var birth = form.birth.value;
    var civil = form.civil.value;
    var ocupation = form.ocupation.value.trim();
    var phone = parseInt(form.phone.value.trim());
    var q_01 = form.q_01.value.trim();

    var params = 'name=' + name +
        '&age=' + age +
        '&weight=' + weight +
        '&height=' + height +
        '&gender=' + gender +
        '&birth=' + birth +
        '&civil=' + civil +
        '&ocupation=' + ocupation +
        '&phone=' + phone +
        '&q_01=' + q_01;

    http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                changeCompleted(i);
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send(params);
    checkCompleted(1, 2, 3);
}

function insertForm2(evt, form, i) {
    evt.preventDefault();

    http_request = new XMLHttpRequest();
    http_request.open('POST', urlDir1 + 'php/insertData.php');

    var q_02 = parseInt(form.q_02.value);
    var q_02_01 = form.q_02_01.value.trim();
    var q_03 = parseInt(form.q_03.value);
    var q_03_01 = form.q_03_01.value.trim();
    var q_04 = parseInt(form.q_04.value);
    var q_04_01 = form.q_04_01.value.trim();
    var q_04_02 = form.q_04_02.value.trim();
    var q_05 = parseInt(form.q_05.value);
    var q_05_01 = form.q_05_01.value.trim();

    var params = 'q_02=' + q_02 +
        '&q_02_01=' + q_02_01 +
        '&q_03=' + q_03 +
        '&q_03_01=' + q_03_01 +
        '&q_04=' + q_04 +
        '&q_04_01=' + q_04_01 +
        '&q_04_02=' + q_04_02 +
        '&q_05=' + q_05 +
        '&q_05_01=' + q_05_01;
    console.log(params);

    http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                changeCompleted(i);
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send(params);
    checkCompleted(0, 2, 3);
}

function insertForm3(evt, form, i) {
    evt.preventDefault();

    http_request = new XMLHttpRequest();
    http_request.open('POST', urlDir1 + 'php/insertData.php');

    var q_0601 = form.q_06[0].checked == true ? form.q_06[0].value : '';
    var q_0602 = form.q_06[1].checked == true ? form.q_06[1].value : '';
    var q_0603 = form.q_06[2].checked == true ? form.q_06[2].value : '';
    var q_0604 = form.q_06[3].checked == true ? form.q_06[3].value : '';
    var q_0605 = form.q_06[4].checked == true ? form.q_06[4].value : '';
    var q_0606 = form.q_06[5].checked == true ? form.q_06[5].value : '';
    var q_0607 = form.q_06[6].checked == true ? form.q_06[6].value : '';
    var q_0608 = form.q_06[7].checked == true ? form.q_06[7].value : '';
    var q_06_01 = form.q_06_01.value.trim();

    var params = 'q_0601=' + q_0601 +
        '&q_0602=' + q_0602 +
        '&q_0603=' + q_0603 +
        '&q_0604=' + q_0604 +
        '&q_0605=' + q_0605 +
        '&q_0606=' + q_0606 +
        '&q_0607=' + q_0607 +
        '&q_0608=' + q_0608 +
        '&q_06_01=' + q_06_01;
    console.log(params);

    http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                changeCompleted(i);
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send(params);
    checkCompleted(0, 1, 3);
}

function insertForm4(evt, form, i) {
    evt.preventDefault();

    http_request = new XMLHttpRequest();
    http_request.open('POST', urlDir1 + 'php/insertData.php');

    var q_07 = form.q_07.value.trim();
    var q_08 = form.q_08.value.trim();
    var q_09 = form.q_09.value.trim();
    var q_010 = form.q_010.value.trim();
    var q_011 = parseInt(form.q_011.value);
    var q_011_01 = form.q_011_01.value.trim();
    var q_012 = parseInt(form.q_012.value);
    var q_012_01 = form.q_012_01.value.trim();
    var q_012_02 = form.q_012_02.value.trim();
    var q_012_03 = form.q_012_03.value.trim();
    var q_013 = parseInt(form.q_013.value);
    var q_013_01 = form.q_013_01.value.trim();
    var q_013_02 = form.q_013_02.value.trim();
    var q_014 = parseInt(form.q_014.value);
    var q_014_01 = form.q_014_01.value.trim();

    var params = 'q_07=' + q_07 +
        '&q_08=' + q_08 +
        '&q_09=' + q_09 +
        '&q_010=' + q_010 +
        '&q_011=' + q_011 +
        '&q_011_01=' + q_011_01 +
        '&q_012=' + q_012 +
        '&q_012_01=' + q_012_01 +
        '&q_012_02=' + q_012_02 +
        '&q_012_03=' + q_012_03 +
        '&q_013=' + q_013 +
        '&q_013_01=' + q_013_01 +
        '&q_013_02=' + q_013_02 +
        '&q_014=' + q_014 +
        '&q_014_01=' + q_014_01;
    console.log(params);

    http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                changeCompleted(i);
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send(params);
    checkCompleted(0, 1, 2);
}

function changeCompleted(i) {
    item[i].classList.add('completed');
    btn[i].classList.add('completedBtn');
    btn[i].classList.remove('btn01');
    btn[i].classList.remove('btn02');
    btn[i].classList.remove('btn03');
    btn[i].classList.remove('btn04');
    btn[i].innerHTML = 'Completado';

    if (item[i].childElementCount == 0) {
        var check = document.createElement('i');
        check.classList.add('fas');
        check.classList.add('fa-check-circle');

        item[i].appendChild(check);
    }

    var success = document.querySelector('.success');
    success.innerHTML = 'Datos guardados exitosamente';
    success.style.padding = '10px';
    success.style.textAlign = 'center';
}

function checkCompleted(i1, i2, i3) {
    if (item[i1].classList.contains('completed') && item[i2].classList.contains('completed') && item[i3].classList.contains('completed')) {
        setTimeout(function () {
            window.location = 'success.php';
        }, 2000);
    }
}