//**********************************  Object in depth  ********************************************************** */

// Accessing properties of nested loop

const userInfo={
    email: "some@gmail.com",
    userName:{
        userFullName:{
            fullName:{
               firstName: "Komal",
               lastName:"Kumari",
            }
        }
        
    }

}
console.log(userInfo.userName);
console.log(userInfo.userName.userFullName);
console.log(userInfo.userName.userFullName.fullName);
console.log(userInfo.userName.userFullName.firstName);


//  Merging more than one values in object

const obj1={ 1:"a" , 2: "b"}
const obj2={ 3:"a" , 4: "b"}
const obj3={ 5:"a" , 6: "b"}

//const obj4={...obj1,...obj2,...obj3}
const obj4  =  Object.assign({},obj1,obj2,obj3)
console.log(obj4);
console.log(Object.keys( userInfo));   // to get tg\he keys of oblect userInfo
console.log(Object.values( userInfo)); // to get the values of object userInfo


///********************************************************* Object De-structure *************************************************** */

const course={
    courseName:"Javascript..Series",
    price:"1000",
    courseTeacher: "KumarSingh",

}
//console.log(course.courseTeacher);   // simple process of accessing value

//const {courseTeacher}=course
console.log(courseTeacher);

const {courseTeacher:onlineTeacher}=course   // De-structure the values from courseTeacher to onlineTeacher
console.log(onlineTeacher);




