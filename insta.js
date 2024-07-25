var x = document.querySelector("#container")
var y = document.querySelector("i")

x.addEventListener("dblclick", function(){
    // console.log("Hello")
    y.style.transform = "translate(-50%, -50%) scale(1)";
    y.style.opacity = 0.8;


    setTimeout(function(){
        y.style.opacity = 0;
        },1000)    
    setTimeout(function(){
        y.style.transform ="translate(-50%, -50%) scale(0)";
        },2000)    
})

 


