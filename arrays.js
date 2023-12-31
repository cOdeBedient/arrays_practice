// Declare a variable that stores an Array of at least 4 Strings.
// Declare a variable that stores an Array of at least 4 Numbers.
// Declare a variable that stores an Array of at least 4 Booleans.
// Commit your work.
// Call a different Array method on each of the 3 arrays you created above. On the line of code above each method call,
// write (in a JavaScript comment) an explanation in plain English as to what impact calling that method will have on that specific array.
// Commit your work.
// [Intentionally open-ended] Demonstrate your understanding of index positions in this file.
// You can write an explanation, provide some examples with the Arrays you’ve created, or anything else.
// Commit your work.

var fish = ["tuna", "mackerel", "flounder", "carp"];
var temperatures = [0, 32, 74, 90];
var votes = [true, true, false, true];

// remove the last element from the array fish.
fish.pop();

// add -4 in the 4th index position of the array temperatures.
temperatures.push(-4);

// print elements of the array votes beginning with element in the second spot and ending with the element in the third spot.
console.log(votes.slice(1, 3));

// see above for understanding of index positions. As well, let's print the element in the 3rd spot in fish and the 1st spot in temperatures.
console.log(fish[2]);
console.log(temperatures[0]);