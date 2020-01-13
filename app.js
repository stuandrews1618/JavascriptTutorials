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



//TYPE CONVERSIONS

//Number to String

let val;
val = 5;
console.log(val);
console.log(typeof val);
console.log(val.length);

let val2;
val2 = String(val);
console.log(val2);
console.log(typeof val2);
console.log(val2.length);

let val3;
val3 = String(4+4);
console.log(val3);
console.log(typeof val3);
console.log(val3.length);

//Boolean to String

let val4;
val4 = String(true);
console.log(val4);
console.log(typeof val4);
console.log(val4.length);

//Date to String

let val5;
val5 = String(new Date());
console.log(val5);
console.log(typeof val5);
console.log(val5.length);

//Array to String

let val6;
val6 = String([1,2,3,4,5,6,7,8,9]);
console.log(val6);
console.log(typeof val6);
console.log(val6.length);



//toString() method

let val7;
val7 = (5).toString();
console.log(val7);
console.log(typeof val7);
console.log(val7.length);

let val8;
val8 = (true).toString();
console.log(val8);
console.log(typeof val8);
console.log(val8.length);


// String to Number method 1

let val9, val10;
val9 = '5';
val10 = Number(val9);
console.log(val9);
console.log(typeof val9);
console.log(val9.length);
console.log(val10);
console.log(typeof val10);
console.log(val10.toFixed(2)); // 2 represents demical points


// String to Number method 2 parsing Integer

let val13, val14;
val13 = '5';
val14 = parseInt(val13);
console.log(val13);
console.log(typeof val13);
console.log(val13.length);
console.log(val14);
console.log(typeof val14);
console.log(val14.toFixed(2)); // 2 represents demical points


// String to Number method 3 parsing float

let val15, val16;
val15 = '5.335';
val16 = parseFloat(val15);
console.log(val15);
console.log(typeof val15);
console.log(val15.length);
console.log(val16);
console.log(typeof val16);
console.log(val16.toFixed(3)); // 3 represents demical points

// Boolean to Number

let val11,val12;
val11 = true;
val12 = Number(val11);
console.log(val11);
console.log(typeof val11);
console.log(val11.length);
console.log(val12);
console.log(typeof val12);
console.log(val12.toFixed(2)); // 2 represents demical points

// type coersion


 // string
const val17 = String(5);
const val18 = 6;
const sum = val17 + val18;
console.log(sum);
console.log(typeof sum);


//number
const val19 = String(5);
const val20 = 6;
const sum2 = Number(val19 + val20);
console.log(sum2);
console.log(typeof sum2);




