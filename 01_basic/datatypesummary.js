// primitive / it is call by value datatype 

// 7 type : string , Number ,Boolean ,null, undefined, symbol, BigInt 

// JavaScript is a dynamic programming language

 const score = 100
 const scoreValue = 100.3

const isLoggedIn = false 
 const outsideTemp =null
 let userEmail;

//  const id = symbol('123')
//  const anotherId = symbol('123')

//  console.log(id === anotherId);


 const BigInt = 7142383179n
                              
// reference (Non primitive)

// Array ,Object ,functions

const heros = ["sohail","khan", "alam"] //array

let myObj = {             //anything inside the curly braces is called object
    name : "sohail",
    age : 22,
}

// function 
const myfunction = function(){
    console.lo("hello world "); 

}


// ++++++++++++++++++++++++++++++++++++++++

// stack(primitives) and heap (non-primitives) memory allocation

let myYoutubename = "iyc247"

let anothername = myYoutubename

anothername = "code with sohail"
console.log(myYoutubename)
console.log(anothername)

let useOne ={
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "sohail@google.com"
console.log(userOne.email);
console.log(userTwo.email);

