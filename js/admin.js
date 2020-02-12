var update = document.getElementById('update'),
    errors = document.getElementById('errors'),
    table = document.getElementById('containerList'),
    filter = document.getElementById('filter'),
    logout = document.getElementById('logout'),
    modal = document.getElementById('modal'),
    changePassModal = document.getElementById('changePassModal'),
    changePass = document.getElementById('changePass'),
    passBtn = document.getElementById('passBtn'),
    newPass = document.getElementById('newPass'),
    confirmPass = document.getElementById('confirmPass'),
    passError = document.getElementById('passError'),
    passSuccess = document.getElementById('passSuccess'),
    changePic = document.getElementById('changePic'),
    changePicModal = document.getElementById('changePicModal'),
    errorPic = document.getElementById('errorPic'),
    adminPic = document.getElementById('adminPic'),
    currentPic = document.getElementById('currentPic'),
    modifyAdmin = document.getElementById('modifyAdmin'),
    addAdmin = document.getElementById('addAdmin'),
    changeNameModal = document.getElementById('changeNameModal'),
    nameBtn = document.getElementById('nameBtn'),
    newName = document.getElementById('newName'),
    addUserModal = document.getElementById('addUserModal'),
    newUser = document.getElementById('newUser'),
    newUsPass = document.getElementById('newUsPass'),
    newUserBtn = document.getElementById('newUserBtn'),
    userSuccess = document.getElementById('userSuccess'),
    moreBtn = document.getElementById('more'),
    moreOptions = document.getElementById('moreOptions'),
    deleteClient = document.getElementById('deleteClient'),
    deleteConfirm = document.getElementById('deleteConfirm'),
    deleteYes = document.getElementById('deleteYes'),
    deleteNo = document.getElementById('deleteNo');

var id_client,
    name_client,
    age_client,
    gender_client,
    phone_client,
    date_quiz;

loadClients();
getPic();

if (errorPic) {
    setTimeout(function () {
        errorPic.classList.toggle('hidden');
    }, 4000);
}

//Close modal when click ouside
window.onclick = function (event) {
    if (event.target == modal) {
        if (changePassModal.classList.contains('show')) {
            changePassModal.classList.toggle('show');
            changePassModal.classList.toggle('hidden');
        } else if (changePicModal.classList.contains('show')) {
            changePicModal.classList.toggle('show');
            changePicModal.classList.toggle('hidden');
        } else if (changeNameModal.classList.contains('show')) {
            changeNameModal.classList.toggle('show');
            changeNameModal.classList.toggle('hidden');
        } else if (addUserModal.classList.contains('show')) {
            addUserModal.classList.toggle('show');
            addUserModal.classList.toggle('hidden');
        } else if (deleteConfirm.classList.contains('show')) {
            deleteConfirm.classList.toggle('show');
            deleteConfirm.classList.toggle('hidden');
        }
        modal.classList.toggle('hidden');
    }
}

moreBtn.addEventListener('click', function () {
    moreOptions.classList.toggle('hidden');
});

deleteClient.addEventListener('click', function () {
    var clientCount = table.childElementCount - 1;
    var rows = document.getElementsByClassName('clientRow');

    for (let i = 0; i < clientCount; i++) {
        if (rows[i].firstElementChild.firstElementChild.checked) {
            modal.classList.toggle('hidden');
            deleteConfirm.classList.toggle('hidden');
            deleteConfirm.classList.toggle('show');
            deleteYes.setAttribute('onclick', 'deleteClients()');
            break;
        }
    }
});

deleteNo.addEventListener('click', function () {
    deleteConfirm.classList.toggle('show');
    deleteConfirm.classList.toggle('hidden');
    modal.classList.toggle('hidden');
    moreOptions.classList.toggle('hidden');
});

//Admin functions
addAdmin.addEventListener('click', function () {
    modal.classList.toggle('hidden');
    addUserModal.classList.toggle('hidden');
    addUserModal.classList.toggle('show');
});

newUserBtn.addEventListener('click', function () {
    addUserAdmin();
});

modifyAdmin.addEventListener('click', function () {
    modal.classList.toggle('hidden');
    changeNameModal.classList.toggle('hidden');
    changeNameModal.classList.toggle('show');
});

nameBtn.addEventListener('click', function () {
    changeName();
});

changePic.addEventListener('click', function () {
    modal.classList.toggle('hidden');
    changePicModal.classList.toggle('hidden');
    changePicModal.classList.toggle('show');
});

changePass.addEventListener('click', function () {
    modal.classList.toggle('hidden');
    changePassModal.classList.toggle('hidden');
    changePassModal.classList.toggle('show');
});

passBtn.addEventListener('click', function () {
    changePassConf();
});

function deleteClients() {
    var clientCount = table.childElementCount - 1;
    var rows = document.getElementsByClassName('clientRow');

    for (let i = 0; i < clientCount; i++) {
        if (rows[i].firstElementChild.firstElementChild.checked) {
            var http_request = new XMLHttpRequest();

            http_request.open('GET', urlDir1 + 'php/deleteClient.php?id=' + rows[i].firstElementChild.firstElementChild.dataset.idClient);

            http_request.onreadystatechange = function () {
                if (http_request.readyState == XMLHttpRequest.DONE) {
                    if (http_request.status == 200) {
                        loadClients();
                        setTimeout(function () {
                            deleteConfirm.classList.toggle('show');
                            deleteConfirm.classList.toggle('hidden');
                            modal.classList.toggle('hidden');
                        }, 1000);

                        moreOptions.classList.toggle('hidden');
                        console.log('caca');
                    } else {
                        console.log('Hubo un error');
                    }
                }
            }

            http_request.send();
        }
    }
}

function getPic() {
    var http_request = new XMLHttpRequest();

    http_request.open('GET', urlDir1 + 'php/getPhoto.php?admin=' + adminSession);

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                var pic = http_request.responseText;

                adminPic.style.backgroundImage = "url('img/users/" + pic + "')";
                adminPic.style.backgroundSize = 'cover';
                adminPic.style.backgroundPosition = 'center center';

                currentPic.style.backgroundImage = "url('img/users/" + pic + "')";
                currentPic.style.backgroundSize = 'cover';
                currentPic.style.backgroundPosition = 'center center';

            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send();
}

function addUserAdmin() {
    var newU = newUser.value;
    var newP = newUsPass.value;
    var admin = newUserBtn.dataset.admin;

    var http_request = new XMLHttpRequest();

    http_request.open('GET', urlDir1 + 'php/addUser.php?n=' + newU + '&pass=' + newP + '&admin=' + admin);

    http_request.onload = function () {

    }

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                var serverResponse = JSON.parse(http_request.responseText);

                if (userSuccess.classList.contains('hidden')) {
                    userSuccess.classList.toggle('hidden');
                    userSuccess.firstElementChild.innerHTML = serverResponse[0];
                }

                setTimeout(function () {
                    userSuccess.classList.toggle('hidden');
                    addUserModal.classList.toggle('show');
                    addUserModal.classList.toggle('hidden');
                    modal.classList.toggle('hidden');
                }, 3000);
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send();
}

function changeName() {
    var newN = newName.value;
    var admin = nameBtn.dataset.admin;

    var http_request = new XMLHttpRequest();

    http_request.open('GET', urlDir1 + 'php/changeName.php?n=' + newN + '&admin=' + admin);

    http_request.onload = function () {

    }

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                window.location = 'admin.php';
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send();
}

function changePassConf() {
    var newP = newPass.value;
    var confirmP = confirmPass.value;
    var admin = passBtn.dataset.admin;

    var http_request = new XMLHttpRequest();

    http_request.open('GET', urlDir1 + 'php/changePass.php?n=' + newP + '&c=' + confirmP + '&admin=' + admin);

    http_request.onload = function () {

    }

    http_request.onreadystatechange = function () {
        if (http_request.readyState == XMLHttpRequest.DONE) {
            if (http_request.status == 200) {
                var serverResponse = JSON.parse(http_request.responseText);

                if (serverResponse[0] == 'error') {
                    passError.firstElementChild.innerHTML = serverResponse[1];
                    passError.classList.toggle('hidden');

                    setTimeout(function () {
                        passError.classList.toggle('hidden');
                    }, 4000);
                } else {
                    passSuccess.classList.toggle('hidden');

                    setTimeout(function () {
                        passSuccess.classList.toggle('hidden');
                        changePassModal.classList.toggle('hidden');
                        modal.classList.toggle('hidden');
                    }, 2000);
                }
            } else {
                console.log('Hubo un error');
            }
        }
    }

    http_request.send();
}

logout.addEventListener('click', function () {
    window.location = urlDir1 + 'php/logout.php';
});

update.addEventListener('click', function () {
    loadClients();
});

filter.onchange = function () {
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
                row.setAttribute('id', client[i].id);
                row.classList.add('clientRow');
                table.appendChild(row);

                //Checkbox
                var checkField = document.createElement('label');
                checkField.setAttribute('id', 'rCheck01');
                checkField.setAttribute('for', 'rCheck' + client[i].id);
                checkField.classList = 'rCheck';
                row.appendChild(checkField);

                var checkbox = document.createElement('INPUT');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', 'rCheck' + client[i].id);
                checkbox.dataset.idClient = client[i].id;
                checkField.appendChild(checkbox);

                var spanCheck = document.createElement('span');
                spanCheck.classList = 'checkmark';
                checkField.appendChild(spanCheck);

                //User
                var userField = document.createElement('div');
                userField.classList.add('rUserInfo');
                userField.dataset.id = client[i].id;
                userField.setAttribute('id', 'rUserInfo');
                userField.setAttribute('onclick', 'showClient(this)');
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
    var id = row.dataset.id;

    window.location = 'client.php?id=' + id;
}

//Toggle admin menu
var adminMenu = document.getElementById('controls'),
    adminBtn = document.getElementById('adminControl');

adminBtn.addEventListener('click', function () {
    adminMenu.classList.toggle('hidden');
    adminMenu.classList.toggle('show');
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
