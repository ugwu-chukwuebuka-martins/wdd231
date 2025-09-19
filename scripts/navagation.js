let toggle = document.querySelector(".toggle");
let show = document.querySelector(".hide");
toggle.addEventListener('click',()=>{
show.classList.toggle("hide");
toggle.classList.toggle("show");
});