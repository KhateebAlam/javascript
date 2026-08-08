// For of 

//["","",""]
//[{},{},{}]

const arr =[1,2,3,4,5]
for (const num of arr) {
  console.log(num);
}

const greeting = "sohail khan"
for (const greet  of greeting) {
 console.log(`Each character of string is ${greet}`);

}

// MAPs

const map = new Map()
map.set('IN', 'India')
map.set('US','United states of America')
map.set ('uk','United kingdom')
console.log(map);
for(const [key ,value] of map){
  console.log(key,":-", value);
} 

// const myObject ={
//   'game1':'cricket',
//   'game2':'football',
//   'game3':'hockey'
// }
// for(const [key,value] of Object){
//     console.log(key,":-", value);  //show error because Object is not iterable
// }

const mycoding = [
  {
    languageName:"javascript",
    languagefileName:"js"
  },
  {
           languageName:"java",
    languagefileName:"java"
  },
  
  {
              languageName:"python",
    languagefileName:"py"
  }
]
mycoding.forEach((item)=>{
  console.log(item.languageName);
})