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
var pizzeria1 = L.marker([45.31354101534006, 9.497417886649474]).addTo(map);
pizzeria1.bindPopup("Pizzeria Il pirata");
pizzeria1.on('click', function()
{
window.open('menuRistoranti.html'); // Apre il link in una nuova scheda
});
// Apri il popup quando il mouse entra
pizzeria1.on('mouseover', function() {
    this.openPopup();
});
// Chiudi il popup quando il mouse esce
pizzeria1.on('mouseout', function() {
    this.closePopup();
});



var pizzeria2 = L.marker([45.30973930473166, 9.50638690530139]).addTo(map);
pizzeria2.bindPopup("Pizzeria Calicantus");
pizzeria2.on('click', function() {
    window.open('menuRistoranti.html'); // Apre il link in una nuova scheda
});
// Apri il popup quando il mouse entra
pizzeria2.on('mouseover', function() {
    this.openPopup();
});
// Chiudi il popup quando il mouse esce
pizzeria2.on('mouseout', function() {
    this.closePopup();
});


var pizzeria3 = L.marker([45.30065023519617, 9.499927746348758]).addTo(map);
pizzeria3.bindPopup("Pizzeria Alta marea");
pizzeria3.on('click', function() {
    window.open('menuRistoranti.html'); // Apre il link in una nuova scheda
});
    // Apri il popup quando il mouse entra
    pizzeria3.on('mouseover', function() {
        this.openPopup();
    });
    // Chiudi il popup quando il mouse esce
    pizzeria3.on('mouseout', function() {
        this.closePopup();
    });

