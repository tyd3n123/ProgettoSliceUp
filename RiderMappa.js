// Inizializzazione della mappa con le coordinate iniziali
var map = L.map('map').setView([45.3099, 9.5009], 14);
mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    attribution: 'Leaflet &copy; ' + mapLink + ', contribution', 
    maxZoom: 18 
}).addTo(map);

// Marker del punto di partenza (Slice Up!)
var startMarker = L.marker([45.303755, 9.498528]).addTo(map);
startMarker.bindPopup("📍 Slice Up!").openPopup();

// Recupero coordinate salvate nel sessionStorage
let latString = sessionStorage.getItem("coordinateLat");
let lonString = sessionStorage.getItem("coordinateLon");
let pizzeriaLat = sessionStorage.getItem('coordinate-pizzeriaLat');
let pizzeriaLon = sessionStorage.getItem("coordinate-pizzeriaLon");

console.log(sessionStorage.getItem("coordinate-pizzeriaLat"));
console.log(sessionStorage.getItem("coordinate-pizzeriaLon"));



// Controllo se le coordinate esistono
if (latString && lonString) {
    let latNumber = parseFloat(latString);
    let lonNumber = parseFloat(lonString);

    console.log("Pizzeria: ", )
    console.log("Destinazione:", latNumber, lonNumber);

    // Marker della destinazione
    var endMarker = L.marker([latNumber, lonNumber]).addTo(map);
    endMarker.bindPopup("📍 Destinazione").openPopup();

    // Creazione del percorso stradale con OSRM
    L.Routing.control({
        waypoints: [
            L.latLng(45.303755, 9.498528), // Punto di partenza
            L.latLng(latNumber, lonNumber) // Punto di arrivo
        ],
        routeWhileDragging: true,
        createMarker: function () { return null; }, // Evita di creare marker duplicati
        router: new L.Routing.osrmv1({ // Utilizza OSRM per il percorso stradale
            serviceUrl: 'https://router.project-osrm.org/route/v1'
        })
    }).addTo(map);
} else {
    console.error("⚠️ Nessuna coordinata trovata nel sessionStorage!");
}
