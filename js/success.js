//Header and navigation links
var logo = document.querySelector('.logo');
logo.addEventListener('click', function () {
    window.location = 'index.php';
});

var home = document.getElementById('home');
home.addEventListener('click', function () {
    window.location = 'index.php';
});

var quiz = document.getElementById('quiz');
quiz.addEventListener('click', function () {
    window.location = 'quiz.php';
});

var logout = document.getElementById('logout');
logout.addEventListener('click', function () {
    deleteCookie('client');
    window.location = 'quiz.php';
});

//Links to contact and social media
var whatsapp = document.getElementById('whatsapp');
whatsapp.addEventListener('click', function () {
    var addition = document.getElementById('addition');
    addition.classList.toggle('hidden');
});

var facebook = document.getElementById('facebook');
facebook.addEventListener('click', function () {
    window.open('https://m.me/cuervonutrition', '_blank');
});

var gmail = document.getElementById('gmail');
gmail.addEventListener('click', function () {
    window.open('mailto:contacto.cuervomx@gmail.com', '_blank');
});

var instagram = document.querySelector('.insta');
instagram.addEventListener('click', function () {
    window.open('https://instagram.com/cuervo.mx/', '_blank');
});

var luis = document.getElementById('luis');
luis.addEventListener('click', function () {
    window.open('https://wa.me/5216142352202', '_blank');
});

var yered = document.getElementById('yered');
yered.addEventListener('click', function () {
    window.open('https://wa.me/5216271056872', '_blank');
});

//Toggle navbar
var menu = document.querySelector('header nav');
if (window.screen.width == 768) {
    console.log('Ta bien we');
    menu.classList.add('hidden');
}

var bars = document.getElementById('navBar');
bars.addEventListener('click', function () {
    menu.classList.toggle('hidden');
});
