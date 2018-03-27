// access each digit place
const digits = document.querySelector('.digits');
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');

// initialize digits to 0
secondOnes.innerHTML = "0";
secondTens.innerHTML = "0";
msTens.innerHTML = "0";
msHundreds.innerHTML = "0";

// keeps track of time in milliseconds
let ms = 0

let timer = setInterval(function() {

}, 10);