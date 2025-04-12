

function geocodeAddress(address) {
    var url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = data[0].lat;
                var lon = data[0].lon;
                console.log(`Coordinate trovate: Lat: ${lat}, Lon: ${lon}`);

                let coordinateLat = sessionStorage.setItem("coordinateLat",lat);
                let coordinateLon = sessionStorage.setItem("coordinateLon",lon);
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


/*Fa apparire il carrello*/
    let listaPizze = JSON.parse(sessionStorage.getItem("ListaPizze")) || [];
    console.log(listaPizze);

    function mostraCarrello(){
        let carrelloHTML = '';
        if(listaPizze.length !== 0){
            for (let i = 0; i < listaPizze.length; i++) {
                carrelloHTML += `
                <div class='listaCart' data-id="${i}">
                    <p>${listaPizze[i].nome} - ${listaPizze[i].prezzo}</p>
                    <button onclick="rimuovi(${i})" class="pulsante-rimuovi">Rimuovi</button>
                </div>
                `;  
                }
        } else{
            carrelloHTML += `
                <p>Il carrello è vuoto</p>
                `;  
        }
        document.querySelector('.carrello').innerHTML = carrelloHTML;
    }
    mostraCarrello();

    function rimuovi(index){
        listaPizze.splice(index, 1)
        mostraCarrello();
    }

function aggiornaConteggioPizze(){
        let numeroTotalePizze = listaPizze.length;
        document.querySelector('.tot-items').innerText = numeroTotalePizze;
    }

aggiornaConteggioPizze();