let open= document.getElementById("open");
let close= document.getElementById("close");
let container= document.getElementById("container");

open.addEventListener("click", function(){
    console.log("clicked");
    open.classList.add("hide");
    container.classList.remove("hide");
    // container.style.display="block"
})

close.addEventListener("click", function(){
    console.log("clicked");
    container.classList.add("hide");
    open.classList.remove("hide");
    // open.style.display="block"

})

