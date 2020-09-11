// Arrays
var countries = ["Spain", "USA", "Canda", "Germany"];

console.log("Type of countries: " + typeof countries);

// retrieve values of arrays
console.log(" ======= retrieve values =======")
console.log("value at 0th index: " + countries[0]);
// console.log("value at 1st index: " + countries[1]);
// console.log("value at 2nd index: " + countries[2]);

// find length of array
console.log("======= array length =======");
console.log("Array length : " + countries.length);
console.log("")

// array before applying methods below
console.log("Before: ", countries);

// assing value to array elements
// countries[1] = "United States of America";
// console.log("value at 1st index: " + countries[1]);

// reverse the array
// console.log("reverse array: " + countries.reverse());

// shift array: removes first value of the array
// console.log("" + countries.shift())

// unshift: add new items in front of arrays
// countries.unshift("China", "Turkey");

// pop: removes value from end of array
// countries.pop()

// push: append value to end of array
// countries.push("China", "Turkey")

// splice: remove specified number of elements starting from
// specified starting position (including position itself)
// splic(pos, n)
// countries.splice(2,1)

// indexOf =get index of some value starting from an index
// var index = countries.indexOf("Germany",1);
// console.log("index of Germany: " + index)

// join: returns values of an array as a comma separated string
// or can joint with other charactes if specifed
// var countries_string = countries.join(" | ");
// console.log(countries_string)

// after appleying methods
console.log("After: ", countries)

// slice: creates a copy of array
// var copyCountries = countries.slice()
// copyCountries.push("China")
// console.log("countries", countries)
// console.log("copyCountries", copyCountries)
