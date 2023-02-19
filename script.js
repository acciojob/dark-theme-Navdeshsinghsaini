//your code here
let btn = document.getElementById("swap");
let main = document.getElementById("app");

btn.addEventListener('click' , swapTheme)

function swapTheme () {
    btn.classList.replace("button_day" , "button_night");
    main.classList.replace("day" ,"night") 
}


