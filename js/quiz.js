//For iterations
var i;

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

var titles = document.getElementsByClassName('titleCont');

btn[0].addEventListener('click', function () {
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
});

//Navigation controls
btn[4].addEventListener('click', function () {
    cont[4].classList.add('hideContent');
    cont[4].classList.remove('show');
    setTimeout(function () {
        cont[4].classList.add('hidden');
    }, 500);

    cont[0].classList.remove('ccontent01');
    titles[0].classList.remove('hidden');
    btn[0].classList.remove('hidden');
    cont[0].classList.add('c01');
    cont[0].classList.add('current');
    cont[1].classList.remove('hidden');
    setTimeout(function () {
        cont[1].classList.remove('hidden02');
    }, 500);
    cont[2].classList.remove('hidden');
    setTimeout(function () {
        cont[2].classList.remove('hidden03');
    }, 500);
    cont[3].classList.remove('hidden');
    setTimeout(function () {
        cont[3].classList.remove('hidden04');
    }, 500);
});

function displayNone(container) {
    container.style.display = 'none';
}
