const button = document.querySelector("button")
const body = document.body
const currentColor = document.querySelector(".current-color")
function randomColorGenerator(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const randomColorgen = `rgb(${red}, ${green}, ${blue})`
    return randomColorgen
}


button.addEventListener("click",()=>
{
    const randomColor = randomColorGenerator()
    body.style.backgroundColor = randomColor
    currentColor.textContent = randomColor

})