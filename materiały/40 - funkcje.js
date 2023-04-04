// ---------------------
// Funkcje
// ---------------------

const { log } = require("console")

// Wprowadzenie:
// Funkcje są OBIEKTAMI. yep.
// Funkcja konstruktora posiada właściwość "this" (jeśli wywołamy funkcję jako konstruktor - z operatorem "new")
// ..ale też this można używać w każdej funkcji:)

// 1. klasyka - tzw. function statement
// funkcji można używać w kodzie przed jej deklaracją.
const c = add(3, 5)
function add(a, b) {
  return a + b
}

// funkcję możemy przekazywać jako argument innej funkcji/metody
const ages = [10, 20, 30]
const bigElements = ages.every(
  function (age) {
    return age > 15
  })
// bardziej życiowo: const bigElements = ages.every( age => age>15 )


// Argumenty funkcji
// easy one
function sum(a, b) { return a + b }

// domyślne wartości
function addTax(amount, tax = 12) { return amount * (1 + tax) }

// 'rest' operator - funkcje z dowolną liczbą argumentów
function sumEmAll(a, b, ...rest) {
  let ret = a + b
  if (Array.isArray(rest)) {
    ret += rest.reduce((acc, val) => acc += val, 0)
  }
  return ret
}
sumEmAll(1, 2, 3, 4, 5, 6, 7)
sumEmAll()

// obiekt arguments - old way
function sum3(a, b, c) {
  // tablica arguments przechowuje wszystkie argumenty funkcji
  console.log('[sum3] arguments:', arguments)
}
const asd = sum3(1)
sum3(1, 2, 3)
sum3(1, 2, 3, 4, 5, 6)
sum3()


// ---------------------
// Function expression
// ---------------------

// Funkcje powstałe poprzez przypisanie do zmiennej - tzw. function expression z użyciem literału function()
// uwaga na hoisting!
const substr = function (a, b) {
  return a - b
}

// Function expression na wypasie - nazwana funkcja anonimowa
// wygodne do debugowania funkcji i rekurencji.
// Nazwa funkcji widoczna jest jedynie w tej funkcji!
const mult = function multiply(a, b) {
  return a * b
}
mult()


// przykład z mdn
function foo(i) {
  if (i < 0) {
    return
  }
  console.log(`begin: ${i}`)
  foo(i - 1);
  console.log(`end: ${i}`)
}
foo(3);


// ---------------------------------------
// Wyrażenia strzałkowe (arrow functions)
// ---------------------------------------
// (inne nazwy - lambda, fat arrow)
const sum2 = (a, b) => {
  return a + b
}
const div = function (a, b) {
  return a / b
}
const multBy2 = x => x * 2
function multBy22(x) {
  return x * 2
}
const arr = [1, 2, 3, 4]
const arrMultBy2 = arr.map(multBy2)

/* odpowiednik powyższego
  let div = (a, b) => a/b
*/

function onOkClick() {
  console.log(this)
}
// uwaga! strzałki nie tworzą nowego kontekstu dla 'this'! (w odróżnieniu od function() { })
let btn = document.querySelector('#ok')
// let input = document.querySelector('#input')
btn.addEventListener('click', onOkClick) // btn - HTMLElement
// btn.addEventListener('click', () => console.log(this)) // window


// --------------------------------------------
// Deklaracje funkcji wewnątrz innych funkcji
// --------------------------------------------
// funkcja wewnętrzna ma dostęp do zmiennych f. zewn.
// zmienne f. zewn. żyją tak długo, jak żyje f. wewn.
// do f. wewn. nie ma bezpośredniego dostępu z zewnątrz (więc nie można jej nadpisać np poprzez inny skrypt)

var aaa = 123

function mama() {
  let wiek = 25
  const dziecko = { age: 0 }
  return { tomek: dziecko }
}
const mamaKrysia = mama()


// IIFE
// const asd3 = (function(y) {
//   let x = 10 * y
//   return {

//   }
// })(30)

const liczMachine = function (licznikStart = 5) {
  let licznik = licznikStart
  function wyswietl() {
    console.log(licznik)
    licznik++
  }
  return wyswietl
}

console.log('[licz machine]')
let licz = liczMachine()
let licz2 = liczMachine()

licz()
licz()
licz()
licz2()
// licz3()

// 5,5, 5
// 5,6,7

// -------------------------------------
// Prototypy - rozszerzanie funkcji
// -------------------------------------

// chaining - poszukiwanie zmiennych/metod w łańcuchu prototypów 
// funkcja pracuje jako konkstruktor obiektu
function User() {
  this.isDead = false
}
function User2() {
  this.isDead = false
}

// każda funkcja konstruktora posiada swój prototyp który jest obiektem
User.prototype.isDead = true
User.prototype.isZombie = true

const rysio = new User()
const krzys = new User()

console.log(rysio.isDead) // z funkcji

delete rysio.isDead
console.log(rysio.isDead) // z prototypu


// Paskudna praktyka - wstrzykiwanie funkcjonalności poprzez wbudowane obiekty podstawowe
// analogicznie: Object.prototype, Number.prototype itd
Function.prototype.wirus = function () {
  console.log('jestę wirusę i jestę w kaszsszdej funkcji:)')
}
// oczywiście powyższe dostarczanie funkcjonalności jest dobrą praktyką w sytuacji gdy prototyp pochodzi z "naszego" obiektu!

// ups
add.wirus()
licz.wirus()

// const liczby = [1, 2, 3]
// const liczbyRazy5 = liczby.map(el => el * 5)

// Array.prototype.map = function (arr) {
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//   }
// }


// --------------------
// Domknięcia, IIFE
// --------------------
// Domknięcia to zasięg funkcyjny, który przeżył swoją egzekucję -) - np. funkcja w funkcji
// Domknięcie to zamykanie zakresu dla zmiennych, w połączeniu z IIFE (natychmiastowym wywołaniem funkcji) tworzy sympatyczną strukturę

function dzejKuery() {
  function dk() {
    this.name = 'dzej'
    this.lastname = 'kuery'
    this.getName = () => {
      return `My name is ${this.lastname}, ${this.name} ${this.lastname}`
    }
  }
  return new dk()
}
const oo1 = dzejKuery()
oo1.getName()

// do czego wcześniej były wykorzystywane domknięcia
// bez domknięcia (i z var)
for (var i = 1; i < 5; i++) {
  setTimeout(
    function () {
      console.log('lekko naiwnie', i)
    }
    , 1000)
}
// z domknięciem
for (var i = 1; i < 5; i++) {
  (function (x) {
    setTimeout(
      function () {
        console.log('z domknięciem', x)
      }
      , 2000)
  })(i)
}
// po ludzku (z let)
for (let i = 1; i < 5; i++) {
  setTimeout(
    function () {
      console.log(i)
    }
    , 3000)
}


// IIFE
const zocha = (function (imie, wiek) {
  this.name = imie
  this.wiek = wiek
  return {
    name: this.name,
    wiek: this.wiek
  }
})('zosia', 20)
// alternatywą dla enkapsulacji za pomocą IIFE są moduły
