//**************** Hoisting ***************************/

getName();  // we can access and invoke the function directly
//console.log(x);  // undefined coz we cannot print value before 


var x=5;
function getName(){
    console.log("My Name is Komal");
}
// getName();




// Simple function   this is hoisting

console.log(addOne(5));   // Correct even calling before declaration is also true 
function addOne(num){
    return num+1;
}
//console.log(addOne(5));





// Expression in fuunction  function declare in variable i.e , addTwo()


//console.log(addTwo(5));   // Incorrect here calling before declaration is error
let addTwo = function(num)
{
    return num+2;
}
// console.log(addTwo(5));  // here correct 
