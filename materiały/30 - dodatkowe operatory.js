// ---------------------------------
// inkrementacja/dekrementacja
// --------------------------------
let licznik = 0
licznik++
++licznik
--licznik
licznik--



// -------------------
// Optional chaining
// -------------------

const foo = { bar: { baz: () => { } } };
const bar = ''

// problem: 
if (foo && foo.bar) {
  const x = foo.bar.baz()
}
// lub const x = foo && foo.bar && foo.baz()

// optional chaining
const x = foo?.bar?.baz();
// ? nie robi 'falsy' values w przeciwieństwie do && w if, 


// --------------------------
// Nullish coalescing
// --------------------------
// problem:
const y = (foo !== null && foo !== undefined) ? foo : bar;
// rozw
const z = foo ?? bar;


// ---------------------------
// Operatory logiczne and i or
// ---------------------------
function someFunctionHardToEvaluate() {
  console.log('loong await');
  return Math.random() > 0.5
}

// ile razy wykona się somenFunctionHardToEvaluate?
const warunek1 = true
const warunek2 = false
const wynik1 = warunek1 && warunek2 && someFunctionHardToEvaluate()
const wynik2 = warunek1 || warunek2 || someFunctionHardToEvaluate()
