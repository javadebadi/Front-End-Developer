// access and change class
// https://developer.mozilla.org/en-US/docs/Web/API/Element

header = document.querySelector(".h1");
console.log(header.innerHTML)

// add dark background class
header.classList.add("bg-dark");

// remove dark background class
header.classList.remove("bg-dark")


// Toggle class on or off
header.classList.toggle("text-uppercase")

// check wheter a class name exists in class
var doExist = header.classList.contains("h1");
console.log(doExist);
