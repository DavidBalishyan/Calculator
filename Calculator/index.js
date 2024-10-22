const display = document.getElementById("display")
const clearbtn = document.getElementById("clear_btn")

clearbtn.addEventListener("click", () => {
    display.value = ""
})


function atd(input) {
    display.value += input;
}


function calculate() {
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value = "Error(equation)"
    }
}

