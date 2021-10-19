"use strict";

(function () {

    var input = Number(prompt("Enter an odd number between 1 and 50"))
    for (var i = 1; i < 50; i++) {
        if (i === 1) {
            console.log('Skip this number: ' + input)
        }

        if (i % 2 === 0 ) {
            continue;
        }
        if (i === input) {
            console.log('Skipping ' + input)
        } else {
            console.log('Here is an odd number: ' + i)
        }
    }

})();