const formTodo = document.querySelector(".form-todo")
const todoInput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list")
formTodo.addEventListener("submit",(e)=>{
    e.preventDefault()
    const newTodoText = todoInput.value
    const li = document.createElement("li")
    const liInnerHtml = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`
    li.innerHTML = liInnerHtml
    todoList.append(li)
    todoInput.value = ""
})
todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        const lispan = e.target.parentNode.parentNode
        lispan.remove()

    }
    if(e.target.classList.contains("done")){
        const text = e.target.parentNode.previousElementSibling
        text.style.textDecoration = "line-through"
    }
})