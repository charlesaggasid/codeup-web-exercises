/*For Loops
Create a file named for_loops.js inside the js directory and link it to your loops.html file.
    Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
For example, showMultiplicationTable(7) should output*/
//

// var number = parseInt(prompt("Number to Multiply"));
//
// for(var i = 1; i <= 10; i++) {
//     var result = i * number;
//
//     console.log('${number} * ${i} = ${result}');
// }
//

"use strict";

(function () {
    function showMultiplicationTable(num) {
        for (var i = 1; i <= 10; i++) {
            console.log(num + 'x' + i + '=' + num);
        }
    }
    showMultiplicationTable(7)


/* 3. Use a for loop and the code from the previous lessons to generate 10
random numbers between 20 and 200 and output to the console whether each number is odd or even.
For example:
123 is odd
80 is even
24 is even
199 is odd
...
*/
var random
for(var i = 1; i <= 10; i++){
    random = Math.floor(Math.random() * 180) + 20;
    if(random % 2 !== 0){
        console.log(random + " is odd number")
    }else {
        console.log(random + " is an even number!")
    }
}
/* 4. Create a for loop that uses console.log to create the output shown below.
1
22
333
4444
55555
666666
7777777
88888888
999999999
* */

var numberOfRows = 9;
var output = "";

for (var i = 1; i<= numberOfRows; i++) {
    for (var j = 1; j <= i; j++) {
        output += i + "";
    }
    console.log(output);
    output = ""
}

//other solution



/* 5. Create a for loop that uses console.log to create the output shown below.
100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5
*/

for (var i = 100; i >= 5; i-=5) {
    console.log(i);
}

})();