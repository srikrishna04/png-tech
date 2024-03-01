// function singHappyBirthday(){
//     console.log('wish u happy birthday')
// }
// singHappyBirthday()

// const sum = function (num1,num2){
//     return num1+num2
// }
// console.log(sum(2,3))

//  const isEven = function (num){
//     return num % 2 ===0
// }
// console.log(isEven(2))

// const firstChar = (anyString)=>{
//     return anyString[0]
// }
// console.log(firstChar('krish'))

// const search = (array,target) => {
//     for(let i in array){
//         if(array[i] === target){
//             return i
//         }
//     }
//     return -1
// }
// const myarray = [1.9,3,20,67]
// console.log(search(myarray,9))

// function good(){ //inside func
//     const myfunc = () => {
//         console.log('hello from myfunc')
//     }
//     const sum = (num1,num2) => {
//         return num1+num2
//     }
//     const area = (num1,num2) =>{
//         return num1*num2
//     }
//     console.log('inside func')
//     myfunc()
//     console.log(sum(1,2))
//     console.log(area(3,5))
// } 
// good()

// const myvar1 = 13 //lexical scope
// function krish(){
//     // const myvar1 = 50
//     function myfunc1(){
//         //const myvar1 = 20
//         function myfunc2(){
//             console.log(myvar1)
//         }
//         myfunc2()
//     }
//     myfunc1()
// }
// krish()

// {let value = 20; //const amd let block scope
//     console.log(value)
// } 
// console.log(value)

// {                       //var block scope
//     var group = 'class'
//     console.log(group)
// }
// console.log(group)
// {
//     console.log(group)
//     var group = 'friends'
//     console.log(group)
// }

// function sum(a, b){
//     if(typeof b === undefined){
//         b=0
//     }
//     return a+b
// }
// console.log(1)

// function sum(a, b=0){ //default parameters
//     return a+b
// }
// console.log(sum(1))

// function alpha(a,b,...c){ //rest parameters
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
//     console.log(Array.isArray(c))
// }
// alpha(1,2,3,344,54,5,6)

// function sum(...numbers){ 
//     console.log(numbers)
//     let total = 0
//     for(let num of numbers){
//         total = total + num;
//         return total
//     }
// }
// console.log(sum(1,2,3,4))

// function person({firstname,age,city}){ //param destructuring
//     console.log(firstname)
//     console.log(age)
//     console.log(city)
// }
// person({firstname: 'krish', age:20})

// function hello(name){  //func callback
//     console.log('inside other function')
//     console.log(`my name is ${name}`)
// }
// function myfunc(callback){ //used to transfer sql data
//     console.log('this is inside myfunc')
//     callback('krish')
// }
// myfunc(hello)

// function myfunc(){   //func returning
//     function hello(){
//         console.log('inside hello function')
//     }
//     return hello
// }
// const ans = myfunc()
// console.log(ans())

// const arr = [1, 2, 3 ,4]
// function multiply(number, index){
//     console.log(`${number*2}, ${index}`)
// }
// // for(i=0;i<arr.length;i++){
// //    multiply(arr[i],i)
// // }
// arr.forEach(multiply)

// const arr = [1,2,3,4]
// arr.forEach(function(Number,index){
//     console.log(`${Number},${index}`)
// } )

// const arr = [{firstname:'kris',city:'knr'},
// {firstname:'raju',city:'hyd'}]
// arr.forEach(function(user){
//     console.log(user.firstname)
// })
// for(let value of arr){
//     console.log(value.firstname)
// }

// const arr = [1,2,3,4]
// const square = arr.map((number) => {
//     return number*number
// })
// console.log(square)

// const users = [{name:'krish', id:508},
// {name:'raju',id:408}]
// const names = users.map((user) => {
//     return user.name
// })
// console.log(names)

// const p = [1,2,3,4,5]
// function isEven(number){
//     return number % 2 ===0;
// }
// const q = p.filter(isEven)
// console.log(q)

// const p =[1,2,3,4,5]
// const q = p.filter(num => {
//     return num % 2 ===0
// })
// console.log(q)

// const numbers = [3,20,5,81,23]
// const k = numbers.reduce((accumulator,currentvalue) => {
//     return accumulator+currentvalue
// },500)
// console.log(k)

// const users =[{product:'mobile',price:10000},
// {product:'tab',price:1150},
// {product:'laptop',price:50000}]
// const t = users.reduce((total,currentprice)=> {
//     return total+currentprice.price
// },0)
// console.log(t)

// const str = [5,9,1200,400,3000]
// str.sort((a,b) => {
// return a-b
// })
// console.log(str)

// const users = [{productid:1 , name:'mobile',price:10000},
// {productid:2, name:'tab', price:1500},
// {productid:3,name:'laptop',price:50000}]
// const lowToHigh = users.sort((a,b)=>{
//     return a.price-b.price
// })
// console.log(lowToHigh)
// console.log(users)
// const highToLow = users.sort((a,b) => {b.price-a.price})
// console.log(highToLow)

// const arr =['baby','money','cat','boy']
// function islength3(str){
//     return str.length % 3 === 0
// }
// const x = arr.find(islength3)
// console.log(x)
// const y = arr.find((str)=>str.length === 3)
// console.log(y)

// const ans = [2,4,6,8,10]
// const p = ans.every((num) => num%2 === 0)
// console.log(p)
// const users = [{productid:1 , name:'mobile',price:10000},
// {productid:2, name:'tab', price:1500},
// {productid:3,name:'laptop',price:50000}]
// const r = users.every((a) => a.price<100000)
// console.log(r)

// const ans = [1,2,9,4,6]
// const y = ans.some(num => num%2 === 0)
// console.log(y)
// const users = [{productid:1 , name:'mobile',price:10000},
// {productid:2, name:'tab', price:1500},
// {productid:3,name:'laptop',price:500000}]
// const t = users.some(num => num.price>10000)
// console.log(t)

// const y = Array(10).fill(-1)
// console.log(y)
// const arr = [1,2,3,4,5,6,7,8]
// const after = arr.fill(0,1,4)
// console.log(after)

// const str = ['item1','item2','item3']
// str.splice(0,1)
// console.log(str)
// str.splice(0,2,'inserted item1','inserted item2')
// console.log(str)

// // iterables:
// const str = 'srikrishna'
// for(let i in str){
//     console.log(str[i])
// }
// const arr = ['sri','kri','shna']
// for(let item of arr){
//     console.log(item)
// }

// const obj = {name:'krish',age:20} //error not iterable
// for(let item of obj){
//     console.log(item)
// }

// //array like obj = index access,length
// const firstname = 'srikrishna'
// console.log(firstname.length)
// console.log(firstname[1])

// myarr = [1,3,4,2,5]
// const sol = new Set()
// sol.add(1)
// sol.add(2)
// sol.add(myarr)
// for(let item of sol){
//     console.log(item)
// }
// if(sol.has(1)){
//     console.log('present')
// }
// else{
//     console.log('not present')
// }

// const uniqueitems = new Set([1,2,2,5,5])
// console.log(uniqueitems)
// let len = 0
// for(let item of uniqueitems){
//     len++
// }
// console.log(len)

// const obj = {name: 'krish',age: '23',1: 'one'}
// for(let i in obj){
//     console.log(typeof i)
// }

// const x = new Map()
// x.set('name','krish')
// x.set(1, 'one')
// x.set([1,2,3],'threenum')
// x.set({1:'one'}, 'num')
// console.log(x.get(1))
// for(let item of x.keys()){
//     console.log(item, typeof item)

// }
// for(let {key,value} of x){
//     console.log(key, value)
// }

// const more = new Map([[1, 'one'],[2, 'two']])
// console.log(more)

// const person = {name: 'krish',
// age: 12
// }
// const extrainfo = new Map()
// extrainfo.set(person, {city: 'knr',gender:'male'})
// console.log(extrainfo)
// console.log(extrainfo.get(person).city)

// const obj1 = {'name':'krish',city:'knr'}
// // const obj2 =obj1 //obj cloning
// const obj2 = Object.assign({},obj1) //old
// console.log(obj2)
// obj1.state = 'ts'
// console.log(obj1)
// console.log(obj2)

// //optional chaining
// const person = {'name':'krish', 
// address: {homeaddress:1234}}
// console.log(person?.name)
// console.log(person?.address?.homeaddress)

// function our(){
    //      console.log(`my name is ${this.name} and city is ${this.city}`)
    //      }
    // const person1 = {name :'krish',
    // city:'knr',
    // about: our}
    // const person2 = {name:'ram',
    // city: 'hyd',
    // about: our}
    // const person3 = {name:'raju',
    // city: 'sdpt',
// about: our}
// person1.about()
// person2.about()
// person3.about()

// //this-->window
// // 'use strict'
// function hello(){
//     console.log(this) 
// }
// hello()

// const person = {
//     name :'krish',
//     address: 'knr',
//     about : function(work,goal){
//         console.log(`my name is ${this.name} and address is ${this.address}`)
//     }
// }
// const person1 = {
//     name :'krish',
//     address: 'knr'
// }
// person.about.call(person1,'job','manager')
// person.about.apply(person1,['job','manager'])
// const x = person.about.bind(person1,'job','manager')
// x()

// const obj  = {
//     firstName: 'krish',
//     age: 16,
//     about: () =>{
//         console.log(this.firstName , this.age)
//     }
// }
// obj.about()

// const obj = {
//     name : 'krish',
//     about(){
//         console.log(this.name)
//     }
// }
// obj.about()

// const user1 = {
//     name: 'krish',
//     age: 20,
//     city: 'knr',
//     id: ['5','0','8'],
//     about: function(){
//         console.log(`my name is ${this.name} and my age is ${this.age} `)
//     }
//     age: function(){
//         return this.age >= 18
//     }
// }

// function func(name, age, city, id){
//     const obj = {}
//     obj.name = name
//     obj.age = age
//     obj.city = city
//     obj.id = id
//     obj.about = function(){
//          console.log(`my name is ${this.name} and my age is ${this.age} `)
//     }
//     obj.age = function(){
//         console.log(this.age >= 18)
//     }
//     return obj
// }
// const x = func('krish',20, 'knr',['5','0','8'])
// console.log(x)
// x.about()
// x.age()

// const createuser = {
//     about: function(){
//         console.log(`my name is ${this.name} and my age is ${this.age} `)
//    },
//    aged: function(){
//        console.log(this.age >= 18)
//    }
// }
// function func(name, age, city, id){
//     const obj = {}
//     obj.name = name
//     obj.age = age
//     obj.city = city
//     obj.id = id
//     obj.about = createuser.about
//     obj.aged = createuser.aged
//     return obj
// }
// const x = func('krish',20, 'knr',['5','0','8'])
// const y = func('ram',20, 'hyd',['3','0','8'])
// const z = func('raju',10, 'sdpt',['5','0','0'])
// console.log(x)
// y.about()
// y.aged()



// obj1 = {key1:'value1',
// key2: 'value2'};
// // obj2 = {}
// obj2 = Object.create(obj1) //create {} __proto__ child refernce
// obj2.key2 = 'value5'
// obj2.key3 = 'value3'
// console.log(obj2.key2)
// console.log(obj2.key1)

// const createuser = {
//     about: function(){
//         console.log(`my name is ${this.name} and my age is ${this.age} `)
//     },
//     aged: function(){
//        console.log(this.age >= 18)
//     }
// }
// function func(name, age, city, id){
//     const obj = Object.create(createuser)
//     obj.name = name
//     obj.age = age
//     obj.city = city
//     obj.id = id
//     return obj
// }
// const x = func('krish',20, 'knr',['5','0','8'])
// console.log(x)
// x.about()
// x.aged()

// function user(){
//     const name = 'krish'
// }
// console.log(user.prototype) //prototype empty space{}
// user.prototype.abc = 'abc'
// user.prototype.xyz = 'xyz'
// if(user.prototype){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

//  new : create{} and return{} and automatic refernce to prototype
// function func(name, age, city, id){
//     const obj = Object.create(func.prototype)
//     obj.name = name
//     obj.age = age
//     obj.city = city
//     obj.id = id
//     return obj
// }
// func.prototype.about = function(){
//         console.log(`my name is ${this.name} and my age is ${this.age} `)
//     }
// func.prototype.aged = function(){
//    console.log(this.age >= 18)
// }
// const x = func('krish',20, 'knr',['5','0','8'])
// console.log(x)
// x.about()
// x.aged()

// function func(name,age){
//     this.name = name
//     this.age = age
// }
// func.prototype.about = function(){
//     console.log(`my name is ${this.name} and my age is ${this.age}`)
// }
// const x = new func('krish',20)
// x.about()
// for(let key in x){
//     console.log(key)
// }

// const arr =['1','2','3']
// console.log(Object.getPrototypeOf(arr))
// console.log(arr.prototype)
// function user() {
//     console.log('hello')
// }
// console.log(Object.getPrototypeOf(user))
// console.log(user.prototype)
// user.prototype = []
// console.log(user.prototype)

// class happy{
//     happy(name,age){
//         this.name =name
//         this.age = age
//     }
//     about(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`)
//     }
//     rate(a){
//         console.log(a)
//     }
// }
// const user = new happy('krish','20')
// console.log(happy)
// user.about()
// user.rate(100)

// class dog{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     eat(){
//         console.log(`${this.name} is eating`)
//     }

//     iscute(){
//         return this.age < 2
//     }
// }
// class cat extends dog{
//     constructor(name,age,speed){
//         super(name,age)
//         this.speed = speed
//     }
//     iscute(){
//         console.log('dogs are not cute')
//     }
//     run(){
//         console.log(`${this.speed} is ok for now!`)
//     }
// }
// const dog1 = new dog('sharu',1)
// console.log(dog1.iscute())
// dog1.eat()
// const cat1 = new cat('tommy',2,25)
// cat1.eat()
// cat1.iscute()
// cat1.run()

// class user{
//     constructor(firstname,lastname,age){
//         this.firstname = firstname
//         this.lastname = lastname
//         this.age = age
//     }
//     get fullname(){
//         console.log(`${this.firstname} and ${this.lastname}`)
//     }
//     setName(firstname,lastname){
//         this.firstname =firstname
//         this.lastname = lastname
//     }
//     set name(name){
//         const [firstname,lastname] = name.split(" ")
//         this.firstname = firstname
//         this.lastname =lastname
//     }
// }
// const user1 = new user('bairi','srikrishna',20)
// console.log(user1)
// user1.fullname //property
// user1.setName('bairi','sriram')
// // user1.firstname = 'bairi'
// // user1.lastname =sriram
// user1.name = 'bairi sriram'
// user1.fullname

class small{
    static call(){
        console.log('this is static method')
    }
    static des = 'this is static property'
}
small.call()
console.log(small.des)
