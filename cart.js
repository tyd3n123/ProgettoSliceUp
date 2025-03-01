
/*
function geocodeAddress(address) {
    var url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = data[0].lat;
                var lon = data[0].lon;
                console.log(`Coordinate trovate: Lat: ${lat}, Lon: ${lon}`);

                // Aggiungi il marker alla mappa
                var marker = L.marker([lat, lon]).addTo(map)
                    .bindPopup(`📍 ${address}<br>Lat: ${lat}, Lon: ${lon}`)
                    .openPopup();



                // Centra la mappa sul risultato
                map.setView([lat, lon], 13);
            } else {
                alert("Indirizzo non trovato!");
            }
        })
        .catch(error => console.error('Errore:', error));
}
        
*/
