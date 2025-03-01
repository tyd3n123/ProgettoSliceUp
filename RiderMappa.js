    
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
 
 
 // Aggiunta di marker una vota che clicco sulla mappa
     map.on('click', function (e) {
         console.log(e)
         var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
         L.Routing.control({
             waypoints: [
                 L.latLng(45.303755, 9.498528),
                 L.latLng(e.latlng.lat, e.latlng.lng)
                 ]
 // con un ciclo for fa arrivare l'icona al punto di arrivo       
     }).on('routesfound', function (e) {
         var routes = e.routes;
         console.log(routes);
 
         e.routes[0].coordinates.forEach(function (coord, index) {
         setTimeout(function () {
         marker.setLatLng([coord.lat, coord.lng]);
         if (index === e.routes[0].coordinates.length - 1) {
         marker.bindPopup("Arrivato!").openPopup();
                     }
                     }, 100 * index)
                 })
             }).addTo(map);
         });
 
let latString = sessionStorage.getItem("coordinateLat");
let lonString = sessionStorage.getItem("coordinateLon");
let latNumber = parseFloat(latString);
let lonNumber = parseFloat(lonString);
console.log(latNumber);
console.log(lonNumber);

var marker1 = L.marker([latNumber, lonNumber]).addTo(map);

/*
         // Aggiungi il marker alla mappa
         var marker = L.marker([lat, lon]).addTo(map)
         .bindPopup(`📍 ${address}<br>Lat: ${lat}, Lon: ${lon}`)
         .openPopup();
*/