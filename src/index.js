import createHome from "./home";

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

createHeader();

createHome();
