// Anonymous functions
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
