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

// receives innerHTML as input
const increment(str) {

}

const progress = (ms) => {
	// ms reaches 10seconds
	if (ms === 10000) {
		secondTens.innerHTML = '1';
		secondOnes.innerHTML = '0';
		msTens.innerHTML = '0';
		msHundreds.innerHTML = '0';
	} 
	// ms is greater than or equal to 1second
	else if (ms % 1000 === 0) {
		secondOnes.innerHTML = add(secondOnes.innerHTML);
		msTens.innerHTML = '0';
		msHundreds.innerHTML = '0';
	}
	// ms is greater than or equal to 0.1s
	else if (ms % 100) {
		msTens.innerHTML = add(msTens.innerHTML);
		msHundreds.innerHTML = '0';
	}
	// default case: ms is greater than or equal to 0.01s
	else {
		msHundreds.innerHTML = add(msHundreds.innerHTML);
	}
}


