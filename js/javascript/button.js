// const allButtons = document.querySelectorAll("button")
// for(let button of allButtons){
//     console.log(button)
//     button.addEventListener("click", function(){
//         console.log(this.textContent)
//     })
// }

// const allButtons = document.querySelectorAll("button")
// for(let i in allButtons){
//     allButtons[i].addEventListener("click",function(){
//         console.log(this.textContent)
//     })
// }

// const allButtons = document.querySelectorAll("button")
// allButtons.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(this.textContent)
//     })
// })

// // browser = js engine(take callback function in the form of object and perform action)(chrome-V8,microsoft-spiderMonkey)
// // +webAPI(give callback function to js engine by checking when button clicked)
// // arrow function parameter and use target and currentTarget
// const allButtons = document.querySelectorAll("button")
// for(let button of allButtons){
//     button.addEventListener("click",(event)=>{
//         console.log(event)
//         console.log(event.currentTarget)
//     })
// }

// console.log("script start")
// const allButtons = document.querySelectorAll("button")
// allButtons.forEach((button)=>{
//     let inner = 0
//     for(let i=0; i<1000000000; i++){
//         inner += i
//     }
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget)
//     })
// })
// let outer = 0
// for(let i=0; i<1000; i++){
//     outer += i
// }
// console.log("script end")


const allButtons = document.querySelectorAll("button")
// console.log(allButtons.length)
allButtons.forEach(button => {
    button.addEventListener("click",(e)=>{
        // console.log(e.target)
        e.target.style.backgroundColor = "yellow"
        e.target.style.color = "green"
    })
})