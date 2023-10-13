export default function createContact(){
    const contact = document.createElement("div");
    const conteiner = document.getElementById("content");

    const tel = document.createElement("p");
    const email = document.createElement("p");
    const dir = document.createElement("p");

    tel.innerText = "111111111";
    email.innerText = "facturas@deliciosas.ar";
    dir.innerText = "calle falsa 123";

    contact.appendChild(tel);
    contact.appendChild(email);
    contact.appendChild(dir);
    conteiner.appendChild(contact);

}