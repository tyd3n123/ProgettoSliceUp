const img1 = document.getElementById("img1");
const carrello = document.getElementById("carrello");

img1.onclick = function () {
    const nomePizza = img1.getAttribute("data-nome");

    // Aggiunge al carrello visivamente
    const li = document.createElement("li");
    li.textContent = nomePizza;
    carrello.appendChild(li);

    // Salva nel localStorage
    localStorage.setItem("Margherita", nomePizza);

    console.log("Pizza salvata nel localStorage:", nomePizza);
};
