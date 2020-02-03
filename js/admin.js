var update = document.getElementById('update'),
    errors = document.getElementById('errors'),
    table = document.getElementById('containerList'),
    filter = document.getElementById('filter');

var id_client,
    name_client,
    age_client,
    gender_client,
    phone_client,
    date_quiz;

loadClients();

update.addEventListener('click', function () {
    loadClients();
});

filter.onchange = function() {
    orderClients(filter.value);
}

function loadClients() {
    changeTotal();
    table.innerHTML = '';

    //Table headers
    var row2 = document.createElement('div');
    row2.classList.add('th');
    table.appendChild(row2);

    var hCheck = document.createElement('div');
    hCheck.setAttribute('id', 'thCheck');
    row2.appendChild(hCheck);

    var hInfo = document.createElement('div');
    hInfo.setAttribute('id', 'thInfo');
    hInfo.innerHTML = 'Información básica';
    row2.appendChild(hInfo);

    var hAge = document.createElement('div');
    hAge.setAttribute('id', 'thAge');
    hAge.innerHTML = 'Edad';
    row2.appendChild(hAge);

    var hGender = document.createElement('div');
    hGender.setAttribute('id', 'thGender');
    hGender.innerHTML = 'Género';
    row2.appendChild(hGender);

    var hPhone = document.createElement('div');
    hPhone.setAttribute('id', 'thPhone');
    hPhone.innerHTML = 'Teléfono';
    row2.appendChild(hPhone);

    var hDate = document.createElement('div');
    hDate.setAttribute('id', 'thDate');
    hDate.innerHTML = 'Fecha registro';
    row2.appendChild(hDate);

    var hMore = document.createElement('div');
    hMore.setAttribute('id', 'thMore');
    row2.appendChild(hMore);

    var http_request = new XMLHttpRequest();

    http_request.open('POST', urlDir1 + 'php/readData.php');

    //Ejecutar rueda de cargando

    http_request.onload = function () {
        var client = JSON.parse(http_request.responseText);

        if (client.error) {
            errors.classList.remove('hidden');
        } else {
            for (var i = 0; i < client.length; i++) {
                //Table row
                var row = document.createElement('div');
                row.classList.add('clientRow');
                row.setAttribute('id', client[i].id);
                row.setAttribute('onclick', 'showClient(this)');
                table.appendChild(row);

                //Checkbox
                var checkField = document.createElement('div');
                checkField.setAttribute('id', 'rCheck01');
                row.appendChild(checkField);

                var checkbox = document.createElement('INPUT');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', 'rCheck02');
                checkField.appendChild(checkbox);

                //User
                var userField = document.createElement('div');
                userField.classList.add('rUserInfo');
                userField.setAttribute('id', 'rUserInfo');
                row.appendChild(userField);

                var image = document.createElement('img');
                image.setAttribute('src', 'img/cuervo-logo-min.png');
                image.classList.add('userPic');
                userField.appendChild(image);

                var name = document.createElement('p');
                name.setAttribute('id', 'rUser');
                name.innerHTML = client[i].name;
                userField.appendChild(name);

                //Age
                var ageField = document.createElement('div');
                ageField.setAttribute('id', 'rAge');
                row.appendChild(ageField);

                var age = document.createElement('p');
                age.innerHTML = client[i].age;
                ageField.appendChild(age);

                //Gender
                var genderField = document.createElement('div');
                genderField.setAttribute('id', 'rGender');
                row.appendChild(genderField);

                var gender = document.createElement('p');
                gender.innerHTML = client[i].gender;
                genderField.appendChild(gender);

                //Phone
                var phoneField = document.createElement('div');
                phoneField.setAttribute('id', 'rPhone');
                row.appendChild(phoneField);

                var phone = document.createElement('p');
                phone.innerHTML = client[i].phone;
                phoneField.appendChild(phone);

                //Date
                var dateField = document.createElement('div');
                dateField.setAttribute('id', 'rDate');
                row.appendChild(dateField);

                var date = document.createElement('p');
                date.innerHTML = client[i].date;
                dateField.appendChild(date);

                //More
                var moreField = document.createElement('div');
                moreField.setAttribute('id', 'rMore');
                row.appendChild(moreField);

                var more = document.createElement('i');
                more.classList.add('fas');
                more.classList.add('fa-ellipsis-h');
                moreField.appendChild(more);
            }
        }
    }

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                //Quitar rueda cargando
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send();
}

function orderClients(param) {
    changeTotal();
    table.innerHTML = '';

    //Table headers
    var row2 = document.createElement('div');
    row2.classList.add('th');
    table.appendChild(row2);

    var hCheck = document.createElement('div');
    hCheck.setAttribute('id', 'thCheck');
    row2.appendChild(hCheck);

    var hInfo = document.createElement('div');
    hInfo.setAttribute('id', 'thInfo');
    hInfo.innerHTML = 'Información básica';
    row2.appendChild(hInfo);

    var hAge = document.createElement('div');
    hAge.setAttribute('id', 'thAge');
    hAge.innerHTML = 'Edad';
    row2.appendChild(hAge);

    var hGender = document.createElement('div');
    hGender.setAttribute('id', 'thGender');
    hGender.innerHTML = 'Género';
    row2.appendChild(hGender);

    var hPhone = document.createElement('div');
    hPhone.setAttribute('id', 'thPhone');
    hPhone.innerHTML = 'Teléfono';
    row2.appendChild(hPhone);

    var hDate = document.createElement('div');
    hDate.setAttribute('id', 'thDate');
    hDate.innerHTML = 'Fecha registro';
    row2.appendChild(hDate);

    var hMore = document.createElement('div');
    hMore.setAttribute('id', 'thMore');
    row2.appendChild(hMore);

    var http_request = new XMLHttpRequest();

    http_request.open('GET', urlDir1 + 'php/sortData.php?opt=' + param);

    //Ejecutar rueda de cargando

    http_request.onload = function () {
        var client = JSON.parse(http_request.responseText);

        if (client.error) {
            errors.classList.remove('hidden');
        } else {
            for (var i = 0; i < client.length; i++) {
                //Table row
                var row = document.createElement('div');
                row.classList.add('clientRow');
                row.setAttribute('id', client[i].id);
                row.setAttribute('onclick', 'showClient(this)');
                table.appendChild(row);

                //Checkbox
                var checkField = document.createElement('div');
                checkField.setAttribute('id', 'rCheck01');
                row.appendChild(checkField);

                var checkbox = document.createElement('INPUT');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', 'rCheck02');
                checkField.appendChild(checkbox);

                //User
                var userField = document.createElement('div');
                userField.classList.add('rUserInfo');
                userField.setAttribute('id', 'rUserInfo');
                row.appendChild(userField);

                var image = document.createElement('img');
                image.setAttribute('src', 'img/cuervo-logo-min.png');
                image.classList.add('userPic');
                userField.appendChild(image);

                var name = document.createElement('p');
                name.setAttribute('id', 'rUser');
                name.innerHTML = client[i].name;
                userField.appendChild(name);

                //Age
                var ageField = document.createElement('div');
                ageField.setAttribute('id', 'rAge');
                row.appendChild(ageField);

                var age = document.createElement('p');
                age.innerHTML = client[i].age;
                ageField.appendChild(age);

                //Gender
                var genderField = document.createElement('div');
                genderField.setAttribute('id', 'rGender');
                row.appendChild(genderField);

                var gender = document.createElement('p');
                gender.innerHTML = client[i].gender;
                genderField.appendChild(gender);

                //Phone
                var phoneField = document.createElement('div');
                phoneField.setAttribute('id', 'rPhone');
                row.appendChild(phoneField);

                var phone = document.createElement('p');
                phone.innerHTML = client[i].phone;
                phoneField.appendChild(phone);

                //Date
                var dateField = document.createElement('div');
                dateField.setAttribute('id', 'rDate');
                row.appendChild(dateField);

                var date = document.createElement('p');
                date.innerHTML = client[i].date;
                dateField.appendChild(date);

                //More
                var moreField = document.createElement('div');
                moreField.setAttribute('id', 'rMore');
                row.appendChild(moreField);

                var more = document.createElement('i');
                more.classList.add('fas');
                more.classList.add('fa-ellipsis-h');
                moreField.appendChild(more);
            }
        }
    }

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                //Quitar rueda cargando
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send();
}

function showClient(row) {
    var id = row.getAttribute('id');

    window.location = 'client.php?id=' + id;
}

//Toggle admin menu
var adminMenu = document.getElementById('controls'),
    adminBtn = document.getElementById('adminControl');

adminBtn.addEventListener('click', function () {
    adminMenu.classList.toggle('hidden');
});

//Logo redirect to index
var logo = document.getElementById('logo');

logo.addEventListener('click', function () {
    window.location = 'index.php';
});

//Show number of clients
function changeTotal() {
    var ammont = document.getElementsByClassName('clientRow');
    setTimeout(function () {
        var total = document.querySelector('#count');
        total.innerHTML = ammont.length;
    }, 100);
}

//Search feature
function searchClient(word) {
    word.toUpperCase();
    changeTotal();
    table.innerHTML = '';

    //Table headers
    var row2 = document.createElement('div');
    row2.classList.add('th');
    table.appendChild(row2);

    var hCheck = document.createElement('div');
    hCheck.setAttribute('id', 'thCheck');
    row2.appendChild(hCheck);

    var hInfo = document.createElement('div');
    hInfo.setAttribute('id', 'thInfo');
    hInfo.innerHTML = 'Información básica';
    row2.appendChild(hInfo);

    var hAge = document.createElement('div');
    hAge.setAttribute('id', 'thAge');
    hAge.innerHTML = 'Edad';
    row2.appendChild(hAge);

    var hGender = document.createElement('div');
    hGender.setAttribute('id', 'thGender');
    hGender.innerHTML = 'Género';
    row2.appendChild(hGender);

    var hPhone = document.createElement('div');
    hPhone.setAttribute('id', 'thPhone');
    hPhone.innerHTML = 'Teléfono';
    row2.appendChild(hPhone);

    var hDate = document.createElement('div');
    hDate.setAttribute('id', 'thDate');
    hDate.innerHTML = 'Fecha registro';
    row2.appendChild(hDate);

    var hMore = document.createElement('div');
    hMore.setAttribute('id', 'thMore');
    row2.appendChild(hMore);

    var http_request = new XMLHttpRequest();

    http_request.open('GET', urlDir1 + 'php/searchClient.php?w=' + word);

    //Ejecutar rueda de cargando

    http_request.onload = function () {
        var client = JSON.parse(http_request.responseText);
        //console.log(http_request.responseText);

        if (client.error) {
            errors.classList.remove('hidden');
        } else {
            for (var i = 0; i < client.length; i++) {
                //Table row
                var row = document.createElement('div');
                row.classList.add('clientRow');
                row.setAttribute('id', client[i].id);
                row.setAttribute('onclick', 'showClient(this)');
                table.appendChild(row);

                //Checkbox
                var checkField = document.createElement('div');
                checkField.setAttribute('id', 'rCheck01');
                row.appendChild(checkField);

                var checkbox = document.createElement('INPUT');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', 'rCheck02');
                checkField.appendChild(checkbox);

                //User
                var userField = document.createElement('div');
                userField.classList.add('rUserInfo');
                userField.setAttribute('id', 'rUserInfo');
                row.appendChild(userField);

                var image = document.createElement('img');
                image.setAttribute('src', 'img/cuervo-logo-min.png');
                image.classList.add('userPic');
                userField.appendChild(image);

                var name = document.createElement('p');
                name.setAttribute('id', 'rUser');
                name.innerHTML = client[i].name;
                userField.appendChild(name);

                //Age
                var ageField = document.createElement('div');
                ageField.setAttribute('id', 'rAge');
                row.appendChild(ageField);

                var age = document.createElement('p');
                age.innerHTML = client[i].age;
                ageField.appendChild(age);

                //Gender
                var genderField = document.createElement('div');
                genderField.setAttribute('id', 'rGender');
                row.appendChild(genderField);

                var gender = document.createElement('p');
                gender.innerHTML = client[i].gender;
                genderField.appendChild(gender);

                //Phone
                var phoneField = document.createElement('div');
                phoneField.setAttribute('id', 'rPhone');
                row.appendChild(phoneField);

                var phone = document.createElement('p');
                phone.innerHTML = client[i].phone;
                phoneField.appendChild(phone);

                //Date
                var dateField = document.createElement('div');
                dateField.setAttribute('id', 'rDate');
                row.appendChild(dateField);

                var date = document.createElement('p');
                date.innerHTML = client[i].date;
                dateField.appendChild(date);

                //More
                var moreField = document.createElement('div');
                moreField.setAttribute('id', 'rMore');
                row.appendChild(moreField);

                var more = document.createElement('i');
                more.classList.add('fas');
                more.classList.add('fa-ellipsis-h');
                moreField.appendChild(more);
            }
        }
    }

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                //Quitar rueda cargando
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send();
}
