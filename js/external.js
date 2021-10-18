console.log("Hello from external Javascript");

alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color?");
alert("Amazing, " + favoriteColor + " is my favorite color too!");

var dailyCost = 3;

var mermaidAnswer = parseFloat(prompt("How many days are you renting Little Mermaid?"));
alert("That will be " + "$" + (dailyCost * mermaidAnswer));

var bearAnswer = parseFloat(prompt("How many days are you renting Brother Bear?"));
alert("That will be " + "$" + (dailyCost * bearAnswer));

var herculesAnswer = parseInt(prompt("How many days are you renting Hercules?"));
alert("That will be " + "$" + (dailyCost * herculesAnswer));

// var askMore = confirm("Do you need to add more?");
// console.log("askMore");
alert("Your total is " + "$" + (mermaidAnswer + bearAnswer + herculesAnswer) * dailyCost);

////////// Number 2 /////////////
var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;

var googleHours = parseFloat(prompt("Hours worked for Google?"));
var amazonHours = parseFloat(prompt("Hours worked for Amazon?"));
var facebookHours = parseFloat(prompt("Hours worked for Facebook?"));

var totalPay= (googleHours * googlePay) + (amazonPay * amazonHours) + (facebookPay * facebookHours);
alert("Your total pay is $ " + totalPay + ".");

////////////// Number 3 ///////////////

// A student can be enrolled in a class only if the
//     class is not full and the
// class schedule does not conflict with her current schedule.

var classIsNotFull = true;
var sizeOfClass = true;

var welcomeScreeen = alert("Thank you for choosing this school. I'm here to make sure class is not full and doesn't conflict with your schedule.");
var classIsNotfull = confirm("Class is not full");
var notConflict = confirm("Does your current class schedule conflict with this class?");
console.log(notConflict);

 if (notConflict === true) {
     alert("Try again next semester!")}
else {
  alert("Congrats! You can enroll!")
}


////////////// Number 4 ///////////////
// A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to
// buy a specific amount of products.


var welcome = alert("Welcome to my store!")
var memberConfirm = confirm("Please confirm if you are a member.")
if
if (memberConfirm === true) {
    alert("Congratulations! Premium members do not need to buy a specific amount of products.")
}
alert("The offer was applied")

if (memberConfirm === true) {
    confirm("Please confirm you purchased more than 2 items and the offer has not expired.")
} else {

}

alert("Thank you for shopping! Enjoy your discount.")