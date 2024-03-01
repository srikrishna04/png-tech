// const URL = 'https://jsonplaceholder.typicode.com/posts'
// const xhr = new XMLHttpRequest()
// console.log(xhr)
// console.log(xhr.readyState)
// xhr.open('GET',URL)
// // console.log(xhr.readyState)
// // xhr.onreadystatechange = function(){
// //     console.log(xhr.readyState)
// //     if(xhr.readyState == 4){
// //         const response = xhr.response
// //         const data = JSON.parse(response)
// //         console.log(typeof data)
// //         console.log(data)
// //     }
// // }
// xhr.onload = function(){
//     const response = xhr.response
//     const data = JSON.parse(response)
//     console.log(typeof data)
//     console.log(data)
// }
// xhr.send()

// const URL = 'https://jsonplaceholder.typicode.com/posts'
// const xhr = new XMLHttpRequest()
// xhr.open('GET',URL)
// xhr.onload = function(){
//     if(xhr.status>=200 && xhr.status<=300){
//     const response = xhr.response
//     const data = JSON.parse(response)
//     const id = data[3].id
//     const xhr2 = new XMLHttpRequest()
//     const URL2 = `${URL}/${id}`
//     xhr2.open('GET',URL2)
//     xhr2.onload = ()=>{
//         const data2 = JSON.parse(xhr2.response)
//         console.log(data2)
//     }
//     xhr2.send()
//     }
//     else{
//         console.log("something went wrong")
//     }
// }
// xhr.onerror = ()=>{
//     console.log("network error")
// }
// xhr.send()

// const URL = 'https://jsonplaceholder.typicode.com/posts'
// function senRequest(method, url){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest()
//         xhr.open(method, url)
//         xhr.onload = () =>{
//             if(xhr.status>=200 && xhr.status<=300){
//                 resolve(xhr.response)
//             }
//             else{
//                 reject(new Error('something went wrong'))
//             }
//         }
//         xhr.onerror = ()=>{
//             console.log('network error')
//         }
//         xhr.send()
//     })
// }
// const have = senRequest("GET",URL)
// have.then((response)=>{
//     const data = JSON.parse(response)
//     return data
// })
// .then((data)=>{
//     const id = data[3].id
//    return id
// })
// .then((id)=>{
//     const url2 = `${URL}/${id}`
//     return senRequest("GET",url2)
// })
// .then((resp)=>{
//     const data2 = JSON.parse(resp)
//     console.log(resp)
// })
// .catch((error)=>{
//     console.log('something went wrong')
// })

// const URL = 'https://jsonplaceholder.typicode.com/posts'
// fetch(URL,{ method: 'POST',
// body: JSON.stringify({
//   title: 'foo',
//   body: 'bar',
//   userId: 1,
// }),
// headers: {
//   'Content-type': 'application/json; charset=UTF-8',
// },
// })
// .then((response)=>{
//     if(response.ok){
//         return response.json()
//     }
//     else{
//         throw new Error('something went wrong')
//     }
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

// async return promise, await- wait for resolve
console.log('script start')
const URL = 'https://jsonplaceholder.typicode.com/posts'
// const getPost = async()=>{}
async function getPost(){
    const response = await fetch(URL)
    if(!response.ok){
        throw new Error('something went wrong')
    }
    const data = await response.json()
    return data
}
getPost().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})