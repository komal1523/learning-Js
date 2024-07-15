//******************************  ARRAY  **********************************************

const arr = [1  ,  2  ,  3  ,  4  ,  5  ,6]
  //index = [0]   [1]   [2]   [3]   [4]  [5]
   console.log(arr[3]);  // 4 ,show according to its index
   console.log(arr.length)  

   //************************    METHODS OF ARRAY  *************************************** */

   // 1)    push( )    //used to add values in last of an array 

   const arr1 = [0,1,2,3,4]
   arr.push(9)
   console.log(arr);    // [0,1,2,3,4,9]  9 has added in last 

   // 2)   pop( )       // used to remove last value from array 

   const arr2 = [0,2,3,4,5]
   arr2.pop(5)
   console.log(arr2);    // 5 has removed from array 

   //  3)  include( )   // check whether the number is present or not 

   const arr3 = [0,1,2,3,4,5]

   console.log(arr3.includes(3));  // true 

   // 4)   join()   // join element by separator 

   const arr4 = [0,1,2,3,4,5]

console.log(arr4.join(" and "));

// 5)  shift( )      //removes every first element and return
const arr5 = [ 0,1,2,3,4]
arr5.shift(9)
console.log(arr5);   // 0 has removed 

// 6) unshift ()      //add element at the beginning 
const arr6 = [ 0,1,2,3,4]
arr6.unshift(9)
console.log(arr6);    // 9 has added 


// 7)   concate ()     // join array to the given array

const a1 = [7,5,3,1]
const a2 = [2,4,6,8]
const a3 = [11,22,33,44]
console.log(a1.concat(a2,a3));  // join all three array

// 8)   slice(start , end )    //slice out from an array , from start to the end but end is not included

const arr7 = ["hello","I","am","komal","done"]
     //        [0]    [1]  [2]  [3]    [4]

console.log(arr7.slice(1,3));  // I , am   //starts from index 1 till index 3 but element of index is not incuded
console.log(arr7.slice(2));    // I , am ,komal,done  //start from index 2 and till the end

const arr8 = ["hello","I","am","komal","done"]
     //        [-5]    [-4]  [-3]  [-2]    [-1]

     console.log(arr7.slice(-4,-2)); // start from index [-4] and till index[-2] but index[-2] not included
     console.log(arr7.slice(-3));    // starts from index[-3] till the end

     // 9)    splice()        //adding values in existing array in any place


     const arr9= ["hello","I","am","komal","done"]
     
     console.log(arr9.splice(3,0,"riya","kanak"));

//spredout method 

const girlName= ["riya","anisha","priya"]
const boyName= ["rahul","ankit","prince"]

const allName=[...girlName,...boyName]
console.log(allName);


