// -----------------------------------
// Odłożenie wykonania kodu w czasie
// -----------------------------------

function showRandomNumber() {
  const date = new Date().toLocaleTimeString()
  const random = Math.floor(Math.random() * 100)
  console.log(`Czas: ${date}`, `Losowa liczba: ${random}`);
}

const time = new Date().toLocaleTimeString()
console.log(`Start skryptu: ${time}`);

const delayMs = 2000
const timeoutHandler = setTimeout(
  showRandomNumber,
  delayMs
)
// jeśli chcesz anulować zaplanowane wykonanie kodu
// clearTimeout(timeoutHandler)

// W jakiej kolejności pojawią się liczby?
console.log(1);
setTimeout(() => {
  console.log(2)
})
console.log(3);

// ---------------------------------------------
// Cykliczne wykonywanie kodu co określony czas
// ---------------------------------------------

const timerHandler = setInterval(() => {
  const time = new Date().toLocaleTimeString()
  console.log(time)
}, 1000)

// zatrzymanie intervala
// clearInterval(timerHandler)
