"use strict";

// https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html/31627191#31627191

//Allowed keys
var allowedKeys = {
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down',
	65: 'a',
	66: 'b',
};

// // Konami Code
// var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
// // var to remember the position of the key user has pressed so far
// var konamiCodePosition = 0;
//
// // KEYDOWN Listener
// document.addEventListener('keydown', function(e) {
// //get the value of the key code from the key map
// var key = allowedKeys[e.keyCode];
// //get the value of the required key from the konami code
// var requiredKey = konamiCode[konamiCodePosition]
//
// //compare the key with the required key
// if (key === requiredKey) {
// //move to the next key in the konami code sequence
// konamiCodePosition++;
// //if the last key is reached, activate cheats
// if (konamiCodePosition == konamiCode.length) {
// 	activateCheats();
// 	konamiCodePosition = 0;
// }
// } else {
// 	konamiCodePosition = 0
// }
// });


var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
	var key = allowedKeys[e.keyCode];
	var requiredKey = konamiCode[konamiCodePosition]
	if (key === requiredKey) {
		konamiCodePosition++;

		if (konamiCodePosition === konamiCode.length) {
			activateCheats();
			konamiCodePosition = 0;
		}
	} else {
		konamiCodePosition = 0
	}
});

function activateCheats() {
	// document.body.style.backgroundImage =
	// var audio = new Audio()
	// audio.play();
	alert('cheats activated')
}

//Click here

$('#click-me').click(function () {
	$('img').show('slow');
	$('button').hide('slow');
	$('#enter-cheat-code').show('slow');
});

$('')



