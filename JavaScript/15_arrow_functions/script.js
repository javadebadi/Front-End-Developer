// arrow functions



const names = ["Javad", "Haleh", "Reza", "Mohammad"];


// concise arrow fucntion expression
const name_upper = names.map(
  name => name.toUpperCase()
)

console.log(name_upper);

// arrow function expression with zero arguments
const printStatus = () => {
  let status = "I am fine";
  return status;
};

console.log(printStatus());

// arow function with more than 1 arguments
const sum = (a, b) => {
  return a+b;
};

console.log(sum(20, 10));
