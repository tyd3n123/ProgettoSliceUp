 // Inizializzazione della mappa con le coordinate originali
 var map = L.map('map').setView([45.3099, 9.5009], 14);
 mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);


var marker = L.marker([45.303755, 9.498528]).addTo(map); 
marker.bindPopup("Slice Up!").openPopup();

// Creazione di un cerchio attorno a un punto
var circle = L.circle([45.3099, 9.5009], {
color: "blue",         // Colore bordo
opacity: 0.2,         // Opacità del bordo
fillColor: "lightblue", // Colore di riempimento
fillOpacity: 0.2,        // Opacità
radius: 2100 // Raggio casuale raddoppiato
}).addTo(map)



// Creazione di un marker per ogni ristorante
var pizzeria1 = L.marker([45.31354101534006, 9.497417886649474], {
    icon: L.icon({
        iconUrl: 'Immagini/IlPirata.png',
        iconSize: [30, 40]
    })
}).addTo(map);
    pizzeria1.bindPopup("Pizzeria Il pirata");
    pizzeria1.on('click', function()
    {
    window.location.href = 'menuRistoranti.html'; // Apre la pagina del menù
    });
    // Apri il popup quando il mouse entra
    pizzeria1.on('mouseover', function() {
        this.openPopup();
    });
    // Chiudi il popup quando il mouse esce
    pizzeria1.on('mouseout', function()  {
        this.closePopup();
    });
        pizzeria1.on('click', function() {
            sessionStorage.setItem("coordinate-pizzeriaLat", JSON.parse(45.31354101534006));
            sessionStorage.setItem("coordinate-pizzeriaLon", JSON.parse(9.497417886649474));
            
            console.log("Pizzeria 1 salvata:", sessionStorage.getItem('coordinate-pizzeriaLat'), sessionStorage.getItem('coordinate-pizzeriaLon'));
        });


var pizzeria2 = L.marker([45.30973930473166, 9.50638690530139], {
    icon: L.icon({
        iconUrl: 'Immagini/Calicantus.png',
        iconSize: [30, 40]
    })
}).addTo(map);
    pizzeria2.bindPopup("Pizzeria Calicantus");
    pizzeria2.on('click', function() {
        window.location.href = 'menuRistoranti.html'; // Apre la pagina del menù
    });
    // Apri il popup quando il mouse entra
    pizzeria2.on('mouseover', function() {
        this.openPopup();
    });
    // Chiudi il popup quando il mouse esce
    pizzeria2.on('mouseout', function() {
        this.closePopup();
    });
        pizzeria2.on('click', function() {
            sessionStorage.setItem("coordinate-pizzeriaLat", JSON.stringify(45.30973930473166));
            sessionStorage.setItem("coordinate-pizzeriaLon", JSON.stringify(9.50638690530139));
        
            console.log("Pizzeria 2 salvata:", sessionStorage.getItem('coordinate-pizzeriaLat'), sessionStorage.getItem('coordinate-pizzeriaLon'));
        });
    




var pizzeria3 = L.marker([45.30065023519617, 9.499927746348758], {
    icon: L.icon({
        iconUrl: 'Immagini/AltaMarea.png',
        iconSize: [30, 40]
    })
}).addTo(map);
    pizzeria3.bindPopup("Pizzeria Alta marea");
    pizzeria3.on('click', function() {
        window.location.href = 'menuRistoranti.html'; // Apre la pagina del menù
    });
        // Apri il popup quando il mouse entra
        pizzeria3.on('mouseover', function() {
            this.openPopup();
        });
        // Chiudi il popup quando il mouse esce
        pizzeria3.on('mouseout', function() {
            this.closePopup();
        });
        pizzeria3.on('click', function() {
            sessionStorage.setItem("coordinate-pizzeriaLat", JSON.stringify(45.30065023519617));
            sessionStorage.setItem("coordinate-pizzeriaLon", JSON.stringify(9.499927746348758));
        
            console.log("Pizzeria 3 salvata:", sessionStorage.getItem('coordinate-pizzeriaLat'), sessionStorage.getItem('coordinate-pizzeriaLon'));
        });