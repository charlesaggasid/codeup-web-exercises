/*For Loops
Create a file named for_loops.js inside the js directory and link it to your loops.html file.
    Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
For example, showMultiplicationTable(7) should output*/
//
// function showMultiplicationTable(num) {
//     return num
// }
// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }

/* 3. Use a for loop and the code from the previous lessons to generate 10
random numbers between 20 and 200 and output to the console whether each number is odd or even.
For example:
123 is odd
80 is even
24 is even
199 is odd
...
*/

for (var i = 0; i <= 200; i++); {
    console.log(Math.floor(Math.random() * (200 - 20 + 1) + 20));
}
{
    if (i === 0) {
        console.log(i +  " is even");
    }
    else if (i % 2 === 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
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