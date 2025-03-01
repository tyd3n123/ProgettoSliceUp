const img1 = document.getElementById("img1");
const carrello = document.getElementById("carrello");

img1.onclick = function () {
    const nomePizza = img1.getAttribute("data-nome");

    // Aggiunge al carrello visivamente
    const li = document.createElement("li");
    li.textContent = nomePizza;
    carrello.appendChild(li);

    // Salva nel sessionStorage
    sessionStorage.setItem("Margherita", nomePizza);
    
    let base64string = img1.src;
    sessionStorage.setItem("SavedImage", base64string);
    
    console.log("Immagine salvata nel sessionStorage", base64string);
    console.log("Pizza salvata nel sessionStorage:", nomePizza);
};



