function createButton() {
    const button = document.createElement("button");
    button.innerText = "Click Me"

    return button
}

function createHeader(){
    const header = document.createElement("div");
    const button = createButton();

    header.classList.add("header");
    header.appendChild(button);

    return header
}

function createImage(){

    const img = document.createElement("img");
    img.src = "../img/facturas.png"
    return img
}

function createText(){
    const text = document.createElement("p");
    text.innerText = "We love cooking facturas"
    return text
}

export default function createHome(){
    const contEl = document.getElementById("content");

    const header = createHeader();

    const img = createImage();

    const text = createText();

    contEl.appendChild(header)
    contEl.appendChild(img)
    contEl.appendChild(text)


    return contEl
}