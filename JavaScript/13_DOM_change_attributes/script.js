// access and change attributes

const LINK = document.querySelector(".col a");
// find attirbutes
console.log(LINK.attributes);

// check existance of an attribute
console.log(LINK.hasAttribute("href"));

// get value of attribute
console.log(LINK.getAttribute("href"));

// set value for attribute
LINK.setAttribute("href", "https://www.google.com")

// get value of attribute
console.log(LINK.getAttribute("href"));
