const buttons = document.querySelectorAll('button')
const clear = document.querySelector('.clear') 
const display = document.querySelector('.display')
const calculate = document.querySelector('.calculate')
// query slector all returns an arr
let calculated = false

buttons.forEach((button) => button.addEventListener("mouseover", (event)=>{
    button.classList.toggle("hover")
}))

buttons.forEach((button) => button.addEventListener("mouseleave", (event)=>{
    button.classList.toggle("hover")
}))


buttons.forEach((button) => button.addEventListener("click", (event)=>{
    let num = button.innerText
    if (calculated == true){
        if (button.classList.contains("op")){
            display.value += num
            calculated = false
            return

        }
        else{

      
        clearDisplay()
        display.value = num
        calculated = false
        return
        }  }
    
    if (button.innerText == "="){
        return
    }
   
   
    if (display.value == 0){
        display.value = num
    }
    else{
        display.value += num
    }
}))



function clearDisplay(){
    display.value = "0"
}

clear.addEventListener("click",()=>{
clearDisplay()
})

function calculatefunc(){
    try{
    var results = eval(display.value.replaceAll('x','*').replaceAll('÷','/'))
    if (results == Infinity){
        throw new Error()
    }
    console.log(results)
    display.value = results
    calculated = true
   }
   catch{
    display.value = "Error!"
    calculated = true
   }
}
calculate.addEventListener('click', calculatefunc)


