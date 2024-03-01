// const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")
// //capture
// child.addEventListener("click",()=>{
//     console.log("capture child")
// },true)
// parent.addEventListener("click",()=>{
//     console.log("capture parent")
// },true)
// grandparent.addEventListener("click",()=>{
//     console.log("capture grandparent")
// },true)
// document.body.addEventListener("click",()=>{
//     console.log("capture body")
// },true)
// //bubble
// child.addEventListener("click",()=>{
//     console.log("bubble child")
// })
// parent.addEventListener("click",()=>{
//     console.log("bubble parent")
// })
// grandparent.addEventListener("click",()=>{
//     console.log("bubble grandparent")
// })
// document.body.addEventListener("click",()=>{
//     console.log("bubble body")
// })

// deligation- only add parent event listener use for all childs
const grandparent = document.querySelector(".grandparent")
grandparent.addEventListener("click",()=>{
    console.log("deligate even child")
})
grandparent.addEventListener("click",(e)=>{
    console.log(e.target.textContent)

})