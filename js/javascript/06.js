// Javascript code execution
// 1 compilation phase: tokenizing, parsing, code generation
// a) early error checking
// b) Determining appropriate scope of variables
// 2 code execution phase or Global execution context
// a) Global memory execution phase: window={},this=window,variables memory allocated,function set to function
// b) line by line code excecution phase

// hosting: call before declared
// console.log(ans)
// var ans = 'sri'
// console.log(ans)

// console.log(myfunc)
// myfunc()
// function myfunc(){
//     console.log('hello')
// }
// myfunc()

// console.log(myfunc)
// var myfunc = function() =>{
//     console.log('hello')
// }
// console.log(myfunc)

// // console.log(myfunc) //arrow function gives error before initializtion
// // myfunc()
// const myfunc = ()=>{
//     console.log('hello')
// }
// myfunc()

// // console.log(my) //error
// let my = 'krish'
// console.log(my)

// // console.log(my) //error
// const my = 'krish'
// console.log(my)

// // function execution phase: A)location memmory creation: arguments[array like object], parameter set to args, b)...
// function getFullName(firstname,lastname){r
//     let myvar = 'knr'
//     console.log(myvar)
//     const fullname = firstname + " " + lastname
//     return fullname
// }
// const ans = getFullName('sri','krishna')
// console.log(ans)

// // lexical scope or scope chaining
// const lastname = 'krish'
// function first(){
//     const firstname = 'b'
//     function second(){
//         console.log(firstname)
//         console.log(lastname)
//     }
//     second()
// }
// first()

// // closure: innerfunction return along with outerfunction parameters
// function outerfunction(x){
//     function innerfunction(){
//         console.log(x)
//     }
//     return innerfunction;
// }
// const ans = outerfunction(1)
// ans()

// function first(x){
//     const a = 1
//     const b = 2
//     return function second(){
//         console.log(a,b,x)
//     }
// }
// const func1 = first(5)
// func1()

// function out(power){
//     function inn(num){
//         return power**num;
//     }
//     return inn
// }
// const square = out(2)
// console.log(square(5))
// const cube = out(3)
// console.log(cube(5))

// function fake(){
//     let count = 0
//     return function(){
//     if(count < 1){
//         console.log('hello, how can i help u')
//         count++
//     }
//     else{
//         console.log('u cannot call more than one time')
//     }
// }
// }
// const myfunc1 =fake()
// myfunc1()
// myfunc1()