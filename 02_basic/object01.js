//Singleton
//object.create


// object literals 

const mySym = Symbol("key1") 

const JsUser ={
  name :"sohail",
  "full name": "sohailkhan",
  [mySym] : "mykey1",
  age : 22,
  location : "lucknow" ,
  email: "khan@goolge.com",
  isloggedIn : false ,
  lastLoginDays : ["monday", "saturday"]

}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])


JsUser.email= "khan19115181@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "khan19115181@microsoft.com"
console.log(JsUser)

JsUser.greeting  = function(){
   console.log("hello JS user ")
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
   console.log(`hello JS user,${this.name}`)
}
console.log(JsUser.greeting2());
