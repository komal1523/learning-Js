
//************  Truthy anf Falsy Value ********************* */

// Truthy value ---- true ,"0" , 'false'  , " " , [] , {} , function(){}


const username="kom@gmail.com";
if(username){                  // check true part without any condition
    console.log(`I got, your Email is ${username}`);
    
}else{
    console.log(`Not got your Email`);
    
}

// const valueIs= "0";

 const valueIs= true;

 //const valueIs= " ";

 //const valueIs= ["Komal","Simran","Prince","Sumit"];

if (valueIs){
    console.log(`Your value is ${valueIs}`);  // true part execute
    
} else{
    console.log(`Not got youe value sorry!`);
    
}



// Falsy values -------> false , 0 , -0 ,"" , null , undefined , NaN

//const val1=false;
//const val1=0;
//const val1=-0;
//const val1="";
//const val1=null;
const val1=NaN;
//const val1=undefined;

if (val1){
    console.log(`Your val1 is true`);
    
} else{
    console.log(`Your val1 is false `);  // FALSE PART EXECUTE
}





