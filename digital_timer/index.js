const digits = document.querySelector('.digits');
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');

let count = 0;
// 1000ms - secondOnes
// 100ms - msTens
// 10ms - msOnes
let timer = setInterval(function() {
    // 10000ms - secondTens
    if (count === 10000) {
        clearInterval(timer);
    }
}, 10);