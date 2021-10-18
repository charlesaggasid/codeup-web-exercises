"use strict";

/* ########################################################################## */
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor() {
//   var chooseColor = prompt("Choose a color.");
//   if (chooseColor === "red") {
//     return alert("Red is alright. Too bright...");
//   }
//   if (chooseColor === "orange") {
//     return alert("Texas color! GO Horns!");
//   }
//   if (chooseColor === "yellow") {
//     return alert("Yellow is amazin");
//   } else {
//     return alert("The color is not in my list, sorry...");
//   }
// }
// console.log(analyzeColor());

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor() {
//   var chooseColor = prompt("Choose a color.");

//   switch (chooseColor) {
//     case "blue":
//       alert("Red is alright. Too bright...");
//       break;

//     case "orange":
//       alert("Texas color! GO Horns!");
//       break;

//     case "yellow":
//       alert("Yellow is amazin");
//       break;

//     default:
//       alert("The color is not in my list, sorry...");
//       break;
//   }
// }
// console.log(analyzeColor());

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// function randomChooseColor(colors) {
//   alert(randomColor);
// }
// console.log(randomChooseColor());

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumberPick, totalAmount) {
//   var totalPriceWithDiscount;
//   switch (luckyNumberPick) {
//     case 0:
//       totalPriceWithDiscount = totalAmount;
//       break;

//     case 1:
//       totalPriceWithDiscount = totalAmount - totalAmount * 0.1;
//       break;

//     case 2:
//       totalPriceWithDiscount = totalAmount - totalAmount * 0.25;
//       break;

//     case 3:
//       totalPriceWithDiscount = totalAmount - totalAmount * 0.35;
//       break;

//     case 4:
//       totalPriceWithDiscount = totalAmount - totalAmount * 0.5;
//       break;

//     case 5:
//       totalPriceWithDiscount = 0;
//       break;

//     default:
//       alert("No discount this time.");
//       break;
//   }
//   return totalPriceWithDiscount;
// }
// alert(calculateTotal(6, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// function calculateTotal(luckyNumber, totalAmount) {
//     return luckyNumber + totalAmount;
// }

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// var enterNumber = confirm("Would you like to enter a number?");
// if (enterNumber === true) {
//     var enterANumber = Number(prompt("Enter a number here:"));
//     if (enterANumber % 2 === 0) {
//         var isOdd = alert("Your number is odd!");
//     }
//     if (enterANumber = Number && enterANumber % 2 == 0) {
//         var isEven = alert("Your number is even");
//     }
// }

var enterNumber = confirm("Would you like to enter a number?");
if (enterNumber === true) {
    var number1 = parseInt(prompt("Enter a number: "));

    var result = (number1 % 2 == 0) ? "even" : "odd";
    alert('The number is ' + result + ".");

    alert('Total is ' + (number1 + 100));
    alert("That number is a " + + " number.");

} else {
    alert("Thanks for playing.")
}

if (number1 > 0) {
    alert("Number is positive!");
}else{
    alert("That number is negative!");
}
