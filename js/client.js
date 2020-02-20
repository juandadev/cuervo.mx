var h = [document.getElementById('h01'),
document.getElementById('h02'),
document.getElementById('h03'),
document.getElementById('h04')];

var container = [document.getElementById('form01'),
document.getElementById('form02'),
document.getElementById('form03'),
document.getElementById('form04')];

var logo = document.getElementById('logo'),
    mail = document.getElementById('mail'),
    wp = document.getElementById('wp'),
    back = document.getElementById('back'),
    clientName = document.getElementById('clientName'),
    success = document.getElementById('success'),
    changeMod = document.getElementById('change');

back.addEventListener('click', function () {
    window.location = 'admin.php';
});

logo.addEventListener('click', function () {
    window.location = 'index.php';
});

mail.addEventListener('click', function () {
    window.open('mailto:' + clientMail, '_blank');
});

wp.addEventListener('click', function () {
    window.open('https://wa.me/521' + clientPhone, '_blank');
});

h[0].addEventListener('click', function () {
    container[0].classList.toggle('hidden');
});

h[1].addEventListener('click', function () {
    container[1].classList.toggle('hidden');
});

h[2].addEventListener('click', function () {
    container[2].classList.toggle('hidden');
});

h[3].addEventListener('click', function () {
    container[3].classList.toggle('hidden');
});

if (changeMod.classList.contains('fa-edit')) {
    changeMod.addEventListener('click', function () {
        window.location = 'client.php?id=' + clientId + '&edit';
    });
} else {
    changeMod.addEventListener('click', function () {
        window.location = 'client.php?id=' + clientId;
    });
}

//INSERT FUNCTIONS
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
        '&q_01=' + q_01 +
        '&mail=' + clientMail;

    http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                clientName.innerHTML = name;
                success.classList.toggle('hidden');

                setTimeout(function () {
                    success.classList.toggle('hidden');
                }, 2000);
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send(params);
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

    http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                success.classList.toggle('hidden');

                setTimeout(function () {
                    success.classList.toggle('hidden');
                }, 2000);
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send(params);
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

    http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                success.classList.toggle('hidden');

                setTimeout(function () {
                    success.classList.toggle('hidden');
                }, 2000);
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send(params);
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

    http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                success.classList.toggle('hidden');

                setTimeout(function () {
                    success.classList.toggle('hidden');
                }, 2000);
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send(params);
}
