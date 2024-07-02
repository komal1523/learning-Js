const score=new Number(100)
//console.log(score);          //specifically define that it is a number

const balance=500
//console.log(balance);


//.toString
//console.log(balance.toString().length);  //500 and length =3
//console.log(balance.toFixed(2));    //500.00

//.toPrecision
const newNum=123.7983
//console.log(newNum.toPrecision(6));

//.tolocalestring  

const hundreds=10000000000000          

//console.log(hundreds.toLocaleString('en-IN'));



//***********************************************MATHS ********************************************************* */
  console.log(Math);   //object

 //.abs
   console.log(Math.abs(-10));   //10 ,converts only -ve value into +ve value

 //.round
  console.log(Math.round(4.86)); // 5 , it round0ff the given number and removes the decimal value 


 //.ceil
   console.log(Math.ceil(4.1));  // 5 , it gives higher value if number is addd after decimal point

 //.floor
  console.log(Math.floor(4.9))  //4 , it gives the lower value if any number is also added after decimal point 
  
 
 //.min
   console.log(Math.min(2,5,9,1,6));  // gives the minimum value similar in .max

 //.sqrt

   console.log(Math.sqrt(64));

 //.pow

   console.log(Math.pow(2,3));

 //.random      // from 0 to (n-1)    after multiply by n      

  console.log(Math.random());   // generate number between 0 - 1

  console.log(Math.random()*10);  // generate number between 0 - 9

  console.log(Math.random()*11);  // generate number between 0 - 10

  console.log(Math.random()*100);   // generate number between 0 - 99

 console.log(Math.random()*(n));   // generate number between 0 - (n-1)

 console.log(Math.floor(Math.random()*11));  // after adding .floor , it it remove decimal value and give exact no. b/w 0-10
 
 
 // .random      // 1 - n   after adding 1 

 //console.log(Math.floor((Math.random()*10 )+1));  // 1 - 10 

 //console.log(Math.floor((Math.random()*100)+1));  // 1 - 100

              //formula 
 
 //           1)         Math.floor(Math.random*(max - min))+ min        // give random no. but max is not included


 //         2)           Math.floor(Math.random*(max - min + 1))+ min          //  both min and max are included 



//  function getRandom(min, max)
//  {
//     let  x=  Math.floor(Math.random() *(max- min))+ min 
//     return x;
//  }
//  console.log(getRandom(10,25));     // here 25 is not included


function getRandom(min, max)
 {
    let  x=  Math.floor(Math.random() *(max- min+1))+ min 
    return x;
 }
 console.log(getRandom(10,25));     // here 10 and 25 both are  included

 


