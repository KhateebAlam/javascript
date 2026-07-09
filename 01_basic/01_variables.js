
//   JAVASCRIPT VARIABLES - COMPLETE LEARNING FILE
 


// 1. var (Old Way)

// var ko re-declare aur re-assign dono kar sakte hain.
var name = "Sohail";
console.log(name);

var name = "Khan"; // Allowed
console.log(name);

name = "Ali"; // Allowed
console.log(name);

// Function Scope
function demoVar() {
    var age = 20;
    console.log(age);
}

demoVar();
// console.log(age); // Error (age function ke bahar exist nahi karta)


// 2. let (Recommended)


// let ko re-assign kar sakte hain
// Lekin re-declare nahi kar sakte

let city = "Lucknow";
console.log(city);

city = "Mumbai";
console.log(city);

// let city = "Delhi"; // Error



// 3. const (Constant)

// const ko declare karte hi value deni padti hai

const country = "India";
console.log(country);

// country = "USA"; // Error

// 4. Block Scope


{
    let a = 10;
    const b = 20;
    var c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

// console.log(a); // Error
// console.log(b); // Error

console.log(c); // Works (var is not block scoped)

// 5. Primitive Data Types

let username = "Sohail";        // String
let age = 22;                  // Number
let isStudent = true;          // Boolean
let salary = null;             // Null
let address;                   // Undefined
let uniqueId = Symbol("id");   // Symbol
let bigNumber = 12345678901234567890n; // BigInt

console.log(typeof username);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof salary);      // object (JavaScript bug)
console.log(typeof address);
console.log(typeof uniqueId);
console.log(typeof bigNumber);



// 6. Reference Data Types
// Object
let student = {
    name: "Ali",
    age: 20,
    city: "Delhi"
};

console.log(student);

// Array
let marks = [90, 80, 70];
console.log(marks);

// Function
function greet() {
    console.log("Hello");
}

greet();



// 7. Multiple Variables

let x = 10,
    y = 20,
    z = 30;

console.log(x, y, z);

// 8. Copy Primitive Variable
let num1 = 100;
let num2 = num1;

num2 = 200;

console.log(num1); //100
console.log(num2); //200

// 9. Copy Object (Reference)


let person1 = {
    name: "Aman"
};

let person2 = person1;

person2.name = "Rahul";

console.log(person1.name); // Rahul
console.log(person2.name); // Rahul



// 10. Template Literal

let firstName = "Khan";
let lastName = "Sohail";

let fullName = `${firstName} ${lastName}`;

console.log(fullName);


// 11. Variable Naming Rules


// Valid
let userName;
let user_name;
let user1;
let $price;
let _id;

// Invalid
// let 1user;
// let user-name;
// let let;


// 13. Destructuring
let employee = {
    empName: "Khan",
    empAge: 23
};

let { empName, empAge } = employee;

console.log(empName);
console.log(empAge);


// Array Destructuring

let colors = ["Red", "Green", "Blue"];

let [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);


// ======================================
// 14. Spread Operator
// ======================================

let arr1 = [1,2,3];

let arr2 = [...arr1,4,5];

console.log(arr2);


// Object Spread

let obj1 = {
    name:"Ali"
};

let obj2 = {
    ...obj1,
    age:22
};

console.log(obj2);

// 17. Global Variable

let globalVar = "I am Global";

function showGlobal(){

    console.log(globalVar);

}

showGlobal();

// 18. Local Variable


function showLocal(){

    let localVar = "I am Local";

    console.log(localVar);

}

showLocal();

// console.log(localVar); // Error

// 19. typeof Operator

console.log(typeof "Hello");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});



// 20. Best Practices

// Use const by default
const PI = 3.14;

//  Use let when value changes
let score = 0;
score++;

//  Avoid var in modern JavaScript

console.log("Learning Variables Complete!");