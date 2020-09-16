# JavaScript

Print information in console: `console.log("SOMETHING")`
To have an alert in browser: `alert("I need to access your webcam!")`

### Data Types and Variables

### Data Types
Data types are first things to learn in every programming languages.

- number: integer or real numbers
- string: strings

#### numbers
```
var x = 2.6415;
```
to have `x` in two precision:
```
x.toFixed(2)
```


#### Strings
##### indexing
String indexing in JavaScript is similar to Python.
```
"Javad"[0]
```
returns
```
"J"
```
**Strings Escaping character**: `\"`

![Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings) to special characters of JavaScript which are very similar to Python in many important cases.

**string concatenation**: `"Javad" + " " + "Ebadi`

In JavaScript `"1" == 1` is calculated as `true` since: JavaScript is known as a loosely typed language. For this reason, in JavaScript we can uset **strict equality** opeartor, i.e. `====` or `!==` in order to check for equality or non-equality.
### Variables
To define a variable in JavaScript use `var` keyword:
```
	var name = "Javad"
```


#### Nan, null and undefined
```
var x;
console.log(x);
```
This will result in `undefined`.     
`undefined` means: absence of value

```
var x = null;
```
This will result in `null` value.     
`null` means: value of nothing

```
var x = Math.sqrt(-10)
```
will result in `NaN` value.     
`NaN	 means: Not a Number

## Conditions
### if else
```
if (//expression){
	//do something
}else{
	//do other thing
}
```
### if, else if, else
similar to c++

### Logical operators
Logical and: &&      
Logical or: ||      
Logical not: !

### Truthy and Falsy   
Every value in JavaScript has an inherent boolean value. When that value is evaluated in the context of a boolean expression, the value will be transformed into that inherent boolean value.

A value is falsy if it converts to false when evaluated in a boolean context. For example, an empty String "" is falsy because, "" evaluates to false.    

Flasy values in JavaScript are:
- the `null` type
- the `undefined` type
- the number `0`
- the empty string `""`
- the odd value `NaN`

### Ternary operator

conditional? (if condition is true): (if condition is false)

example:
```
var isExists = true;
var isAlive = isExists ? "YES" : "NO:
```

### Switch Statements
similar to c++




## Loops

similar to c++ loops (while and for)

## Examples
```
var salary = 25987;
salary.toLocaleString("en-US")
```
output:
```
"25,987"
```
----


## Hoisting
Before any JavaScript is executed all function declarations are "hoisted" to the top of their current scope
