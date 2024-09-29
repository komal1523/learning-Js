

const user={
    username:" komal",
    price:1000,
    getMessage: function(){
    console.log(`${this.username},Welcome to my page and price is ${this.price}` );  // to access current context of username use .this under a specific scope
    console.log(this); // access all context inside this scope {}
    
    }

}
user.getMessage();  //komal,Welcome to my page and price is 1000
// user.username="Kom";  //Change the context of username
// user.price=2000,
// user.getMessage();  //Kom,Welcome to my page and price is 2000

// console.log(this);  // access all the context of user


// *************************  ARROW FUNCTION ******************************

// Normal function

function sum(a,b){
    return a+b;
}
 console.log(sum(2,3));
 

 // Arrow function  ( Explicit function)  

let  sumA=(a,b) =>{
    return a+b;
}
 console.log(sumA(2,3));


// For only single line  (Implicit function)  with no return and {}

 let  sumB=(a,b) =>a+b;

 console.log(sumB(2,3));


 // Only one argument 


 let double=(a) =>2*a;

 console.log(double(4));

 // Arrow function in Annanomous function

 function data(){
  student = harshit;
 }
 
// data.student('click',function(){
//     console.log("clicked...");
    
//  })



 
