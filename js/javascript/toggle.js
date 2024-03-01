const toggleBtn = document.querySelector(".toggle-theme")
const body = document.body
function toggleTheme(){
    if(body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode")
        toggleBtn.textContent = "DARK MODE"
    }
    else{
        body.classList.add("dark-mode")
        toggleBtn.textContent = "LIGHT MODE"
    }
}

toggleBtn.addEventListener("click",toggleTheme)