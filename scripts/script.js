let startButton = document.querySelector('.btn-start')
let body = document.body
let content = document.querySelector('.content')
let main = document.querySelector('.default-layout')
let character = document.querySelector('.character')

let screen1Content = [content,character]

startButton.addEventListener("click",()=>{
    body.style.backgroundColor = '#F7BF42'
    content.classList.add("fade-out")
    main.style.backgroundColor ='#DE8327'
    character.classList.add("fade-out")
})

screen1Content.forEach((item)=>{
    disappear(item)
})


function disappear (x) {
    x.addEventListener("animationend",(ev)=>{
        if (ev.type === "animationend"){
            x.style.display = "none"
        };
    },false
    )  
}