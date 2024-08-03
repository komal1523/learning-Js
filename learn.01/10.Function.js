//******************************************  FUNCTION  ******************************************************* */

function sayHello(){   // function definition
    console.log('K');
    console.log('o');
    console.log('m');
    console.log('a');
    console.log('l');
}
sayHello()        // calling function

// adding two number using function in js

function  addTwoNum(num1, num2){
 //console.log(num1+num2)
  return num1+num2


}
console.log(addTwoNum(5, 7));




// function to add two numbers
function sumOfTwoNum(x ,y){
  return x+y;
 
}
let a=1;
let b=2;
let c=3;
console.log("sum of two numbers :",sumOfTwoNum(a,b));
console.log("sum of two numbers :",sumOfTwoNum(b,c));
console.log("sum of two numbers :",sumOfTwoNum(c,a));

//   REST OPERATOR (...)

function calNum(num1,num2){
return num1+num2;
}
//console.log(calNum(100,200,300));    // result is 100+200=300

// but in NEST OPERATOR
// case 1 )    
 function calNum(...num1){
  return num1;
  }
  //console.log(calNum(100,200,300));
  
  // case 2 )    
 function calNum(var1,var2,...num1){
  return num1;
  }
  console.log(calNum(100,200,300,400));


