// ----------------------------------------------------
// Nasłuchiwanie na zdarzenia generowane przez obiekty
// ----------------------------------------------------

document.addEventListener("DOMContentLoaded", start)

// koniec nasłuchiwania: 
// document.removeEventListener("DOMContentLoaded", start)

// zdarzenie może przekazać do callback-a obiekt Event

// wcześniej:
// element.onclick = () => { } // Brrr
// inline: <button onclick="console.log()"> Brrr^2

let kulka, przycisk, mouseX, mouseY
const get = selector => document.querySelector(selector)

function start() {
    // malowanie
    get('#plotno').addEventListener("touchmove", maluj)

    get("#btn")
        .addEventListener('click', () => {
            kulka.style.top = 200 + "px"
            kulka.style.left = 100 + "px"
        })

    kulka = get("#kulka")
    kulka.addEventListener('touchstart', onKulkaTouchStart)
    kulka.addEventListener('touchmove', onKulkaTouchMove)
    kulka.addEventListener('touchend', onKulkaTouchEnd)
}

function onKulkaTouchStart(ev) {
    console.log("Touch start", ev)
    this.classList.add('yellow')
    mouseX = ev.touches[0].screenX
    mouseY = ev.touches[0].screenY
}
function onKulkaTouchEnd(ev) {
    console.log("Touch end", ev)
    this.classList.remove('yellow')
}

function onKulkaTouchMove(ev) {
    mouseX = ev.touches[0].pageX - this.offsetWidth / 2
    mouseY = ev.touches[0].pageY - this.offsetHeight / 2
    this.style.top = mouseY + 'px'
    this.style.left = mouseX + 'px'
    console.log(ev.touches[0])
}
let licznikNamalowanychPunktow = 0

function maluj(ev) {
    // blokada przeciągania ekranu
    ev.preventDefault()

    const top = ev.touches[0].pageY
    const left = ev.touches[0].pageX
    const p = document.createElement('div')

    p.classList.add('pedzel')
    p.style.top = top + 'px'
    p.style.left = left + 'px'
    get('#plotno').appendChild(p)

    licznikNamalowanychPunktow++
    console.log(`Namalowano ${licznikNamalowanychPunktow} punktów`)
}