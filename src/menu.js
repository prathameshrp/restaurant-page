import "./menu.css";
import menuBg from "./assets/images/menu-bg.jpg"
export function menu(doc) {
    doc.body.style.backgroundImage = `url(${menuBg})`;
    document.body.classList.add("hide-after");
}