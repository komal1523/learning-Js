// SCOPE ---- a block of that code for a function , if-else condition is said to be the scope for that program


let var1=50  // global scope
if(true){

    let var1=100
    const var2=200
    var var3=300
    console.log("INNER value of var1 is ",var1);  //local scope

}

//console.log(var1); // not defined var1 , because it is locally declared inside the scope 

// console.log(var2); // not defined var2, because it is locally declared inside the scope 

//console.log(var3); // it is declared because var can be declared anywhere locally or globally so, it is not suitable 



//*************** NESTED SCOPE *********************** */

function One(){
    username="Komal"
    function Two(){
        website="Youtube"
        console.log(username); // Correct because we access the values of Parent function in child function
    }
    //console.log(website);   error because inner function has a local scope valid for iner braces only
   Two()  

   
}
One()


if (true){
    const username = "Komal"
    if(username === "Komal"){
        const website="youtube"
        console.log(username + website);  // correct 
    }
    //console.log(website);  // Error because its scope is valid till inner if block
}
//console.log(username); // Error same its scope is valid till outer if block



