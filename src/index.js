import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact"

function clearContent(){
    const oldDiv = document.getElementById("content");
    const newDiv = document.createElement("div");
    newDiv.id = "content"
    oldDiv.replaceWith(newDiv)
}

function tabChangeHandler(tabCreator){
    clearContent();
    tabCreator();
}

function createButton(eventHandler,title) {
    const button = document.createElement("button");
    button.innerText = title
    button.addEventListener("click", eventHandler);
    return button;
}


(function createHeader(){
    const headerDiv = document.getElementsByClassName("header")[0];
    const header = document.createElement("div");
    header.classList.add("header");

    const buttons = [
        {
            title:"Home",
            handler:createHome
        },
        {
            title:"Menu",
            handler:createMenu
        },
        {
            title:"Contact",
            handler:createContact
        }
    ]

    buttons.forEach((button) => {
        const buttonEl = createButton(() => {
            tabChangeHandler(button.handler)
        },button.title);
        header.appendChild(buttonEl);
    })

    headerDiv.appendChild(header)
})();

createHome();
