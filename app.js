//Javascript Tutorial

// single line comment

/*
mutli 
line
comment
*/




// Log to console
var dim = 123; //number var
var dum = 123;
var arr = {a:1, b:2} //dictionary
console.log('Helo World!'); //string
console.log(123); //number
console.log(123+123); //addition
console.log(dim+dum); //var addtion
console.log(true); //boolean
console.log(['chicken', 'dinner', 123, 99]); // array
console.log(arr);

console.table(arr); //log as table

console.error('This is some error'); //errors
console.warn('This is a warning');  //warnings

console.time('Hello'); //time taken
    arr = arr + arr;
    console.table(arr);
console.timeEnd('Hello'); //stop timing


//var, let, const
var name= 'John Doe';
console.log(name);
name = 'Steve Smith'
console.log(name);

//init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

//rules and conventions : letters, numbers _ $
// can't start with a number


//multi word vars
var firstName = 'John'; // Camelcase
var first_name = 'Sara'; //Underscore
var FirstName = 'Tom'; // Pascal case


// let
let name2 = 'John Doe';
console.log(name2);
name2 = 'Steve Smith'
console.log(name2);

let name3 
name3 = 'Johnny Doe';
console.log(name3);


//const
const name4 = 'John';
console.log(name4);
//can't reassing
//name4 = 'Uh-oh'
console.log(name4);
// has to assign a value
//const name5; //doesn't work


//data is const dict can be changed
const person = {
    name6: 'John',
    age: 30

}
console.log(person);
person.name6 = 'Sara';
console.log(person);

//same with arrays
const numbers = [1,2,3,4,54,66,67,56];
console.log(numbers);
numbers.push(454);
console.log(numbers);



//PRIMITIVE DATATYPES

//String
const name7 = 'John Doe';
console.log(typeof name7);

//number
const myAge = 39;
console.log(typeof myAge);

//boolean
const hasKids = true;
console.log(typeof hasKids);

//Null
const car = null;
console.log(typeof car);

//undefined
let test;
console.log(typeof test);

//Symbol
const sym = Symbol();
console.log(typeof sym);



//REFERNCE TYPES

//array
const hobbies = ['movies','music','dancing'];
console.log(typeof hobbies);

//Object literal
const address = {
    city:'Weston',
    state:'Somerset'
}
console.log(typeof address);

//Date
const today = new Date();
console.log(today);
console.log(typeof today);














