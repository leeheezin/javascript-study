const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list")

function handleTodoSubmit(event) {
    event.preventDefault() // submit 기본 동작 새로고침 차단
    const newTodo = todoInput.value // input의 현재 value를 새로운 변수에 복사
    console.log(todoInput.value)
    todoInput.value = ""
    console.log(newTodo, todoInput.value)
}
todoForm.addEventListener("submit", handleTodoSubmit)