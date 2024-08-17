import "./assets/fonts/stylesheet.css"
import "./style.css";

import { content } from "./DOMContent.js";
import { aboutContent } from "./about_page.js";
import { menu } from "./menu.js";
content(document);
// aboutContent(document);
// menu(document);

const loadPage = (function(doc){
    const homeBtn = doc.querySelector("#home");
    const menuBtn = doc.querySelector("#menuBtn");
    const aboutBtn = doc.querySelector("#about");
    const container = doc.querySelector("#content");
    const header = doc.querySelector("header");
    homeBtn.addEventListener("click", ()=>{
        header.classList.remove("changeBg");
        doc.body.classList.remove("hide-after");
        container.replaceChildren();
        content(doc);
    });
    menuBtn.addEventListener("click", ()=>{
        container.replaceChildren();
        menu(doc);
    });
    aboutBtn.addEventListener("click", ()=>{
        header.classList.remove("changeBg");
        doc.body.classList.remove("hide-after");
        container.replaceChildren();
        aboutContent(doc);
    });
})(document);
console.log("It's working");