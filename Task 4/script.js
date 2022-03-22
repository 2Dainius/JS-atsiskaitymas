/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = 'cars.json';
const OUTPUT = document.querySelector('#output')

fetch(ENDPOINT)
.then(data => data.json())
.then(data => {
    data.forEach(item => {
        let models = ''
        item.models.forEach(element => models += `<span>${element}</span>`)
        OUTPUT.innerHTML += `
        <div>
            <h1>${item.brand}</h1>
            <h3>Models:</h3>
            <div class="model">
            ${models}
            </div>
        </div>
        `
    })
   
})