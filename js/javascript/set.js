// // synchronous
// console.log("script start")
// for(let i=0;i<100;i++){
//     console.log("hello world")
// }
// console.log("script end")

// // asnchronous
// console.log("script start")
// const id = setTimeout(()=>{
//     console.log("hello world")
// },0)
// for(let i=0;i<10;i++){
//     console.log("inside for loop")
// }
// console.log("value of id ",id)
// clearTimeout(id)
// console.log("script end")

// console.log("script start")
// const id = setInterval(()=>{
//     console.log(id)
//     console.log(Math.random())
// },10000)

// const body = document.body
// const button = document.querySelector("button")
// const id = setInterval(()=>{
//     const red = Math.floor(Math.random()*136)
//     const green = Math.floor(Math.random()*136)
//     const blue = Math.floor(Math.random()*136)
//     const rgb = `rgb(${red},${green},${blue})`
//     body.style.backgroundColor = rgb
//     },1000)

// button.addEventListener("click",()=>{
//     clearInterval(id)
//     button.textContent = body.style.backgroundColor
// })

// callback
// function func(callback){
//     console.log("inside normal function")
//     callback()
// }
// func(()=>{
//     console.log("inside callback function")
// })

function add(num1,num2,onsuccess,onfailure){
    console.log(num1, num2)
    if(typeof num1 === "number" && typeof num2 === "number"){
        onsuccess(num1, num2)
    }
    else{
        onfailure()
    }
}
add(1,2,(number1,number2)=>{
    console.log(number1+number2)
},
()=>{
    console.log("please enter valid number")
})