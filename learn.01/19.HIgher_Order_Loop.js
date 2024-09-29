

// for of 

// ["" ,"",""] 
//[{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
console.log(num);

    
}

const books=["Arihant","Oswal","Ncert"]

for (const bk of books) {
   // console.log(bk);
    console.log(bk);
    
}

// Map 

const map = new Map()
map.set('IN',"India")   //('key' ,"value")
map.set('EN',"England")
map.set('USA',"United state of America")

//console.log(map);


for (const [key,value] of map) {
    console.log(key ,",", value);   
}





// for in 

// in object

const myObj ={
    'game1':'Hide and Seek',
    'game2':'Ludo',
   'game3':'Badminton',
}
for (const key in myObj) {

    //    console.log(key);

    //    console.log(myObj[key]);
       
        console.log(`${key} is for ${myObj[key]}`);
        
    
}




// in array  
// note -- keys of array in for in gives its index 

let programs =["Cpp","Java","Py" , "C"]

for (const key in programs) {
   
        // console.log(key);   // output :- 0,1,2,3
        console.log(programs[key]);
}




// for each loop
//in  callback function

let coding=[1000,2000,3000,4000]

coding.forEach( function (value){
    console.log(value);
    
})



// for each 
//in arrrow functon

let Numbers=[1,22,333,4444]

Numbers.forEach( (number)=>{
    console.log(number);
    
})



 
function printMe(number){  // reference of Numbers  array
    console.log(number);
    
}

Numbers.forEach(printMe)

// Representing item , index, array of title in for each loop
let title =["Verma","Sharma","Singh","Viahwakarma"]
title.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

// Accessing values from each objects inside array

const Intro=[
    {
        FirstName:"Komal",
        LastName:"Kumari",
        Roll: "01",
    },
    {
        FirstName:"Riya",
        LastName:"Singh",
        Roll: "02",
    },
    {
        FirstName:"Shubham",
        LastName:"Sharma",
        Roll: "03",
    }
]
Intro.forEach((value)=>{
    console.log(value.FirstName);
   // console.log(value.LastName);
    //console.log(value.Roll);
    
    
})