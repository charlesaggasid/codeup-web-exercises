"use strict";

//While Loops
// Create a file named while.js in the js directory.
// Create a while loop that uses console.log() to create the output shown below.
(function() {
    var i = 2;

    do {
        console.log(i);
        (i *=2);
    } while (i<= 65536)


    // Ice cream

 var conesPurchased;
    var allCones = Math.floor(Math.random() * 50) + 50;
    do {
        conesPurchased = Math.floor(Math.random() * 5) + 1;
        console.log(allCones + " :cones left");
        if(conesPurchased > allCones) {
            console.log("Cannot sell you " + conesPurchased + " cones, I have " + allCones);
            continue;
        } else {
            console.log(conesPurchased + " cones sold");
            allCones -= conesPurchased;
        }

    } while (allCones > 0);
    console.log("Yay! I sold them all!");

})();