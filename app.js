const addTodoBtn = document.getElementById("addTodoBtn");
const inputTag = document.getElementById("todoInput");
const todoListUl = document.getElementById("todoList");

let todoText;//this should be populated when the user clicks on add button
let todos = [];
//If we have todos in the localStorage, we will read it
let todosString = localStorage.getItem("todos");
if(todosString){
    todos = JSON.parse(todosString)
}

const populateTodos = () => {
    let string = "";
    for (const todo of todos){
        string += `<li class="todo-item ${todo.isCompleted? "Completed":""}">
                      <input type="checkbox" class="todo-checkbox" ${todo.isCompleted? "checked":""}>
                      <span class="todo-text">${todo.title}</span>
                      <button class="delete-btn"></button>
                    </li>`
    }
    todoListUl.innerHTML = todoListUl.innerHTML += string
}


addTodoBtn.addEventListener("click", ()=> {
    todoText = inputTag.value
    inputTag.value = ""
    let todo = {
        title: todoText,
        isCompleted: false
    }
    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos));

});

populateTodos()

const todoCheckboxes = document.querySelectorAll(".todo-checkbox");

todoCheckboxes.forEach((element)=> {
    element.addEventListener("click", (e)=>{
        if (e.target.checked){
            element.parentNode.classList.add("completed");
        }
        else {
            element.parentNode.classList.remove("completed");
        }
    })
})












