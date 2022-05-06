let startButton = document.querySelector('.btn-start')
let body = document.body
let content = document.querySelector('.content')
let main = document.querySelector('.default-layout')
let character = document.querySelector('.character')

startButton.addEventListener("click",()=>{
    body.style.backgroundColor = '#F7BF42'
    content.style.display = 'none'
    main.style.backgroundColor ='#DE8327'
    character.style.display = 'none'
})