{/* <h1>About Chihara</h1>
<div class="about history">
 <p>In its early days, Chihara was a modest establishment, known primarily by locals who were captivated by its intimate setting and the authenticity of its dishes. The restaurant's signature dish, "Miso-Marinated Kurobuta Pork," quickly became a favorite, embodying the perfect balance between tradition and creativity. Akira's meticulous attention to detail in preparing the dishes, coupled with Yumi's deep understanding of Japanese food culture, created a dining experience that was both familiar and novel.</p>
 <img src="./assets/images/old-restaurant.jpg" alt="old-restaurant", height="250px">
</div>
<div class="about contact">
 <h1>Contact Us</h1>
 <form action="index.html" method="post">
     <p>
         <label for="name">Your Name:</label>
         <input type="text" name="user_name" id="name">
     </p>
     <p>
         <label for="email">Your Email:</label>
         <input type="email" name="email" id="email">
     </p>
     <p>
         <label for="remark">Remark:</label>
         <textarea name="remark" id="remark" rows="4" cols="50"></textarea>
     </p>

     <p>
         <input type="submit" value="submit" class="net-button" id="formSubmissionButton" />
     </p>
 </form>
</div> */}


import aboutBg from "./assets/images/about-background.jpg";
import oldHouse from "./assets/images/old-restaurant.jpg";
import "./about.css";
export function aboutContent(doc)
{
    doc.body.style.backgroundImage = `url(${aboutBg})`;

    const heading = doc.createElement('h1');
    heading.textContent = "About Chihara";

    const firstDiv = doc.createElement('div');
    firstDiv.classList.add("about", "history");

    const passage = doc.createElement('p');
    passage.textContent = "In its early days, Chihara was a modest establishment, known primarily by locals who were captivated by its intimate setting and the authenticity of its dishes. The restaurant's signature dish, \"Miso-Marinated Kurobuta Pork,\" quickly became a favorite, embodying the perfect balance between tradition and creativity. Akira's meticulous attention to detail in preparing the dishes, coupled with Yumi's deep understanding of Japanese food culture, created a dining experience that was both familiar and novel.";

    const passageImg = doc.createElement('img');
    passageImg.src = oldHouse;

    firstDiv.appendChild(passage);
    firstDiv.appendChild(passageImg);

    const secondDiv = doc.createElement('div');
    secondDiv.classList.add("about", "contact");
    const subHeading = doc.createElement('h1');
    subHeading.textContent = "Contact Us";

    const form = doc.createElement('form');
    form.setAttribute("action", "#");
    form.setAttribute("method", "post");

    const formElement = [...Array(4)].map((x) => x = doc.createElement('p'));

    setLabel(formElement[0], "text", "name", "name", "Your Name:");
    setLabel(formElement[1], "email", "mail", "email", "Your Email:");
    setLabel(formElement[2], "text", "remark", "remark", "Remark:");
    setLabel(formElement[3], "submit", "formSubmissionButton", "name", "", "Submit");

    formElement.forEach(element => {
        form.appendChild(element);
    });

    secondDiv.appendChild(subHeading);
    secondDiv.appendChild(form);

    const mainBox = doc.querySelector("#content");
    mainBox.appendChild(heading);
    mainBox.appendChild(firstDiv);
    mainBox.appendChild(secondDiv);

    const submitButton = doc.querySelector("#formSubmissionButton");
    submitButton.addEventListener("click", (e)=>{
        e.preventDefault();
    }
    );
    

};

function setLabel(ele, type, id, name, content, value='')
{
    const label = document.createElement('label');
    const input = document.createElement('input');
    label.setAttribute("for", id);
    label.textContent = content;
    setAttr(input, {
        "type": type,
        "id": id,
        "name": name,
        "value": value,
    });
    ele.appendChild(label);
    ele.appendChild(input);
}

function setAttr(ele, attr)
{
    for(let key in attr)
        ele.setAttribute(key, attr[key]);
}