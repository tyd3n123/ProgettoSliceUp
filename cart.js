

function geocodeAddress(address) {
    var url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = data[0].lat;
                var lon = data[0].lon;
                console.log(`Coordinate trovate: Lat: ${lat}, Lon: ${lon}`);


                let coordinateLat = sessionStorage.setItem("coordinateLat",JSON.parse(lat));
                let coordinateLon = sessionStorage.setItem("coordinateLon",JSON.parse(lon));
                console.log("coordinateLat");
                console.log("coordinateLon");
                      
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

let PizzaImg = sessionStorage.getItem("Margherita");
let PizzaNome = sessionStorage.getItem("SavedImage");
console.log(PizzaImg);
console.log(PizzaNome);

