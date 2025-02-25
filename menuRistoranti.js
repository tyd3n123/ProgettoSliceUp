
const img1 = document.getElementById("img1");
const carrello = document.getElementById("carrello");

img1.onclick = function(){
    const nomePizza = img1.getAttribute("data-nome");
    const li = document.createElement("li");
    li.textContent = nomePizza;
    carrello.appendChild(li);
}
