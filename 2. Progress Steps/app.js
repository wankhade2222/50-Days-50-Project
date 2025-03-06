const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circle = document.querySelectorAll(".circle")

let currentActive = 1
next.addEventListener("click",() => {
    currentActive++

    if(currentActive > circle.length){
        currentActive = circle.length
    }
    console.log(currentActive)
    update()
})
prev.addEventListener("click",() => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }
    console.log(currentActive)
    update()
})
function update(){
    circle.forEach((circle,idx) => {
        if(idx < currentActive)
            circle.classList.add("active")
        else{
            circle.classList.remove("active")
        }
    });

    const actives = document.querySelectorAll(".active")

    progress.style.width =(actives.length-2)/(circle.length-1) * 100  + "%"

    if(currentActive == 1){
        prev.disabled = true
    }
    else if(currentActive == circle.length){
        next.disabled = true
    }
    else{
    prev.disabled= false
    next.disabled = false
    }
}
