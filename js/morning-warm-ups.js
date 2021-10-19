
    //Oct 13 2021 warm up
    //
    // function num() {
    //     return 7;
    // }
    // console.log(num());
    //
    // if (false) {
    //     console.log("Am I Seen?");
    //If will only run if it's true. If false, then it won't show.
    //if/else statement is different. ELSE will show.


    // var hadBreakfast = Boolean(Math.round(Math.random()));
    // var hadBreakfastMessage = (hadBreakfast) ? "I had breakfast." : "I haven't had breakfast.";
    // console.log(hadBreakfast);
    // console.log(hadBreakfastMessage);

    // function typeCheck(input) {
    //     if (typeof input == "string") {
    //         return "Haha, it's a string of a string!";
    //     } else {
    //     return (input)
    //     }
    // }
    //
    // console.log(typeCheck(1))

    function logFizzBuzz(count) {
        for (var i = 1; i <= count; i++) {
        var out = "";
        if (i % 3 === 0) {
            out += 'Fizz;'
        }
        if (i % 5 === 0) {
            out += 'Buzz';
        }
        console.log(out || i);
        }
    };

logFizzBuzz(100);
