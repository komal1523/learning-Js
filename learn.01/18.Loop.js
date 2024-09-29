

// For loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}
//console.log(element);    //not declared outside 



for (let index = 0; index<=10; index++) {
    const element = index;
    if(index==5){
        console.log("5 is dectected");
        
    }
    console.log(element);
    
}

for (let i = 0; i <=10; i++) {
    console.log(`Outer :-${i}`);
    for (let j = 0; j <=10; j++) {
      console.log(`Inner :- ${j}`);
    }
    
}





// Table 

for (let k = 2; k <=10; k++) {
    console.log("\n");
    console.log(`Table of ${k}`);
    
    
for (let t = 1; t <=10; t++) {
    console.log(`${k} * ${t} = ${k*t}`);   
}
    
}





// Array

const arr=["Batman" , "Spiderman" , "Superman"];
console.log(arr.length);    // Length of array

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}






// Break       
//condition is true then break from out of the loop

for (let index = 1; index <= 10; index++) {
    if(index==5){
         console.log(`Detected 5`); 
        break;
   
    }
   console.log(`${index} `);
   
    
}






// Continue   skip only those condition is true


for (let index = 1; index <= 10; index++) {
    if(index==5){
        //  console.log(`Detected 5`); 
     continue;
   
    }
   console.log(`${index} `);
   
    
}



// While loop 


let age =0
while (age<=10) {
    console.log(`Age is ${age}`);
    age++;
}

let myArray=["Batman","Superman","Spiderman"]
let ar=0
while (ar<=myArray.length) {
    console.log(`Heroes are ${myArray[ar]}`);
    ar++;
}

// do- while loop

let rollNo = 0
console.log(`Roll numbers are `);

do {
    console.log(` ${rollNo}`);
    rollNo++;
    
} while (rollNo<=10);