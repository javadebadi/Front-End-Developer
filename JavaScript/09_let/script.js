// let: to declare a block scope variable
// smaler than var

// see the problem with var keyword
console.log("Exampel of only var:");

function varScope(){
  var localVar = 1.5;

  // define a block and declare a varaible with
  // same name and with var keyword
  if (true){
    var localVar = "Different localVar";
    console.log("localVar (with var): ", localVar);
  };

  console.log("localVar: ", localVar)
};

varScope();


// see how let keyword solves issues in above
console.log("Exampel of var and let:");

function letScope(){
  var localVar = 1.5;

  // define a block and declare a varaible with
  // same name and with let keyword
  if (true){
    let localVar = "Different localVar";
    console.log("localVar (with let): ", localVar);
  };

  console.log("localVar: ", localVar)
};

letScope();
