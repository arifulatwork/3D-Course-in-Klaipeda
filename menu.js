// variables for navigation
var menu1 = document.getElementById('menu1');
var menu2 = document.getElementById('menu2');
var menu3 = document.getElementById('menu3'); // New menu for Rules
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4'); // New Rules button
var button5 = document.getElementById('button5'); // Back button

button1.onclick = function() {
    menu1.style.display = 'none';
    CreateNewWorld();
    CreateSquares(coin, 'coin');
    CreateSquares(keys, 'key');
    Timergame = setInterval(repeatFunction, 10);
    canlock = true;
}

button2.onclick = function() {
    menu1.style.display = 'none';
    menu2.style.display = 'block';
}

button3.onclick = function() {
    menu2.style.display = 'none';
    menu1.style.display = 'block';
}

button4.onclick = function() {
    menu1.style.display = 'none'; // Hide Menu 1
    menu3.style.display = 'block'; // Show Menu 3
}

button5.onclick = function() {
    menu2.style.display = 'none'; // Hide Menu 2
    menu3.style.display = 'none'; // Hide Menu 3
    menu1.style.display = 'block'; // Show Menu 1
}
