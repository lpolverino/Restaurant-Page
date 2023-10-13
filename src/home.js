import factura from './facturas.png';

function createTitle(){
    const title = document.createElement("h1");
    title.innerText ="Facturas Deliciosas";
    return title
}

function createImage(){

    const img = document.createElement("img");
    img.src = factura
    return img
}

function createText(){
    const text = document.createElement("p");
    text.innerText = "We love cooking facturas"
    return text
}

export default function createHome(){
    const contEl = document.getElementById("content");

    const header = createTitle();

    const img = createImage();

    const text = createText();

    contEl.appendChild(header)
    contEl.appendChild(img)
    contEl.appendChild(text)


    return contEl
}