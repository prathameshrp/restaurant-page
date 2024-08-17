// {/* <div>
// <span>AUTHENTIC TRADITIONAL AND MODERN MEXICAN CUISINE IN TORONTO</span>
// <span class="aside-image"></span>
// </div>
// <div>
    
// <p>Exclusive cuisines of Chihara Restaurant now in Birmingham Michigan. Experience the flavours of Chihara.</p>
// <img src="./assets/images/aside-image.jpg" alt="side image" class="second-div-image" height="250px">

// <p>Also available now - French, Japanese and other Asian cuisines. bringing a broad range of traditions and local cuisines.</p>
// </div> */
// }
import asideImage from "./assets/images/aside-image.jpg";
import mainBg from "./assets/images/background.jpg";
export function content(doc){
    
    doc.body.style.backgroundImage = `url(${mainBg})`;
    const parentDivs = [...Array(2)].map((x) => x = doc.createElement('div'));
    const firstParentSpan1 = doc.createElement('span');
    const firstParentSpan2 = doc.createElement('span');
    firstParentSpan1.textContent = "AUTHENTIC TRADITIONAL AND MODERN MEXICAN CUISINE IN TORONTO";
    firstParentSpan2.setAttribute("class", "aside-image");
    parentDivs[0].appendChild(firstParentSpan1);
    parentDivs[0].appendChild(firstParentSpan2);

    // second div:
    const secondParentP1 = doc.createElement('p');
    const secondParentImg = doc.createElement('img');
    const secondParentP2 = doc.createElement('p');

    secondParentP1.textContent = "Exclusive cuisines of Chihara Restaurant now in Birmingham Michigan. Experience the flavours of Chihara.";
    secondParentP2.textContent = "Also available now - French, Japanese and other Asian cuisines. bringing a broad range of traditions and local cuisines.";
    secondParentImg.src = asideImage;
    secondParentImg.setAttribute("class", "second-div-image");

    parentDivs[1].appendChild(secondParentP1);
    parentDivs[1].appendChild(secondParentImg);
    parentDivs[1].appendChild(secondParentP2);

    //append to #content
    parentDivs.forEach((div) => doc.querySelector("#content").appendChild(div));

    window.onload = function()
    {
        doc.querySelector("#loader").style.display = "none";
        doc.body.style.overflow = "visible";
    }
}