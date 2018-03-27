// access each digit place
const digits = document.querySelector('.digits');
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');

// initialize digits to 0
secondOnes.innerHTML = '0';
secondTens.innerHTML = '0';
msTens.innerHTML = '0';
msHundreds.innerHTML = '0';

// keeps track of time in milliseconds
let ms = 0

const timer = setInterval(function() {
	// increment ms by 10 for accuracy
	ms += 10;
	// our limit is 10seconds or 10000ms
	if (ms === 10000) {
		clearInterval(timer);
	} 
	// keep track of time up to 10000ms
	else {
		// change digits to keep up with ms
		progress();
	}
}, 10);

const progress = (ms) => {
	if (ms === 10000) {
		secondTens.innerHTML = '1';
		secondOnes.innerHTML = '0';
		msHundreds.innerHTML = '0';
		msTens.innerHTML = '0';
	}
}