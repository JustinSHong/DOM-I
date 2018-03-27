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

let count = 0;

let timer = setInterval(function() {
    // increment count by 10
    count += 10;

    // when count reaches 10000ms
    if (count === 10000) {
        secondTens.innerHTMl = '1';
        secondOnes.innerHTMl = '0';
        msTens.innerHTMl = '0';
        msHundreds.innerHTMl = '0';
        clearInterval(timer);
    }
    // when 1000 < counter < 10000
    else if (count % 1000 === 0) {
        secondOnes.innerHTMl = (Number(secondOnes.innerHTML) + 1).toString();
        msTens.innerHTMl = '0';
        msHundreds.innerHTMl = '0';
    }
    // when 100 < counter < 1000
    else if (count % 100 === 0) {
        msTens.innerHTMl = (Number(msTens.innerHTML) + 1).toString();
        msHundreds.innerHTMl = '0';
    }
    // when count < 100
    else {
        msHundreds.innerHTMl = (Number(msHundreds.innerHTML) + 1).toString();
    }

}, 10);