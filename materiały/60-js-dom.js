
// --------------------------------------------------
// Pobieranie referencji do obiektu ze struktury DOM
// --------------------------------------------------

// po id
const cancelButton = window.document.getElementById('cancel')

// po dowolnym selektorze CSS
const buttonsContainer = document.querySelector('.buttons') // selektory jak w css: .ok, button itd
const mainContainer = document.querySelector('main')
const forumContainer = document.querySelector('.forum')
const okButton = document.querySelector('#ok')



// -------------------------------
// Pobieranie listy elementów
// -------------------------------

// pobieranie elementu po dowolnym selektorze CSS
const imgList = document.querySelectorAll('.thumb') // zwraca obiekt NodeList (posiada iterator, entries, keys, values)

// pobieranie elementów po klasie CSS
const priceList = document.getElementsByClassName('price') // HTMLCollection - typ mniej wygodny od NodeList (tylko iterator)

// Pobieranie elementów po atrybucie name
// elem.getElementsByName()

// Pobieranie elementów po nazwie znacznika
// elem.getElementsByTagName(NS)



// ----------------------------
// Tworzenie nowego elementu
// ----------------------------
const newOk = document.createElement('button')


// ------------------------
// Klonowanie elementu
// ------------------------
const okClone = okButton.cloneNode()
okClone.textContent = 'Ok clone'


// ------------------------
// Usuwanie elementu
// ------------------------
const okClone2 = okButton.cloneNode()
okClone.remove()


// -----------------------------
// Style CSS
// -----------------------------
mainContainer.style.background = "#000"
mainContainer.style.marginTop = "10px"

// Pobieranie obliczonych css-ow
// getComputedStyle zwraca referencję do obiektu css  elementu
// (zmiana css, powoduje zmianę w wartościach właściwości obiektu)
const mainStyles = window.getComputedStyle(mainContainer)
console.log(mainStyles.backgroundColor) // rgb(0,0,0)
mainContainer.style.backgroundColor = 'lightblue'
console.log(mainStyles.backgroundColor) // rgb(173,216,230) - lightblue


// ---------------
// Klasy CSS
// ---------------

// czyszczenie nadpisywanie klas CSS
mainContainer.className = "red big header"

// dodanie klas (tylko jeśli nie istnieje)
mainContainer.classList.add("red")

// usunięcie klasy (tylko jeśli istnieje)
mainContainer.classList.remove("header")

// włączenie/wyłaczenie klasy
mainContainer.classList.toggle("header")
console.log('main has header: ', mainContainer.classList.contains("header"))


// -------------------------------------
// Zmiana dowolnego atrybutu elementu
// -------------------------------------
mainContainer.setAttribute('custom', '1');
mainContainer.setAttribute('custom2', '2');
mainContainer.removeAttribute('custom2');


// ----------------------------------------------
// Praca z obiektem dataset (atrybuty data-XXX)
// ----------------------------------------------
mainContainer.dataset.tooltip = 'Dane do customowego tooltipa'



// -------------------
// Rozmiary elementu
// -------------------
// rozmiar z paskami, toolbarem etc
// .outerWidth /.outerHeight

// rozmiar viewport
// .innerWidth/.innerHeight

// całość elementu (również niewidoczna część)
// .scrollWidth/.scrollHeight

// widoczna część elementu (z paddingiem i borderem)
// offsetWidth/offsetHeight

// widoczna eczęść elementu (bez bordera)
// clientWidth/clientHeight


// ------------------------
// Zmiana struktury DOM
// ------------------------
// Uwaga: ponowne użycie dziecka które już jest w strukturze DOM
// spowoduje przeniesienie go w nowe miejsce (mamy referencję do obiektu)! 
// vide cancelButton - wędruje z Buttons do Main

// Dodawanie dziecka
mainContainer.appendChild(okButton) // dodaje na końcu dzieci
// mainContainer.prepend(okButton) // dodaje na początku dzieci

// lub .append() - pozwala dodawać wiele node jednocześnie oraz text nodes
// mainContainer.append

mainContainer.appendChild(okClone)
// mainContainer.appendChild(cancelButton) // <-- przeniesione z Buttons do Main

// Usuwanie dziecka
// mainContainer.removeChild(cancelButton)

// Podmiana dziecka
mainContainer.replaceChild(cancelButton, okButton)

// Wstawianie przed/za elementem
const mainClone = mainContainer.cloneNode(true) // deep clone - z dziećmi:)
const firstH5 = document.querySelector('h5')

document.body.insertBefore(mainClone, firstH5)
// lub
firstH5.before(mainClone)
// analogicznie
firstH5.after(mainClone)

// Pobranie/zamiana zawartości elementu
forumContainer.innerHTML = '<h1>Rzeźbie html-a z js-a</h1>'
const forumContent = forumContainer.innerHTML // lub .textContent lub .innerText
forumContainer.textContent = 'nudno tutaj...'
forumContainer.textContent += forumContent // nie ma html-a!

// Dostęp do rodzica elementu
// okButton.parentNode // w 99% przypadków to samo: .parentElement

// Dostęp do rodzeństwa
const nextElement = okButton.nextSibling
const prevElement = okButton.previousSibling

// Dostęp do dzieci elemenut
const mainChildren = mainContainer.children

