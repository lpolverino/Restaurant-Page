export default function createMenu(){
    const menu = document.createElement("div");
    const conteiner = document.getElementById("content");
    const menuData = [
        "vigilante",
        "medialuna",
        "pastelito",
        "churros"
    ]

    const menuList = document.createElement("ul");

    menuData.forEach((factura) =>{
        const menuEl = document.createElement("li");
        menuEl.innerText = factura;
        menuList.appendChild(menuEl);
    });

    menu.appendChild(menuList);
    conteiner.appendChild(menu);
}