// ------------------------------
// Deklarowanie zmiennych
//-------------------------------

let df = '123'
console.count('asd');

let imie = 'Kasia'
let plec = "kobieta" // apostrofy i cudzysłowy są równoważne
let wiek = 18

const API_URL = 'api.url'

const USER_KEYS = {
  privateKey: 'somePrivateKey',
  publicKey: 'somePublicKey',
}

// nie mogę
// USER_KEYS = {}
// mogę
USER_KEYS.privateKey = 'new private key'

// użycie przed deklaracją?
console.log(dinozaur)
var dinozaur = 'zedisdeadbaby'

console.log(API_URL);
// --------------------
// Typy proste
// --------------------
// dostępne typy proste (tzw. prymitywy)
// number, string, boolean, undefined, null, object, symbol
// dla wielkich liczb jest dostępny BigInt

// przypisywanie dowolnych typów do zmiennej
let x = 'A'
x = 12
x = true
x = undefined
x = null
x = function () { }
x = {}

// x.includes('a')
console.log('hello')
