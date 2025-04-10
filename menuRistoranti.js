const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

let listaPizze = [];

img1.onclick = function () {
    salvaPizza(img1, '.js-prezzo1');
};

img2.onclick = function () {
    salvaPizza(img2, '.js-prezzo2');
};

img3.onclick = function () {
    salvaPizza(img3, '.js-prezzo3');
};

img4.onclick = function () {
    salvaPizza(img4, '.js-prezzo4');
};

function salvaPizza(img, nomeP) {
    const nomePizza = img.getAttribute("data-nome");
    const prezzo = document.querySelector(nomeP).innerText;

    listaPizze.push({ nome: nomePizza, prezzo: prezzo });

    const li = document.createElement("li");
    li.textContent = `${nomePizza}  -  ${prezzo}`;
    carrello.appendChild(li);

    sessionStorage.setItem("ListaPizze", JSON.stringify(listaPizze));
    console.log("Lista pizze :", listaPizze);
}

