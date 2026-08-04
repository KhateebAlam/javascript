//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
    
(function coffee(){
  console.log(`DB CONNECTED`);
  
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})('sohail')