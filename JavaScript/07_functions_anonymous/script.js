// Anonymous functions
/* Anonymous functions are not hoisted:
They will be assigned to a variable therefore they will not be
created until javascripts reaches to them in run time.
However for named functions (function declaration) the javascript
will hoist the function declaration and the function will be
defined even before javascript reach to that fucntion use
in run */

var theMultiplication = function(a,b){
  return a*b;
}

var a = 2;
var b = 3;

console.log("result: " + theMultiplication(a,b))

// invoked immediately called function

var x = 5;
var y = 10;
var theProduct = ( function(a,b){
  return a*b;
}
)(x,y);

console.log("theProduct: " + theProduct)
