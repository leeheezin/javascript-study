const quotes = [
    {
        quote: "There is no impossible in my dictionary.",
        author: "Socrates",
    },
    {
        quote: "Failure is the mother of success",
        author: "riche"
    },
    {
        quote: "Seize the day",
        author: "riche"
    },
    {
        quote: "You only live once.",
        author: "riche"
    },
    {
        quote: "Past is just past.",
        author: "riche"
    },
    {
        quote: "Love yourself.d",
        author: "riche"
    },
    {
        quote: "Courage is very important when it comes to anything.",
        author: "riche"
    },
    {
        quote: "If not now, then when?",
        author: "riche"
    },
    {
        quote: "Time is gold.",
        author: "riche"
    },
    {
        quote: "You will never know until you try.",
        author: "riche"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]
//floor소수내려줌
//.length를 써서 배열의 길이만큼 곱해주기 


quote.innerText = todayQuote.quote
author.innerText = todayQuote.author