var btn01 = document.getElementById('btn01');

btn01.addEventListener('click', function () {
    window.location = 'quiz.php';
});

//Link to admin pane
var adminLink = document.querySelector("#adminLink");

adminLink.addEventListener('click', function () {
    window.location = 'admin.php';
});