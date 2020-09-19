// define object
var human = {
  name: "Javad Ebadi",
  age: 30,
  sex: "male",
  increaseAge: function(){
    return human.age++;
  }
};

// access to methods and attributes of an object
// using dot notation
console.log("age: "+human.age)
human.increaseAge()
console.log("age: "+human.age)
