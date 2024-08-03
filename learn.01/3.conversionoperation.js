


//let score="33"                    
//let score = null  
let score = undefined

//console.log(typeof score);
// or console.log(typeof(score));

//converting  the value into number

let valueInNumber= Number(score)
//console.log(typeof( valueInNumber));
//console.log( valueInNumber);  

//note:---
// "23" === 33
//"23abc"== NaN but type is number
// null == 0
//undefined == NaN
// true == 1 // false == 0



//converting into boollean 

let isLoggedIn= 1
let booleanisaLoggedIn = Boolean(isLoggedIn)
//console.log(booleanisaLoggedIn);

//note 

// 1 === true
// 0 === false
// "komal"=== true
// "" === false

let aNumber= 53
let stringNumber = String(aNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);



//*************************************       Operations       ***************************************

let value = 28
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3); remainder value
//console.log(2%3); quotient value

let str1="komal"
let str2=" kumari"
let str3= str1+str2
//console.log(str3);

//console.log("1"+2);
//console.log(1+"2");
//console.log("1"+2 + 2); //first string means all number are treated as string
//console.log(1+2+"3");   //last string means all before number will calculate , (1+2) will add first

// let gameCounter= 100
// gameCounter++
// console.log(gameCounter);




//const bigNumber=76620136290828n   //bigint


//array

const heros =["shaktiman", "batman"];
let myObj={
    name: "komal",             //here they are objects under{}
    age: 19,

}

//declaration of function

const myFunction=function(){
    //console.log("hello world");
}

// console.log(typeof bigNumber);    //undefined
//console.log(typeof heros);           //function object



//*******************************   Memory    *****************************************

// stack memory(primitive )                    heap memory(non-primitive)

let myName="komal"
 
//let myAnotherName= myName
let myAnotherName= "komu"

//console.log(myAnotherName);  //give the value of myName which is komal

//console.log(myName);

// example of heap

let userOne ={
    email : "user@gmail.com" ,
    upi:"user@ybl",
}
let userTwo =userOne 

userTwo.email="helloworld@gmail.com"

//console.log(userOne.email);   // here value direct fetch from original not from the copy of data
//console.log(userTwo.email);










