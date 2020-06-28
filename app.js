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

// ****   NUMBERS    ******

const num1 = 100;
const num2 = 50;
let tot;
let arr2;
// Simple maths

arr2 = [1,2,3,-3,600,1.2225];
tot = num1 + num2;
tot = num1 - num2;
tot = num1 * num2;
tot = num1 / num2;
tot = num1 % num2 ; // modulus - remainder 

// Math Object

tot = Math.PI;  // PI
tot = Math.E; // Eulers Number
tot = Math.round(2.4);  // rounds to nearest int
tot = Math.ceil(2.8);  // rounds to next int
tot = Math.floor(2.4); // rounds to previous int
tot = Math.sqrt(64); //Root
tot = Math.abs(-600); // returns postive version
tot = Math.pow(8, 2); //returns power
tot = Math.min(arr2); //returns min of a array of numbers
tot = Math.max(arr2); //returns max of a array of numbers
tot = Math.random(); // returns random number between 0 and 1
tot = Math.ceil(Math.random() * 20); // random number between 1 and 20

console.log(tot);

//strings and concat

const firstName2 ='William';
const lastName2 = 'Johnson';

let val21;
val21 = firstName2 + lastName2
console.log(val21);

let val22;
val22 = firstName2 + ' ' + lastName2;
console.log(val22);

//Append

let val23;

val23 = 'Stuart ';
val23 += 'Andrews';
console.log(val23);

let val24;
const age = 39;
val24 = 'Hello, my name is ' + val23 + ' and I am ' + age; 
console.log(val24);

//Escaping
let val25;
val25 = 'That\'s awesome, I can\'t wait'; 
console.log(val25);

//Length
let val26;
val26 = firstName2.length;
console.log(val26);

//concat
let val27;
val27 = firstName2.concat(' ',lastName2);
console.log(val27);

//Change case
let val28;
val28 = firstName2.toUpperCase().concat(' ',lastName2.toUpperCase());
console.log(val28);

//array of the string
let val29;
val29 = firstName2[0,3];
console.log(val29);

//indexOf()
let val30;
val30 = firstName2.indexOf('i');
console.log(val30);

//lastIndexOf()
let val31;
val31 = firstName2.lastIndexOf('l');
console.log(val31);

//charAt()
let val32;
val32 = firstName2.charAt('2');
console.log(val32);

//get last Char
let val33;
val33 = firstName2.charAt(firstName2.length - 1);
console.log(val33);

//get subString
let val34;
val34 = firstName2.substring(0,4);
console.log(val34);

//slice()
let val35;
val35 = firstName2.slice(-4);
console.log(val35);

//split()
const str = 'Hello my name is Stuart';
let val36;
val36 = str.split(' ');
console.log(val36);

//replace())
let val37;
val37 = str.replace('Stuart', 'Barry');
console.log(val37);

//includes()
let val38;
val38 = str.includes('Stuart');
console.log(val38);

//TEMPLATE LITERALS

const myName = 'Stuart';
//const myAge = 39; //repleat from above
const job = 'Estimator';
const city = 'Weston';
let html;

//With out template strings (es5)
html =  '<ul><li>Name: ' + myName + '</li><li>Age: ' + myAge + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html =  '<ul>' +
        '<li>Name: ' + myName + '</li>' +
        '<li>Age: ' + myAge + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';

// with template literals (es6) - uses backticks to left of 1  = ` `  and ${.....} template

function Hiya(){
    return 'Good Day Sir';
};

html = `
    <ul>
        <li>Name: ${myName}</li>
        <li>Age: ${myAge}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Fave Number : ${Math.E * Math.PI}</li>
        <li>Function: ${Hiya()}</li>
        <li>Ternary Operator: ${age > 30 ? 'Over 30, Boohoo!' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML = html;

//ARRAYS

//array of numbers

const numbersArr = [43,56,33,23,44,36,5];
const numbers2Arr = new Array(22,45,33,76,54);
const fruitArr = ['Apple','Banana','Orange','Pear'];
const mixedArr = [22,'Hello', true, undefined, null, {a:1,b:1}, new Date()];

console.log(mixedArr);


//array examples

//Get length
let valArr;
valArr = numbersArr.length;
console.log(numbersArr);
console.log(valArr);

//Check to see if an array
let valArr2;
valArr2 = Array.isArray(numbersArr);
console.log(numbersArr);
console.log(valArr2);

//get single value from array
let valArr3;
valArr3 = numbersArr[3];
console.log(numbersArr);
console.log(valArr3);

//insert into array
numbersArr[2] = 100;
console.log(numbersArr);

//find index of a value in array
let valArr4;
valArr4 = numbersArr.indexOf(36);
console.log(numbersArr);
console.log(valArr4);

//mutating arrays

//adding onto the end
numbersArr.push(250);
console.log(numbersArr);

//inserting at the front;
numbersArr.unshift(120);
console.log(numbersArr);

//remove last item in array
numbersArr.pop();
console.log(numbersArr);

//remove first item
numbersArr.shift();
console.log(numbersArr);

//splice values - args are start and end
numbersArr.splice(1,3);
console.log(numbersArr);

//reversing
numbersArr.reverse();
console.log(numbersArr);

//Concatenate Array
let valArr5;
valArr5 = numbersArr.concat(numbers2Arr);
console.log(numbersArr);
console.log(valArr5);

//Sorting
fruitArr.sort();
console.log(fruitArr);
valArr5.sort();
console.log(valArr5); //doesn't sort by number, but by alphabet first character
//using the compare function : https://www.w3schools.com/js/js_array_sort.asp
//sort accending numbers
valArr5.sort(function (x,y) {
    return x-y;
});
console.log(valArr5);
//sort decending numbers
valArr5.sort(function (x,y) {
    return y-x;
});
console.log(valArr5);

// Finding
//create a function to find what you want:
function under50(passedArr) {
    return passedArr < 50;
}
let valArr6;
valArr6 = valArr5.find(under50);
console.log(valArr6);


//OBJECT LITERALS

const personObj = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function () {
        var d = new Date();
        var n = d.getFullYear();
        return n - this.age;
    },
};

let valName;
valName = personObj;
console.log(valName);

let valName2;
valName2 = personObj.firstName;
console.log(valName2);

let valName3;
valName3 = personObj['lastName'];
console.log(valName3);

let valName4;
valName4 = personObj.age;
console.log(valName4);

let valName5;
valName5 = personObj.hobbies [1];
console.log(valName5);

let valName6;
valName6 = personObj.address.state;
console.log(valName6);

let valName7;
valName7 = personObj.address['city'];
console.log(valName7);

let valName8;
valName8 = personObj.getBirthYear();
console.log(valName8);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 50},
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);    
};


//DATES

let valDate;

const todayDate = new Date();
valDate = todayDate;
console.log(valDate);

let birthDate = new Date('11-07-1980 11:25:00').toLocaleDateString('en-GB');
console.log(birthDate);
birthDate = new Date('11 July 1980 11:25:00')//.toLocaleDateString('en-GB');
console.log(birthDate);
birthDate = new Date('11/7/1980 11:25:00').toLocaleDateString('en-GB');
console.log(birthDate);

valDate = todayDate.getMonth(); //This is a 0 based array -> January = 0
console.log(valDate);
valDate = todayDate.getDate(); //This is NOT a 0 based array!
console.log(valDate);
valDate = todayDate.getDay(); //This is 0 based array starting on Sunday.
console.log(valDate);
valDate = todayDate.getFullYear();
console.log(valDate);
valDate = todayDate.getHours();
console.log(valDate);
valDate = todayDate.getMinutes();
console.log(valDate);
valDate = todayDate.getSeconds();
console.log(valDate);
valDate = todayDate.getMilliseconds();
console.log(valDate);
