// define a recursive fucntion
function fibonacci(n){
  if ( n === 0 ){
    return 1;
  }
  if ( n === 1){
    return 1;
  }
  if ( n > 1){
    return fibonacci(n-1) + fibonacci(n-2);
  }
  else{
    return undefined;
  }
}

// print Fibonacci numbers from 0th to 10th
for (var i=0; i < 10; i++){
  console.log(fibonacci(i));
}
