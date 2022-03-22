/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = 'https://api.github.com/users';
const OUTPUT = document.querySelector('#output')
const BTN = document.querySelector('#btn')
BTN.addEventListener('click', () => {
    fetch(ENDPOINT)
    .then(data => data.json())
    .then(data => {
        OUTPUT.innerHTML = ''
        data.forEach(item => {
            OUTPUT.innerHTML += `
                <div>
                    <h2>${item.login}</h2>
                    <img src="${item.avatar_url}">
                </div>
            `
        });
    })
})