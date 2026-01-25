const buttons = document.querySelectorAll('button')
const clear = document.querySelector('.clear') 
const display = document.querySelector('.display')

// query slector all returns an arr

buttons.forEach((button) => button.addEventListener("mouseover", (event)=>{
    button.classList.toggle("hover")
}))

buttons.forEach((button) => button.addEventListener("mouseleave", (event)=>{
    button.classList.toggle("hover")
}))


buttons.forEach((button) => button.addEventListener("click", (event)=>{
    let num = button.innerText
    if (display.value == 0){
        display.value = num
    }
    else{
        display.value += num
    }
}))

clear.addEventListener("click",()=>{
    display.value = "0"
})




