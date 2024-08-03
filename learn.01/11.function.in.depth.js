//************************  Function with Object  *********************/

const user={
    username:"Komal",
    usertitle: "Kumari",
    gender:"Female",
    price: 200,

}

function accessObject(anyObject){
    console.log(`Hello Everyone my self ${anyObject.username} ${anyObject.usertitle}. I am a ${anyObject.gender} and price is ${anyObject.price}`);
}
accessObject(user)