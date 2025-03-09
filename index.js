let firstJE1=document.getElementById("first-js"); 
let startE1=document.getElementById("start"); 
let StopE1=document.getElementById("Stop"); 
let resetE1=document.getElementById("reset"); 
let breakE1=document.getElementById("break"); 
let longE1=document.getElementById("long"); 


startE1.onclick=function(){  
    let counter=0;
    counter+=1;
    firstJE1.textContent=counter;
}; 
StopE1.onclick=function(){ 
    clearInterval(startE1);
    firstJE1.textContent=25;
}; 
resetE1.onclick=function(){ 
    //console.log("3");
}; 
breakE1.onclick=function(){ 
    firstJE1.textContent="5:00";
}; 
longE1.onclick=function(){ 
    firstJE1.textContent="15:00";
}; 
