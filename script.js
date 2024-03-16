let search = document.querySelector(".search-box span");
let input = document.querySelector("input");
let box = document.querySelector(".search-box");
search.addEventListener("click", ()=>{
    search.classList.toggle("active");
    input.classList.toggle("resize");
})