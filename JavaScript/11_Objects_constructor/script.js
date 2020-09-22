// object constructors are templates to define an object
// several times

// define object constructor
function Human(name, age, sex, national_ID=null) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.nationa_ID = national_ID;
  this.increaseAge = function(){
    return this.age++;
  };
};


// define objects
var Albert = new Human("Albert Einstein", 80, "male");
var Mary = new Human("Mary Curie", 76, "female")

console.log(Albert)
console.log(Mary)

// populating an array with humans
var humans = [
  new Human("Albert Einstein", 80, "male"),
  new Human("Mary Curie", 76, "female")
];

console.log(humans[1].name);
