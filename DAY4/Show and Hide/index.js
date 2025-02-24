const mybutton=document.getElementById("mybutton");
const a1=document.getElementById("a1");
const v1=document.getElementById("v1");

mybutton.addEventListener("click",event =>{
   if(a1.style.visibility==="hidden"){
    a1.style.visibility="visible";
    mybutton.textContent="Show/Hide Details"
   }
   else{
    a1.style.visibility="hidden";

    mybutton.textContent="Show/Hide Details"
   }
    a1.styleMap.display="none";
    mybutton.textContent="Show/Hide Details";
});
mybutton.addEventListener("click",event =>{
    if(v1.style.visibility==="hidden"){
     v1.style.visibility="visible";
     mybutton.textContent="Show/Hide Details"
    }
    else{
     v1.style.visibility="hidden";
     mybutton.textContent="Show/Hide Details"
    }
     v1.styleMap.display="none";
     mybutton.textContent="Show/Hide Details";
 });