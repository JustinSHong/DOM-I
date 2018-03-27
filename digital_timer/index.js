const digits = document.querySelector('.digits');
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');

let count = 0;

let timer = setInterval(function() {
    // increment count by 10
    count += 10;

    // when count reaches 10000ms
    if (count === 10000) {
        secondTens.innerHTMl = 1;
        secondOnes.innerHTMl = 0;
        msTens.innerHTMl = 0;
        msHundreds.innerHTMl = 0;
        clearInterval(timer);
    }


}, 10);




