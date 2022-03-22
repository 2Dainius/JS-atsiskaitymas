/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const weightType = document.getElementById('weightType');
const weightValue = document.getElementById('weightValue');
const ozCard = document.getElementById('ozCard');
const toPounds = document.getElementById('toPounds');
const toGrams = document.getElementById('toGrams');
const toOunces = document.getElementById('toOunces');
const output = document.getElementById('output');

// Get a list of all cards
const cardArray = ['lbCard', 'gmCard', 'ozCard'];
// Keep track of select box option
let wt = 0;

// Listen for change in select box
weightType.addEventListener('change', (e) => {

  if(val === '1') {
    wt = 1;
    hideCard('lbCard');
  }
  if(val === '2') {
    wt = 2;
    hideCard('gmCard');
  }
  if(val === '3') {
    wt = 3;
    hideCard('ozCard');
  }
});

// Updates converted values on input
weightValue.addEventListener('input', (e) => {
  let val = e.target.value;
  convert(wt, val);
});

function convert(wt, val) {

      toPounds.innerHTML = (val*2.2046).toFixed(2);
      toGrams.innerHTML = val*1000;
      toOunces.innerHTML = (val*35.274).toFixed(2);
}