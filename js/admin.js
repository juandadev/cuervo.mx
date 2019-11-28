var update = document.getElementById('update'),
    errors = document.getElementById('errors'),
    table = document.getElementById('containerList');

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

function loadClients() {
    table.innerHTML = '';
    //Tbody
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    
    //Table headers
    var row2 = document.createElement('tr');
    tbody.appendChild(row2);
    
    var hCheck = document.createElement('th');
    row2.appendChild(hCheck);
    
    var hInfo = document.createElement('th');
    hInfo.innerHTML = 'Información básica';
    row2.appendChild(hInfo);
    
    var hAge = document.createElement('th');
    hAge.innerHTML = 'Edad';
    row2.appendChild(hAge);
    
    var hGender = document.createElement('th');
    hGender.innerHTML = 'Género';
    row2.appendChild(hGender);
    
    var hPhone = document.createElement('th');
    hPhone.innerHTML = 'Teléfono';
    row2.appendChild(hPhone);
    
    var hDate = document.createElement('th');
    hDate.innerHTML = 'Fecha registro';
    row2.appendChild(hDate);
    
    var hMore = document.createElement('th');
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
                var row = document.createElement('tr');
                row.setAttribute('id', client[i].id);
                row.setAttribute('onclick', 'showClient(this)');
                tbody.appendChild(row);

                //Checkbox
                var checkField = document.createElement('td');
                row.appendChild(checkField);

                var checkbox = document.createElement('INPUT');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', 'rCheck');
                checkField.appendChild(checkbox);

                //User
                var userField = document.createElement('td');
                userField.classList.add('rUserInfo');
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
                var ageField = document.createElement('td');
                row.appendChild(ageField);

                var age = document.createElement('p');
                age.setAttribute('id', 'rAge');
                age.innerHTML = client[i].age;
                ageField.appendChild(age);

                //Gender
                var genderField = document.createElement('td');
                row.appendChild(genderField);

                var gender = document.createElement('p');
                gender.setAttribute('id', 'rGender');
                gender.innerHTML = client[i].gender;
                genderField.appendChild(gender);

                //Phone
                var phoneField = document.createElement('td');
                row.appendChild(phoneField);

                var phone = document.createElement('p');
                phone.setAttribute('id', 'rPhone');
                phone.innerHTML = client[i].phone;
                phoneField.appendChild(phone);

                //Date
                var dateField = document.createElement('td');
                row.appendChild(dateField);

                var date = document.createElement('p');
                date.setAttribute('id', 'rDate');
                date.innerHTML = client[i].date;
                dateField.appendChild(date);

                //More
                var moreField = document.createElement('td');
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
