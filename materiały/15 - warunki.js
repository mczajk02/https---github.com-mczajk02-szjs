// -----------------
// Warunki
// -----------------

const czyPokazacWynik = false
const wynik = 10

// porównanie wartości
if (czyPokazacWynik == true) {
  console.log(wynik);
} else {
  console.log('no nie pokażę!')
}

const wiek = 18
if (wiek >= 18) {
  console.log('pełnoletni');
} else if (wiek >= 3) {
  console.log('dziecko');
} else {
  console.log('dziecko poniżej trzech lat');
}


// porównanie typów
// if(czyPokazacWynik === true) {}

let jakasZmienna = ''
jakasZmienna = null
jakasZmienna = undefined

// falsy/truthy values
// if (jakasZmienna) { }

// sprawdza jednocześnie null i undefinde
if (jakasZmienna != undefined) { }

//
if (jakasZmienna !== '') {
  console.log(jakasZmienna);
}


// ---------------
// Ternator
// ---------------
const czyMnozycPrzezDwa = 'tak'
const a = 5
const wynikMnozenia = czyMnozycPrzezDwa === 'tak' ? a * 2 : a

// let wynikMnozenia2
// if (czyMnozycPrzezDwa === 'tak') {
//   wynikMnozenia2 = a *2
// } else {
//   wynikMnozenia2 = a
// }

// skrót który możesz spotkać w kodzie
czyPokazacWynik === 'tak' && console.log(wynik)

if (czyPokazacWynik === 'tak') {
  console.log(wynik)
}

// const x1 = false
// const x2 = true

// const x3 = x1 && x2


// ---------------------
// Switch
// ---------------------

const nrDniaTygodnia = 1

let dzienTygodnia
switch (nrDniaTygodnia) {
  case 1:
    dzienTygodnia = 'poniedziałek'
    break;
  case 2:
    dzienTygodnia = 'wtorek'
    break;
  case 3:
    dzienTygodnia = 'środa'
    break;
  // itd..
  default:
    dzienTygodnia = ''
}