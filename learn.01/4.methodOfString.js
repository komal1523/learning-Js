
//attachment of strings

const name="komal"
const title="kumari"
const rollNo=20

//console.log(`Hello my name is ${name} ${title} and my roll no. is ${rollNo}`);


// ************************* METHODS OF STRINGS ********************************************

//const userName= new String("komalkri" )   //declaretion of string

//  k    o    m    a    l    k    r    i
// [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]

// 1)  .length

console.log(userName.length);  // 8 

//2)    .toUppercase()

console.log(userName.toUpperCase()); //KOMALKRI

//3)    .CharAt

console.log(userName.charAt(3));  // a (letter 'a' is in 3rd position in komalkri)

//4)   .indexOf()

console.log(userName.indexOf("m")) // 2 (m is in the index number of 2 in komalkri)

//5)   .substring

console.log(userName.substring(0,5)) //komal (k is in [0] , o is in [1], m is in[2] , a is in [3], l is in [4] 
// counting is always less 1 in .substring

//6)  .trim
const userNameNew="    komal    "
console.log(userNameNew.trim())



