//Inizializzazione della mappa con le coordinate iniziali
var map = L.map('map').setView([45.3099, 9.5009], 14);
mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    attribution: 'Leaflet &copy; ' + mapLink + ', contribution', 
    maxZoom: 18 
}).addTo(map);

//Marker del punto di partenza
var startMarker = L.marker([45.303755, 9.498528]).addTo(map);
startMarker.bindPopup("📍 Slice Up!").openPopup();

//Recupero le coordinate salvate nel sessionStorage
let latString = sessionStorage.getItem("coordinateLat");
let lonString = sessionStorage.getItem("coordinateLon");
let pizzeriaLat = sessionStorage.getItem('coordinate-pizzeriaLat');
let pizzeriaLon = sessionStorage.getItem("coordinate-pizzeriaLon");

if (latString && lonString) {
    let latNumber = parseFloat(latString);
    let lonNumber = parseFloat(lonString);      
    let pizzeriaLat1 = parseFloat(pizzeriaLat);
    let pizzeriaLon1 = parseFloat(pizzeriaLon);

    console.log("Coordinate Pizzeria: ", pizzeriaLat1, pizzeriaLon1 );
    console.log("Coordinate Destinazione:", latNumber, lonNumber);

    //Marker della destinazione
    var endMarker = L.marker([latNumber, lonNumber]).addTo(map);
    endMarker.bindPopup("📍 Destinazione").openPopup();

    var pizzeriaMarker = L.marker([pizzeriaLat1, pizzeriaLon1]).addTo(map);
    pizzeriaMarker.bindPopup("📍 Pizzeria").openPopup();

    //Marker mobile che si muoverà lungo il percorso
    var movingMarker = L.marker([45.303755, 9.498528], {
        icon: L.icon({
            iconUrl: '/Immagini/riderpizza.png', 
            iconSize: [50, 50]
        })
    }).addTo(map);



    //Creazione del percorso stradale con OSRM
    var routeControl = L.Routing.control({
        waypoints: [
            L.latLng(45.303755, 9.498528), // Punto di partenza
            L.latLng(pizzeriaLat1, pizzeriaLon1), // Tappa 1
            L.latLng(latNumber, lonNumber) // Destinazione (indirizzo utente)
        ],
        routeWhileDragging: true,
        createMarker: function () { return null; }, // Evita di creare marker duplicati
        router: new L.Routing.osrmv1({
            serviceUrl: 'https://router.project-osrm.org/route/v1'
        })
    }).addTo(map);

    

    // Aspetta il calcolo del percorso
    routeControl.on('routesfound', function (e) {
        var route = e.routes[0].coordinates; //Estraggo i punti del percorso

        let i = 0;
        let atPizzeria = false; //Controlla se il marker è alla pizzeria
        let isMoving = false; //Controlla se il movimento è stato avviato

        //Funzione per avviare il movimento del marker
        function moveMarker() {
            if (i < route.length) {
                let currentLat = route[i].lat;
                let currentLon = route[i].lng;
        
                movingMarker.setLatLng([currentLat, currentLon]);
        
                const currentPos = L.latLng(currentLat, currentLon);
                const pizzeriaPos = L.latLng(pizzeriaLat1, pizzeriaLon1);
        
                const distanza = currentPos.distanceTo(pizzeriaPos);
                console.log(`i: ${i}, LatLng attuale: (${currentLat}, ${currentLon}), distanza dalla pizzeria: ${distanza.toFixed(2)} metri`);
        
                if (!atPizzeria && distanza < 20) { // soglia aumentata a 20 metri per sicurezza
                    atPizzeria = true;
                    console.log("✅ Arrivato alla pizzeria! Pausa di 3 secondi...");
        
                    setTimeout(() => {
                        i++;
                        console.log("⏱️ Ripartenza dopo la pausa...");
                        moveMarker();
                    }, 3000);

                    let primaTappa = document.querySelector('.prima-tappa');
                    primaTappa.src = "/Immagini/tappa-Raggiunta.png";

                } else {
                    i++;
                    setTimeout(moveMarker, 100);
                }
            } else {
                const modale = document.querySelector('.popUp-destinazione');
                const pulsanteChiudi = document.querySelector('.chiudi-popup');

                const audio = new Audio('/audio/victory.mp3');
                audio.play();

                modale.classList.add('attiva');
                
                pulsanteChiudi.addEventListener("click", () => {
                    modale.classList.remove('attiva');
                });

                console.log("🏁 Marker arrivato alla destinazione finale.");
                let destinazione = document.querySelector('.destinazione');
                destinazione.src = "/Immagini/destinazione-raggiunta.png";
            }
        }
        
        
        
        //Quando clicco il pulsante la simulazione del rider parte
        document.getElementById("startButton").addEventListener("click", function() {
            if (!isMoving) {
                isMoving = true;
                moveMarker();
            }
        });
    });

}