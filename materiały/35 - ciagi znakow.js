// ------------------------
// Praca z ciągami znaków
// ------------------------

const imie = 'chatGPT'
const zainteresowania = 'Właściwie wszystko. Wiersze pisze, tańczy,  w js-ie koduje.'

// Pobranie długości
const imieLength = imie.length

// Pobranie dowolnego znaku
const trzeciaLiteraImienia = imie[2]
// lub
// imie.at(2)
// imie.at(-4)

// Wyszukiwanie ciągu znaków
const czySpiewa = zainteresowania.includes('śpiewa')
const czyTanczy = zainteresowania.includes('tańczy')

// Zamiana ciągu znaków
zainteresowania.replace('tańczy', 'śpiewa')

// Zamiana wszystkich wystąpień podanego ciągu znaków
zainteresowania.replaceAll('.', '!')

// Czy zaczyna się od 
const czyJestToChatGPT = imie.startsWith('chat')
// analogicznie
// imie.endsWith

// Pobranie wycinka (od 4 do 7 znaku)
const gpt = imie.slice(4, 7)
// lub 
// imie.substring(4, 7)

// Zamiana na tablicę
const zdaniaZZainteresowan = zainteresowania.split('.')
// odwrotnie
// arr.join('.')

// Zamiana wielkości znaków
imie.toLowerCase()
imie.toUpperCase()
zainteresowania.toLocaleLowerCase()
zainteresowania.toLocaleUpperCase()

// Obcinanie spacji na początku/końcu ciągu znaków
imie.trimStart()
imie.trimEnd()
imie.trim()

// template strings
const personName = 'Ania'// "Ania", 
const personLastname = 'Kordas'

const fullName = 'Nazywam się ' + personName + ' ' + personLastname
const fullName2 = `Nazywam się ${personName} ${personLastname}`

// wyrażenia regularne
const wiek = 'Mam 13 rok'
const wiekRegex = /.\d{1,2}/;

const parsowanyWiek = wiek.match(wiekRegex)
console.log(+parsowanyWiek?.[0])

// wyszukiwanie wielu wystąpień: .matchAll()
