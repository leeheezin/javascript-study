const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const link = document.querySelector("a")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASS = "hidden" 
const USERNAME_KEY = "username"

function handleLinkClick(event){
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASS)
    const username = loginInput.value 
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting()
}

function paintGreeting(){
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello, ${username}`
    greeting.classList.remove(HIDDEN_CLASS)
}
const saveUsername = localStorage.getItem(USERNAME_KEY)

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS)
    loginForm.addEventListener("submit", handleLinkClick)
} else {
    paintGreeting(saveUsername)
} 