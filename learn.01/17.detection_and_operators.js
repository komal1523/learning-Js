

// DETECTION OF ARRAY ( check wheather the array is empty or not )

const username=[]
if (username.length==0){
    console.log("Array is empty");
    
}

//CHECK WHEATHER THE OBJECT IS EMPTY

// const empObj={}
// if(Object.Key(empObj).length===0){
//     console.log("Your Object is Empty ");
    
// }




// NULLISH OPERATOR (??)    how to handel the null and undefined values from database

let val; 

//val=5??10;
//val= null??10;
//val= undefined??10;
val= null??15??10;
console.log(val);


// TERNARY OPERATORS (?)  condition?true part : false part

const foodPrice=100;

foodPrice>50?console.log("Food is above 50"):console.log("Food is below 50");

const age=15;

age>=18?console.log("Ready for vote") : console.log("Not ready for vote");
;

