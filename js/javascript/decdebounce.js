// const inputBtn = document.getElementById("input-thing")
// console.log(inputBtn)
// // keyup-after lift key 
// // keydown //keypress
// // input - when entering
// // change - when state change of arrow
// inputBtn.addEventListener("keyup",(e)=>{
//     console.log(inputBtn.value)
//     console.log(e.target.value)
//     // console.log(this.value) use for normal func sinc arrow function take from surrounding(window)
// })

// // decorator function take func return func used for add functionality
// function decor(func){
//     return function(...args){
//         console.log("hi hello welocome")
//         func.call(this,...args)
//     }
// }
// function hello(name){
//     console.log('hello world',name)
// }
// const decorate = decor(hello)
// decorate('krish')

// function debounce(func,delay){
//     let timeOutId;
//     return function(...args){
//         if(timeOutId){
//             clearTimeout(timeOutId)
//         }
//         timeOutId = setTimeout(()=>{
//             func.call(this, ...args)
//         },delay)
//     }
// }
// function suggestions(e){
//     console.log('suggestion for',e.target.value)
// }
// const inputBtn = document.getElementById("input-thing")
// const decdeb = debounce(suggestions,3000)
// inputBtn.addEventListener('input',decdeb)

// const button = document.querySelector(".btn")
// function leadingDebounce(func, delay){
//     let timeOutId = null
//    return function(...args){
//     if(timeOutId == null){
//         func.call(this, ...args)
//     }
//     clearTimeout(timeOutId)
//     timeOutId = setTimeout(()=>{
//         timeOutId = null
//     },delay)
//    }
// }
// function  clickMe(){
//     console.log('clicked me')
// }
// button.addEventListener('click',leadingDebounce(clickMe, 3000))

// const button = document.querySelector(".btn")
// function leadingDebounce(func, delay, option={leading:true, trailing:false}){
//     let timeOutId = null
//    return function(...args){
//     let isInvoked = false
//     if(timeOutId == null && option.leading){
//         func.call(this, ...args)
//         isInvoked == true
//     }
//     clearTimeout(timeOutId)
//     timeOutId = setTimeout(()=>{
//         if(option.trailing && !isInvoked)
//         timeOutId = null
//     },delay)
//    }
// }
// function  clickMe(){
//     console.log('clicked me')
// }
// button.addEventListener('click',leadingDebounce(clickMe, 3000))
