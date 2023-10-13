export default function createHome(){
    const contEl = document.getElementById("content");
    console.log(document);

    const header = document.createElement("div");
    const button = document.createElement("button");

    button.innerText = "Click Me"
    header.classList.add("header");
    header.appendChild(button);

    const img = document.createElement("img");
    img.src = "../img/facturas.png"

    const text = document.createElement("p");
    text.innerText = "We love cooking facturas"

    contEl.appendChild(header)
    contEl.appendChild(img)
    contEl.appendChild(text)


    return contEl
}