const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

btn.addEventListener("click", ()=>{
     search.classList.toggle("active")
     input.focus();
}); 
const search1 = document.querySelector(".search1");
const btn1 = document.querySelector(".btn1");
const input1 = document.querySelector(".input1");

btn1.addEventListener("click",()=>{
     search1.classList.toggle("active1")
     input1.focus();
});