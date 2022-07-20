let api = 'https://restcountries.com/v3.1/all';
let cardlar = document.getElementById('cardlar')
let datasearch = document.querySelector(".myhelp")
let search = document.getElementById('search')
let html = '';
let inputsearch = '';
window.addEventListener('DOMContentLoaded', () => {
    show();
})

function show() {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            Array.from(data).forEach(item => {
                html += `
                <div class="col-md-4 card  box-shadow p-3 m-4" style="width:350px;">
                        <img src="${item.flags.png}" alt="${item.flags.png}">
                        <h3 class="p-1" id='name'><strong>${item.name.common}</strong></h3>
                        <p class="h5"><strong>Capital:</strong>${item.capital}</p>
                        <p class="h5"><strong>Languages:</strong>${Object.values(item.languages || {})}</p>
                        <p class="h5"><strong>Population:</strong>${item.population}</p>
                        <p class="h5"><strong>Border:</strong>${(item.borders!=null)?item.borders:
                        'This country has no borders'}</p>
                        <p class="h5"><strong>Area:</strong>${item.area}</p>
                </div>
                `
                inputsearch += `
                <option value="${item.name.common}"></option>
                `
                cardlar.innerHTML = html
                datasearch.innerHTML = inputsearch

            })
        });

    search.addEventListener('input', () => {
        let searchVal = search.value;
        let card1 = document.querySelectorAll('.card')
        card1.forEach(card => {
            cardVal = card.textContent

            let re = new RegExp(searchVal, 'gi')
            console.log(re);
            if (cardVal.match(re)) {
                card.style.display = 'block'
            } else {
                card.style.display = 'none'
            }
        })

    })
}
let mybg=document.querySelector('.mybg');
let sun=document.querySelector('.sun');

sun.addEventListener('click',()=>{
    mybg.classList.toggle("active")
})
