// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")
// const heading3 = document.querySelector(".heading3")
// setInterval(()=>{
//     heading1.textContent = "I"
//     heading1.style.color = "green"
//     setInterval(()=>{
//         heading2.textContent = "Love"
//         heading2.style.color = "green"
//         setInterval(()=>{
//             heading3.textContent = "You"
//             heading3.style.color = "green"
//         },1000)
//     },1000)
// },1000)

// DOM pyramid
// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")
// const heading3 = document.querySelector(".heading3")
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// function changeText(element, text, color, time, onSuccess,onFailure){
//     setTimeout(()=>{
//         if(element){
//         element.textContent = text
//         element.style.color = color
//          if(onSuccess){
//              onSuccess()
//          }
//         }
//         else{
//             if(onFailure){
//                 onFailure()
//             }       
//         }
//     },time)
// }
// changeText(heading1,"Wish","green",1000,()=>{
//     changeText(heading2,"You","green",1000,()=>{
//         changeText(heading3,"Happy","green",1000,()=>{
//             changeText(heading4,"Valentines","green",1000,()=>{
//                 changeText(heading5,"Day","green",1000,()=>{
//                 },()=>{console.log("heading5 does not exist")})
//             },()=>{console.log("heading4 does not exist")})
//         },()=>{console.log("heading3 does not exist")})
//     },()=>{console.log("heading2 does not exist")})
// },()=>{console.log("heading1 does not exist")})

// // promise
// const bucket = ['sugar','milk','salt','rice','oil']
// const friedRice = new Promise((resolve,reject)=>{
//     if(bucket.includes('salt') && bucket.includes('rice') && bucket.includes('oil')){
//         resolve('friedrice')
//     }
//     else{
//         reject('we cant do')
//     }
// })
// friedRice.then((fry)=>{
//     console.log("we done with", fry)
// }
// ,(error)=>{
//     console.log(error)
// }
// )

// console.log("script start")
// function frenchRice(){
//     const bucket = ['sugar','milk','salt','rice','oil']
//     return new Promise((resolve,reject)=>{
//     if(bucket.includes('salt') && bucket.includes('rice') && bucket.includes('oil')){
//         resolve('friedrice')
//     }
//     else{
//         reject(new Error("microtask queue fast"))
//     }
// })
// } 
// frenchRice().then((fry)=>{
//     console.log("microtask queue we done with", fry)
// }
// ).catch((error)=>{
//     console.log(error)
// })
// setTimeout(()=>{
//     console.log('callback queue');
// },0)
// for(let i=0;i<10; i++){
//     console.log("success")
// }
// console.log("script end")

// function newPromise(){
//     return new Promise((resolve,reject)=>{
//         const value = false;
//         setTimeout(()=>{
//             if(value){
//                 resolve()
//             }
//             else{
//                 reject()
//             }
//         },1000)
//     })
// }
// newPromise().then(()=>{console.log("success")})
// .catch(()=>{console.log("failure")})

// //promise.resolve
// // const promise = Promise.resolve(5)
// Promise.resolve(5).then((x)=>{
//     console.log(x)
// })

// // .then chain return promise if not undefined
// function pros(){
//     return new Promise((resolve,reject)=>{
//       resolve('sri')
//     })
// }
// pros().then((name)=>{
//     console.log(name)
//     name += "kri"
//     return name
// })
// .then((name)=>{
//     console.log(name)
//     name += "shna"
//     return name
// })
// .then((name)=>{
//     console.log(name)
//     name += "kri"
// })

const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
function changeText(element, text, color, time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text
                element.style.color = color
                resolve()
            }
            else{
                reject()
            }
        },time)
    }
)}
changeText(heading1,'WISH','green',1000).then(()=>{
    changeText(heading2,'YOU','indigo',1000).then(()=>{
        changeText(heading3,'HAPPY','blue',1000).then(()=>{
            changeText(heading4,'NEW','cyan',1000).then(()=>{
                changeText(heading5,'YEAR','red',1000).then(()=>{
                })
            })
        })
    })
}).catch(()=>{
    console.log("element is not found")
})

