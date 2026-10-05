const addTodoBtn = document.getElementById("addTodoBtn");
const inputTag = document.getElementById("todoInput");
let todoText;//this should be populated when the user clicks on add button
let todos = [];





addTodoBtn.addEventListener("click", ()=> {
    todoText = inputTag.value
    console.log(todoText)
    inputTag.value = ""
    let todo = {
        title: todoText,
        iscompleted: false
    }
    todos.push(todo)
    locationStorage.setitem("todos",JSON.stringify(todos))
});

