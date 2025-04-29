const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

let listaPizze = JSON.parse(sessionStorage.getItem("ListaPizze")) || [];

const carrello = document.getElementById("carrello"); // Assicurati che esista

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

    sessionStorage.setItem("ListaPizze", JSON.stringify(listaPizze));
    console.log("Lista pizze:", listaPizze);

    mostraCarrello();
}

function mostraCarrello() {
    carrello.innerHTML = '';

    // Conta le pizze
    let conteggio = {};

    listaPizze.forEach(pizza => {
        if (conteggio[pizza.nome]) {
            conteggio[pizza.nome].quantita++;
        } else {
            conteggio[pizza.nome] = {
                prezzo: parseFloat(pizza.prezzo),
                quantita: 1
            };
        }
    });

    // Disegna le pizze
    for (let nome in conteggio) {
        const li = document.createElement("li");
        li.textContent = `${nome} ${conteggio[nome].quantita > 1 ? `x${conteggio[nome].quantita}` : ''} - ${(conteggio[nome].prezzo * conteggio[nome].quantita).toFixed(2)} €`;
        carrello.appendChild(li);
    }
}

// Quando la pagina si ricarica, ricostruisci il carrello
mostraCarrello();
