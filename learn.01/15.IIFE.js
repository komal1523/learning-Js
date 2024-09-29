
//*************  IIFE (Immediately Invoked Function Expression) ***************** */
// --> to avoid global scoped declaration in code
//--> to execute quickly

 // Write two function with function name and without name

 (function hello() {
    console.log("going well...");
    
 })()


 
// IIFE with parameters , here parameter is MyName

 (function Name(MyName) {
    console.log(`Yeah , ${MyName} is going well`);
    
 })(`Komal Kumari`);

 // 1) Wrapping the scoped function by ()
 //2) call by ()
// Note -- if there are two code then one must be ended with ;

(function firstName(fName){
    console.log(`MY nameis ${fName}`); 
})(`Komal`);

(function sndName(sName){
    console.log(`and my title is ${sName}`); 
})(`Kumari`)


