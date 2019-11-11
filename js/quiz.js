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
var quizNav = document.getElementById('quizNav');

btn[0].addEventListener('click', function () {
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
});

btn[1].addEventListener('click', function () {
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
});

btn[2].addEventListener('click', function () {
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
});

btn[3].addEventListener('click', function () {
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
}
