

     /* Selection of element */

     var a= document.querySelector("h1")

     console.log(a);
     

     // changing HTML

     a.innerHTML="Hello I am learning DOM"


     //ChanginG CSS

     a.style.color="Orange"
     a.style.fontFamily="robota"

     // Event Listener

     a.addEventListener("click",function(){
          console.log("Changed");
          
     })

     a.addEventListener("click",function(){
      a.innerHTML="DOM learning from very start"
      a.style.backgroundColor="Pink"   
     })



     // bulb

    var bulb= document.querySelector("#bulb")

    var btn = document.querySelector("button")

    var flag=0

    btn.addEventListener("click",function(){

     if (flag==0){

          bulb.style.backgroundColor= "grey";
          console.log("clicked");
          
          flag=1
     }else{
            bulb.style.backgroundColor="Yellow"
            console.log("again clicked");
            flag=0;
     }
   

    })

   