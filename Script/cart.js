function geocodeAddress(address) {
    var url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = data[0].lat;
                var lon = data[0].lon;
                console.log(`Coordinate trovate: Lat: ${lat}, Lon: ${lon}`);

                sessionStorage.setItem("coordinateLat", lat);
                sessionStorage.setItem("coordinateLon", lon);
                console.log("Coordinate salvate:", lat, lon);
            } 
        })
}

let PrimoPulsante = document.getElementById("salva-dati");
let SecondoPulsante = document.getElementById("checkout");

SecondoPulsante.disabled = true;

PrimoPulsante.addEventListener("click", function() {
    SecondoPulsante.disabled = false;
    PrimoPulsante.disabled = true;
});

/* Fa apparire il carrello */
let listaPizze = JSON.parse(sessionStorage.getItem("ListaPizze")) || [];
console.log(listaPizze);

function mostraCarrello() {
    let carrelloHTML = '';

    if (listaPizze.length !== 0) {
        // Raggruppa le pizze
        let conteggio = {};

        listaPizze.forEach((pizza) => {
            if (conteggio[pizza.nome]) {
                conteggio[pizza.nome].quantita++;
            } else {
                conteggio[pizza.nome] = {
                    prezzo: parseFloat(pizza.prezzo),
                    quantita: 1
                };
            }
        });

        // Stampa il carrello
        for (let nome in conteggio) {
            carrelloHTML += `
            <div class='listaCart'>
                <p>${nome} ${conteggio[nome].quantita > 1 ? `x${conteggio[nome].quantita}` : ''} - ${(conteggio[nome].prezzo * conteggio[nome].quantita).toFixed(2)} €</p>
                <button onclick="rimuoviPizza('${nome}')" class="pulsante-rimuovi">Rimuovi</button>
            </div>
            `;
        }
    } else {
        carrelloHTML += `<p>Il carrello è vuoto</p>`;
    }

    document.querySelector('.carrello').innerHTML = carrelloHTML;

    aggiornaTotali();
}

mostraCarrello();

// Rimuove una sola pizza alla volta
function rimuoviPizza(nomePizza) {
    let index = listaPizze.findIndex(pizza => pizza.nome === nomePizza);
    if (index !== -1) {
        listaPizze.splice(index, 1);
        sessionStorage.setItem("ListaPizze", JSON.stringify(listaPizze));
        mostraCarrello();
    }
}

// Aggiorna numero di pizze e totale
function aggiornaTotali() {
    const totItems = document.getElementById('tot-items');
    totItems.innerHTML = listaPizze.length;

    let totalePrezzoPizze = 0;
    for (let i = 0; i < listaPizze.length; i++) {
        totalePrezzoPizze += parseFloat(listaPizze[i].prezzo);
    }

    const totalePrezzo = document.getElementById('tot-totale');
    totalePrezzo.innerHTML = `${totalePrezzoPizze.toFixed(2)} €`;
}
