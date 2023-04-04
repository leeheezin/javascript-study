const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"
let toDos = []

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) //객체나 배열 어떤코드든 문자로 만들어줌
}

function deleteTodo(){
    const li = event.target.parentElement //버튼에부모는 ㅣi, li를 제거
    li.remove()
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id) ) //클릭한 li.id와 다른 toDo는 남기기(타입도일치)
    saveTodos()
}
function paintTodo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    todoList.append(li)
}
 
function handleTodoSubmit(event) {
    event.preventDefault() // submit 기본 동작 새로고침 차단
    const newTodo = todoInput.value // input의 현재 value를 새로운 변수에 복사
    todoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id: Date.now() //id로 각 item구별
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodos()
    console.log(newTodo, todoInput.value)
}
todoForm.addEventListener("submit", handleTodoSubmit)

function sayHello(item){
    console.log("hello", item)
}
const savedTodos = localStorage.getItem(TODOS_KEY)
console.log(savedTodos)
if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos)
    toDos = parsedTodos
    parsedTodos.forEach(paintTodo) // 배열에 있는 각각의 item마다 실행
        
}


