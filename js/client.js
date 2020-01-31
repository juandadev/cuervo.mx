var h = [document.getElementById('h01'),
         document.getElementById('h02'),
         document.getElementById('h03'),
         document.getElementById('h04')];

var container = [document.getElementById('form01'),
                 document.getElementById('form02'),
                 document.getElementById('form03'),
                 document.getElementById('form04')];

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