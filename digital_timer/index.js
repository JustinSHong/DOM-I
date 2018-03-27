const digits = document.querySelector('.digits');
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');

let count = 0;

let timer = setInterval(function() {
    // increment count by 10
    count += 10;
    // 10000ms - secondTens
        // stop the timer
    if (count === 10000) {
        secondTens.innerHTML = 1;
        secondOnes.innerHTML = 0;
        msTens.innerHTML = 0;
        msHundreds.innerHTML = 0;
        clearInterval(timer);
    }
    // 1000ms - secondOnes
    else if (count % 1000 === 0) {
        secondOnes.innerHTML = Number(count.toString()[0]) + 1;
        msTens.innerHTML = 0;
    }
    // 100ms - msTens
    else if (count % 100 === 0) {
        msTens.innerHTML = Number(count.toString()[0]) + 1;
        msHundreds.innerHTML = 0;
    } 
    // 100ms - msTens
    else if (count % 10 === 0) {
        msHundreds.innerHTML = Number(count.toString()[0]) + 1;
    }
}, 10);