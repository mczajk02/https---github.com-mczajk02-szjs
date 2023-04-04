// ---------------------------
// Asynchroniczność - Promise
// ---------------------------

const opwApiKey = "50d53005c0fd5f556bb4ef15224c4209";
const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=Cracow&APPID=${opwApiKey}`;

// koniecPracy
//     .then(wykapSie)
//     .then(znajdzRower)
//     .catch(szukajHulajki)
//     .then(znajdzKnajpe)
//     .then(bawSieDobrze)
//     .then(wrocBezpiecznie)
//     .catch(gdzieJaJestem)


let isProgressBarVisible = true;


// Obsługujemy Promises zwrócone przez inny kawałek kodu
const weather = fetch(openWeatherUrl);
console.log(weather); // PROMISE!

weather
  .then((respObject) => {
    // tutaj mamy pełne info o obiekcie Response
    console.log("First .then", respObject);
    return respObject.json();
  })
  .then((pogoda) => {
    // a tu już mamy dane
    console.log("Second .then", pogoda);
  })
  .catch((e) => {
    console.error("Catched exception: ", e);
    isProgressBarVisible = false;
  })
  .finally((e) => {
    isProgressBarVisible = false;
  });




// Budowanie własnych Promise()
const p = new Promise((resolve, reject) => {
  // Promise może zostać rozwiązana lub odrzucona - nigdy obydwa przypadki
  // rozwiązanie Promise: resolve(retVal)
  // odrzucenie Promise: reject(retVal)
  setTimeout(() => {
    console.log("Promise resolved, but .then not fired..:(");
    resolve("Promises are cool!");
  }, 2000);
  setTimeout(() => {
    console.log("Promise rejected");
    // we reject and return Error object - exception
    reject("Promises can be rejected");
  }, 1000);
});
// check
p.then((data) => console.log('Custom promise .then', data)).catch((e) => console.log('Custom promise reject', e));



// Chaining - łączenie kolejnych Promise
// getUser()
// .then(getUserPostion)
// .then(getWeatherInCity)


// Czekanie na wiele Promise
// przykład - jak dostaniesz info pogodowe, wypluj posta na fejsa
const fakeWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Sun is shiniiing");
  }, 3000);
});

const fakeFB = new Promise((resolve, reject) => {
  let fb = {
    sendPost(p) {
      console.log(`Tom on fejsik says: ${p}`);
    },
  };
  setTimeout(() => {
    resolve(fb);
  }, 1000);
});

// używamy metody statycznej .all obiektu Promise.
// .all czeka aż wszystkie Promise zostaną rozwiązane. Zwraca... Promise;)
Promise.all([fakeWeather, fakeFB])
  .then((responses) => {
    // kolejność w tablicy jest taka sama, jak kolejność Promise w .all([])
    console.log("Multpile Promises resolved", responses);
    const [weather, fb] = responses;
    fb.sendPost(weather);
  })
  .catch((errs) => { });

// inny przykład - działanie na dużych tablicach (Array.map, .find, .sort, filter) bez czekania na wynik


// Pierwsza z zakończonych Promise
// Promise.race([fakeWeather,fakeFB]).then(data=>console.log(data))

// Wszystkie (rozwiązane lub odrzucone) zakończonych Promise
// Promise.allSettled([fakeWeather,fakeFB]).then(data=>console.log(data))


// Wszystko na raz
// const tablicaObietnic = pliki.map(plik => fetch(plik))
// Promise.all(tablicaObietnic)
//     .then((resp)=>{
//         console.log("we're done")
//     })




// Tworzenie defaultowo rozwiązanych lub odrzuconych Promises
console.log('Static promises START')
const resolved = Promise.resolve("I'm optimist!");
const rejected = Promise.reject("I'm pesimist");
resolved.then(console.log)
rejected.catch(console.log)
console.log('Static promises END');


// Brak w Promise: obietnica może być rozwiązana/odrzucona jedynie raz - więc nie sprawdza się w ciągłych procesach (TIP: Observables).
// złapiemy jedynie pierwszy click

const btn = document.querySelector('button#promiseTimer')
const pr = new Promise((resolve, reject) => {
  btn.addEventListener('click', () => {
    resolve('Wygrałeś!')
  })
  setTimeout(() => {
    reject('Przegrałeś:(')
  },
    5000)
})
pr.then(console.log).catch(console.log)

// Kolejny Promises use case - video:)
// const video = document.querySelector('#vid')
// navigator.mediaDevices.getUserMedia({ video: true })
//   .then(mediaStream => {
//     console.log(mediaStream, mediaStream.getVideoTracks())
//     video.srcObject = mediaStream
//     video.play()
//   })
// console.log('After getusermedia')