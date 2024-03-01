// // class - classList,add,remove,toggle
// const sectionTodo = document.querySelector(".section-todo")
// console.log(sectionTodo)
// console.log(sectionTodo.classList)
// sectionTodo.classList.add("bg-dark")
// sectionTodo.classList.remove("container")
// const ans = sectionTodo.classList.contains("container")
// console.log(ans)
// sectionTodo.classList.toggle("bg-dark")
// sectionTodo.classList.toggle("bg-dark")

// const todoList = document.querySelector(".todo-list")
// todoList.innerHTML = "<li>New Todo</li>" 
// todoList.innerHTML += "<li>today</li>" //dont use

// // createElement,append, prepend, remove, 
// const newTodoItem = document.createElement("li")
// console.log(newTodoItem)
// // const newTodoItemText = document.createTextNode("tell story")
// // newTodoItem.append(newTodoItemText)
// newTodoItem.textContent = 'tell something'
// const todoList = document.querySelector(".todo-list")
// // todoList.append(newTodoItem)
// todoList.prepend(newTodoItem)
// const todo1 = document.querySelector(".todo-list li")
// todo1.remove()
// console.log(todo1)

// // before after 
// const newTodoItem = document.createElement("li")
// newTodoItem.textContent = 'tell something'
// const todoList = document.querySelector(".todo-list")
// // todoList.before(newTodoItem)
// todoList.after(newTodoItem)

// // insertAdjacentElement, beforebegin, afterbegin, beforeeend, afterend
// const todoList = document.querySelector(".todo-list")
// todoList.insertAdjacentHTML("beforeend", "<li>todo2</li>")
// todoList.insertAdjacentHTML("afterbegin", "<li>todo2</li>")
// todoList.insertAdjacentHTML("beforebegin", "<li>todo2</li>")
// todoList.insertAdjacentHTML("afterend", "<li>todo2</li>")

// // clone nodes
// const newTodoItem = document.createElement("li")
// newTodoItem.textContent = 'tell something'
// const todoList = document.querySelector(".todo-list")
// const li2 = newTodoItem.cloneNode(true)
// todoList.append(newTodoItem)
// todoList.prepend(li2)

// // old methods for internet explorer
// const newTodoItem = document.createElement("li")
// newTodoItem.textContent = 'tell something'
// const todoList = document.querySelector(".todo-list")
// // todoList.appendChild(newTodoItem)
// const reference = document.querySelector(".first-todo")
// // todoList.insertBefore(newTodoItem, reference)
// // todoList.replaceChild(newTodoItem, reference)
// // todoList.removeChild(reference)

// // querySelectorAll-staticlist, getElementBysomething-livelist
// // const listItems = document.querySelectorAll(".todo-list li") 
// const newTodoItem = document.createElement("li")
// newTodoItem.textContent = 'tell something'
// const todoList = document.querySelector(".todo-list")
// const listItems = todoList.getElementsByTagName("li")
// todoList.append(newTodoItem)
// console.log(listItems)

// getBoundingClientRect - dimensions
// const sectionTodo = document.querySelector(".section-todo")
// const info = sectionTodo.getBoundingClientRect()
// // const info = sectionTodo.getBoundingClientRect().height
// console.log(info)

// // onclick events 
// const btn = document.querySelector(".btn-headline")
// console.dir(btn)
// btn.onclick = function(){
//     console.log("you clicked me!")
// }

// better use addEventListener
// this for arrow function - levelup, function - current element
// const btn = document.querySelector(".btn-headline")
// console.log(this)
// btn.addEventListener("click", ()=>{
//     console.log("you clicked me....")
//     console.log(this)
// })

// const btn = document.querySelector(".btn-headline")
// btn.addEventListener("click", function(){
//     console.log("you clicked me....")
//     console.log(this)
// })

// const body = document.body
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key)
// })

// const button = document.querySelector(".btn-headline")
// button.addEventListener("mouseover",()=>{
//     console.log("mouse over happen...")
// })
// button.addEventListener("mouseleave",()=>{
//     console.log("mouse leave happen...")
// })
