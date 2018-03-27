const digits = document.querySelector('.digits');
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');

let count = 0;

// 100ms - msTens
// 10ms - msOnes
let timer = setInterval(function() {
    // increment count by 10
    count += 10;
    // 10000ms - secondTens
        // stop the timer
    if (count === 10000) {
        secondTens.innerHTML = 1;
        secondOnes.innerHTML = 0;
        clearInterval(timer);
    }
    // 1000ms - secondOnes
    else if (count >= 1000 && count < 10000) {
        secondOnes.innerHTML = counter / 1000;
    }
}, 10);