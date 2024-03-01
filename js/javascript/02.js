'use strict';

// let total = 0;
// let i = 0;
// for(i=0;i<10;i++){
//     total = total + i;
//     console.log(total);
// }
// console.log(total)

// let total=0;
// let i=0;
// while(i<10){
//     total = total + i;
//     console.log(total);
//     i++;
// }
// console.log(total)

// let i = 10
// do{
//     console.log(i);
// }while(i<10)
// console.log('outside loop' ,i);

// let i= 0;
// for(i=0;i<10;i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }

// let i=0;
// for(i=0;i<5;i++){
//     if(i===3){
//         continue;
//     }
//     console.log(i);
// }

// let first =[1,'krish',1.256] //ordered collection
// console.log(first)
// first[1] = 'srikrishna'
// console.log(first)

// primitive vs 
// let x = 1;
// let y = x;
// console.log(y);
// x++;
// console.log(x);
// console.log(y);

// let vehicle = ['bus','car'];
// let transport = vehicle;
// console.log(transport);
// vehicle.push('bike')
// console.log(vehicle)
// console.log(transport)

// const x = [1,2]; //invalid const is immutable
//  x = []
//  console.log(x)

// const vehicle = ['bus','car'];
// vehicle.push('train');
// console.log(vehicle);
// vehicle.pop();
// console.log(vehicle)
// vehicle.shift()
// console.log(vehicle)
// vehicle.unshift('bike')
// console.log(vehicle)

// const vehicle = ['bus','car'];
// const transport = vehicle.slice(0).concat('rem');
// const transport = [].concat(vehicle, 'train');
// const transport = [...vehicle, 'bus','train'];
// const y = ['bus', 'train'];
// const transport = [...vehicle, ...y]
// console.log(transport);
// vehicle.push('bike');
// console.log(transport);
// console.log(vehicle);

// const fruits = ['apple','mango','banana']
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// const special = ['duke','pulsor','bullet'] //values
// for(let i of special){
    //     console.log(i)
    // }
    
// const arr = ['sri','kri','shna']
// const arr2 = []
// for(let index in arr){
//     arr2.push(arr[index].toUpperCase())
// }
// console.log(arr2)

// const p = ['sri','krish','sh','na']
// const [var1, ,var2] = p
// console.log(var1, var2)
// const [first,second,...myNewArray] = p
// console.log(myNewArray)

// const person = {name:'srikrishna',age:20,r:1.32,'person hobbies':['music','sleeping','guitar']}//object
// console.log(person)
// console.log(person.name)
// // console.log(person.'person hobbies') //error
// console.log(person['age'])
// console.log(person['person hobbies']) 
// person.gender = 'male'
// console.log(person)
// person['rank'] = 'first'
// console.log(person)

// const key = 'gender'
// const person = {name:'ram',age:20}
// // person.key = male //error
// person[key] = 'male' //no '' for compute
// console.log(person)

// const person = {name: 'fight',age:12}
// for(let key in person){
//     console.log(`${key} : ${person[key]}`)
//     console.log(key,':',person[key])
// }

// const floor = {bottom : 'ground',top: 'terrace'}
// console.log(typeof Object.keys(floor))
// console.log(Array.isArray(Object.keys(floor)))
// for(let i of Object.keys(floor)){
//     console.log(i, floor[i])
// }

// const key1 = 'objkey1' ///computing
// const key2 = 'objkey2'
// const value1 = 'myvalue1'
// const value2 = 'myvalue2'
// const obj = {
//     [key1]: value1,
//     [key2]: value2
// }
// console.log(obj)
// const obje = {}
// obje[key1] = value1;
// obje[key2] =value2;
// console.log(obje)

// const obj1 = {key1: 'value1',key2:'value2',key1:'first'}
// const obj2 ={key2 :'value4',key3: 'value5'}
// const obj = {...obj1,...obj2}
// console.log(obj)
// console.log(...'123')

// const mobile = {first:'apple',second:'samsung',third:'redmi'} //destructuring
// const value1 = mobile.first
// console.log(value1)
// const {first,second , ...restprop} = mobile
// console.log(second)
// console.log(restprop)

// const users =[{name: 'krish',city: 'knr'},
// {name:'rajesh',city:'hyd'},
// {name:'kranthi',city:'jagitial'}
// ] 
// for(let user of users){
//     console.log(user)
//     console.log(user, name)
// }
// const [user1,user2,user3] = users
// console.log(user1)
// const [{name : firstname}, , {city}] = users
// console.log(firstname, city)



