// rozgrzewka - kolejność console.log()
const samochodziki = new Promise((resolve, reject) => {
  resolve("idziemy na samochodziki")
  reject("siedzimy w domu")
})
const miejscowosc = fetch('./100 - miejscowosc.txt').then((d) => d.text())

// 1. który log pojawi się jako pierwszy?
// 2. czy promise się wykonały zanim silnik js 'wykonał' poniższe linijki?
miejscowosc.then((data) => console.log("miejscowosc:", data))
samochodziki.then((data) => console.log("samochodziki:", data))
console.log("log w kodzie po miejscowosc/samochodziki")

// ------------------------------------
// Problemy Promise.then():
// ------------------------------------
// 1. w dalszym ciągu zagnieżdżamy kod (wewnątrz .then) - ale już tylko jednopoziomowo
// 2. łańcuch then - problem z przekazywaniem danych 'niżej' - np. z 1go do 4go then (zmienne globalne)
// 3. wpspółbieżność/sekwencja wykonania promise

// --------------------
// 1. w dalszym ciągu zagnieżdżamy kod (wewnątrz .then) - ale już tylko jednopoziomowo
// --------------------
// proces do wykonania:
// 1. pobierz dane miejscowości
// 2. pobierz wiadomości
// 3. pobierz pogodę
// 4. wyswietl WSZYSTKIE pobrane dane

// wersja killing me softly
// jak to zrobić prawidłowo?

//   miejscowosc.then((wynik) => {
//     const wiadomosci = fetch("zrodlowiadomosczfejsa");
//     wiadomosci.then((listawiadomosc) => {
//       pogoda = fetch("pogodadlamiejscowosci");
//       pogoda.then((temp) => {
//        // prawie - nie mamy tutaj zmiennych wynik i listawiadomosci!
//        console.log(miejscowoscData, wiadomosciData, pogodaData)
//       });
//     });
//   });

// ------------------------
// 2. łańcuch then - problem z przekazywaniem danych 'niżej'
// np.z 1go do 4go then (zmienne globalne lub dopisywanie danych do zwrotek z kolejnych promise)
// ------------------------
// miejscowosc
//   .then((wynik) => {
//     return fetch("zrodlowiadomosczfejsa");
//   })
//   .then((listawiadomosci) => {
//     return fetch("pogodadlamiejscowosci");
//   })
//   .then((pogoda) => {
//      // prawie - nie mamy tutaj zmiennych wynik i listawiadomosci!
//     console.log(miejscowoscData, wiadomosciData, pogodaData)
//   });


// -----------
// Await
// -----------
async function asyncFn() {
  const miejscowoscData = await miejscowosc;
  const wiadomosciData = await fetch("zrodlowiadomosczfejsa");
  const pogodaData = await fetch("pogodadlamiejscowosci");
  console.log(miejscowoscData, wiadomosciData, pogodaData)
  return true
}
await asyncFn()

// -----------------------------
// 3. współbieżność/sekwencja wykonania promise
// -----------------------------

// zapytania w network wykonują się jeden po drugim czy równolegle? Jak zrobić odwrotnie?
//   miejscowosc
//     .then((wynik) => {
//       return fetch("zrodlowiadomosczfejsa");
//     })
//     .then((listawiadomosci) => {
//       return fetch("pogodadlamiejscowosci");
//     })
//     .then((pogoda) => {
//        // prawie - nie mamy tutaj zmiennych wynik i listawiadomosci!
//       wyswietlWszystko(wynik, listawiadomosci, pogoda);
//     });

// jeden po drugim
// (async() => {
//   const prom1 = await fetch("1.txt").then((d) => d.text());
//   const prom2 = await fetch("1.txt").then((d) => d.text());
//   const prom3 = await fetch("1.txt").then((d) => d.text());
// })();

// równolegle
const prom1 = fetch("2.txt").then((d) => d.text());
const prom2 = fetch("2.txt").then((d) => d.text());
const prom3 = fetch("2.txt").then((d) => d.text());
(async () => {
  const ret1 = await prom1;
  const ret2 = await prom2;
  const ret3 = await prom3;
})();
//  Najbardziej czytelnie - 
// const [data1, data2, data3] = await Promise.all([prom1, prom2, prom3])

// 4. jaka będzie kolejność?
// console.log('1')
// const f = async() => {
//     console.log('2')
//     const a = await Promise.resolve("that's all folks!");
//     console.log('3')
// }
// f(); // nie ma await!
// console.log('4');