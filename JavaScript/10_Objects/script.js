// define object
var human = {
  name: "Javad Ebadi",
  age: 30,
  sex: "male",
  "national-ID":1133300022,
  increaseAge: function(){
    return human.age++;
  }
};

// access to methods and attributes of an object
// using dot notation
console.log("age: "+human.age)
human.increaseAge()
console.log("age: "+human.age)


// we can use bracket notation to access attributes and
// methods of object
// especially when the name of attibute is not appropriatly chosen
console.log("sex: "+human["sex"])
console.log("national-ID: "+human["national-ID"])
