// -----------------
// Asynchroniczność
// -----------------

// -----------------
// Callbacki
// -----------------
// Ładujemy zdjęcie w js
const logo = new Image();

logo.addEventListener("load", logoLoaded);
logo.src = "https://picsum.photos/300/200";

console.log(`Image loaded, width: ${logo.width}`); //ups

function logoLoaded() {
  console.log(`Really loaded, width: ${logo.width}`);
  document.body.appendChild(logo);
}
// a gdybym chciał poczekać na 2/3/10 zdjęć i wtedy wykonać akcję?


// Task - ładujemy kilka zasobów (tutaj zdjęć), jedno po drugim
const pliki = ["./assets/img/m1.jpg", "./assets/img/m2.jpg", "./assets/img/m3.jpg", "./assets/img/m4.jpg", "./assets/img/m5.jpg"];

const xhr = new XMLHttpRequest()
xhr.open('GET', pliki.shift())
xhr.send()
xhr.addEventListener('load', (e) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', pliki.shift())
  xhr.send()
  xhr.addEventListener('load', (e) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', pliki.shift())
    xhr.send()
    xhr.addEventListener('load', (e) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', pliki.shift())
      xhr.send()
      xhr.addEventListener('load', (e) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', pliki.shift())
        xhr.send()
        xhr.addEventListener('load', (e) => {
          console.log('Ostatni obraz załadowany! Uff.');
        })
      })
    })
  })
})


// Inny przykład - bieżąca pogoda w Krakowie - korzystamy z API openweathermap
// manual: https://openweathermap.org/current
const opwApiKey = "50d53005c0fd5f556bb4ef15224c4209";
const http = new XMLHttpRequest();

// obiekt działajacy asynchronicznie - czekamy na zdarzenie 'readystatechange'
http.addEventListener("readystatechange", httpStateChange);
http.addEventListener("progress", httpProgressChange);
http.addEventListener("error", httpError);

// z czym się komunikujemy
let url = `http://api.openweathermap.org/data/2.5/weather?q=Cracow&APPID=${opwApiKey}`;
// let url = `https://meteo.imgw.pl/?model=alaro&loc=krak%C3%B3w_krak%C3%B3w&mode=details`;
console.log(url);

http.open("GET", url, true);
// wysłanie zapytania
http.send();
console.log("Poszłoooo...");
// funkcja obsługująca zapytania ajaxowe
function httpStateChange(e) {
  try {
    // status naszego zapytania
    console.log(`http state change: ${e.target.readyState}`);
    console.log(`http HTTP Status code: ${e.target.status}`);

    if (e.target.readyState == "4") {
      document.body.querySelector("#container").innerHTML =
        e.target.responseText;

      // parsujemy txt zawierający zserializowane dane do obiektu
      pogoda = JSON.parse(e.target.responseText);
      console.log(pogoda);

      document.body.querySelector("#container").innerHTML =
        "Wilgotność: " + pogoda.main.humidity;
    }
  } catch (e) {
    console.log("Wyjątkowo się coś nie udało...", e);
  }
}
// obsługa postępu ładowania
function httpProgressChange(e) {
  console.log(
    `http progress change: ${e.target.position}/${e.target.totalSize}`
  );
}
// obsługa błędu (druga powinna być zawarta w readystatechange - zaimplementowane łapanie wyjatków gdy np. serwer padł)
function httpError(e) {
  console.log(`http error! ${e}`);
}

// Debugowanie wysłanego zapytania: Developer Tools->Network->XHR
