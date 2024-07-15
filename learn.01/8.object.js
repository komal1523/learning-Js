//*******************************  OBJECT ************************************************ */

// there are two types of declaration an object 1) Literals 2) constructors

//note :  Singleton is one type object which declares only in constructor ot in literal

// syntax of object : 
 let person ={
    firstName: "komal",
    lastName: "kumari",
    gender:"female",
  

 };

 person.lastName="Rana"  // we can mahe changes in values of an object
 //console.log(person.firstName);
 //console.log(person['lastName']);

//  deleteperson.lastName;

//console.log("height" in person); // false , to check wheather the property is present or not

// Accessing every properties of an object

for( let key in person) {
   //console.log(key);
}
  // Accessing keys with values

  for( let key in person) {
   //console.log(key + ": " + person[key]);
}

// There are four ways of making object

// 1)  by annanomous function

person.sayHello=function(){
  // console.log("Hello !");  //print hello
}
person.sayHello();

// 2) by acking normal function
function greet(){
//console.log("Hello !");
}
person.sayHello = greet;
person.sayHello();    //print hello

// assigning a function inside the object
let myInfo={
   firstName: "komal",
   lastName: "kumari",
   gender:"female",
   sayHello(){
     console.log(`Hello I am ${this.firstName} and I am doing ${degree.course} `);
   }

};
 
let degree={
   course:" BCA" ,
}
myInfo.sayHello();



  
