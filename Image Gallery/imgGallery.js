let scrollContainer = document.querySelector(".Gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");


scrollContainer.addEventListener("wheel",(e)=>{
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltay;
    scrollContainer.style.scrollBehavior = "auto"

})

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900;
})

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})