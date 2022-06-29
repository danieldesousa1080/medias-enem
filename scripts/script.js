let startButton = document.querySelector('.btn-start')
let body = document.body
let firstScreen = document.querySelector('.first-screen')
let main = document.querySelector('main')

let form = document.querySelector('.form')
let noteWeight = [".Ling-P",".Hum-P",".Nat-P",".Mat-P",".Red-P"]
let noteValue = [".Ling-N",".Hum-N",".Nat-N",".Mat-N",".Red-N"]
let result = document.querySelector('.result')

startButton.addEventListener("click",()=>{
    body.style.backgroundColor = '#F7BF42'
    main.style.backgroundColor ='#DE8327'
    firstScreen.classList.add('fade-out')
    form.style.display = 'flex'
    form.classList.add('fade-in')
    disappear(firstScreen)
    appear(form)
})

function disappear (x) {
    x.addEventListener("animationend",(ev)=>{
        if (ev.type === "animationend"){
            x.style.display = "none"
        };
    },false
    )
}

function appear (x) {
    x.addEventListener("animationend",(ev)=>{
        if (ev.type === "animationend"){
            x.style.opacity = '100%'
        };
    },false
    )
}

function calculate(){
    let TotalNotes = 0
    let TotalWeights = 0
    for (item in noteWeight){
        TotalNotes += document.querySelector(noteWeight[item]).value * document.querySelector(noteValue[item]).value
        TotalWeights += parseFloat(document.querySelector(noteWeight[item]).value)
    }
    result.innerHTML = "Sua média foi de " + (TotalNotes/TotalWeights).toFixed(2) + "!"
}
  
