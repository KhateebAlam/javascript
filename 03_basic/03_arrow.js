const user = {
  username : "sohail",
  price : 1999,

  welcomeMessage :function(){
    console.log(`${this.username}, welocome to our website`);

  }

}
// user.welcomeMessage()
// user.username = "khateeb alam ";
// user.welcomeMessage()

// console.log(this)

// function chai(){
//   let username = "sohail";
//   console.log(this.username);
  
// }
// chai()
//// output: undefined


// const chai  = function(){
//   let username = "sohail"
//   console.log(this.username);


// }
// chai()
/// output: undefined

// const chai = () =>{
//   let username = "sohail"

// console.log(this);
// }
   
// chai()
/// output: {}

// const addTwo =(a,b) =>{
//   return a+b ;

// }

// console.log(addTwo(2,3));


// const addTwo =(a,b) =>  {
//   return a+b ;

// }  

// console.log(addTwo(2,3));


// const addTwo =(a,b) =>  (a+b) 

// console.log(addTwo(2,3));


const addTwo =(a,b) =>  ({
  username : "sohail",
}) 
console.log(addTwo());