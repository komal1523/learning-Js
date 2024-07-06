//   *****************************************   DATE   *********************************************************

let x = new Date()
console.log(x);      // show current date of browser of your laptop 

// 7 parameters to pass date.......
// year (2024)   //month (0-11)  //day   //hour  //minute  // second  // millisecond 

let y = new Date(2024 , 6  , 17,12, 0 , 0) ;
console.log(y);

// ********************************  METHODS TO CHECK DATE   ******************************************************

//   1)  .getTime()      // convert into milllisecond from  1 jan,1970 to the date thet we have passed 

let  z = new Date (2018 , 2 , 17 , 2 );
console.log(z.getTime());

// 2)  .getFullYear()  // convert into year only

let a = new Date(2021 , 12 , 5 , 0 , 5)
console.log(a.getFullYear());

// 3)  .getMonth()    // convert into month

let b = new Date(2013 , 11 , 3 , 9);
console.log(b.getMonth());

// 4)  .getDate()   // convert into date

let c = new Date(1983 , 9 , 1 )
console.log(c.getDate());

let myDate = new Date(2024 , 6 , 17 )
console.log(myDate.toLocaleString());

x.toLocaleString('default',{
    weekday:"long"
    
})