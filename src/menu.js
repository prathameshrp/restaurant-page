{/* <h2 id="menuTitle">Our Menu</h2>
<aside id="menu">
  <section class="grid-item">
      <h3>Starters</h3>
      <dl>
          <dt>Crispy Spring Rolls</dt>
          <dd>Golden-fried rolls stuffed with a blend of fresh vegetables and spices, served with sweet chili dipping sauce.</dd>
          <dt>Garlic Butter Shrimp</dt>
          <dd>Succulent shrimp sautéed in a rich garlic butter sauce, garnished with parsley.</dd>
          <dt>Bruschetta Trio</dt>
          <dd>Toasted baguette slices topped with a variety of toppings: classic tomato-basil, mushroom-tarragon, and whipped feta with honey.</dd>
      </dl>
  </section>
  <section class="grid-item">
      <h3>Mains</h3>
      <dl>
          <dt>Herb-Crusted Salmon</dt>
          <dd>Oven-baked salmon fillet with a crunchy herb crust, served with a lemon dill sauce, roasted potatoes, and asparagus.
          </dd>
          <dt>Spaghetti Carbonara</dt>
          <dd>Classic Italian pasta dish with a creamy egg-based sauce, crispy pancetta, and a sprinkle of Parmesan cheese.</dd>
          <dt>Vegetarian Stir-Fry</dt>
          <dd>A colorful mix of vegetables sautéed in a tangy soy-ginger sauce, served over steamed jasmine rice.</dd>
          <dt>Chicken Tikka Masala</dt>
          <dd>Marinated chicken cooked in a rich, creamy tomato sauce, served with basmati rice and garlic naan.</dd>
      </dl>
  </section>
  <section class="grid-item">
      <h3>Deserts</h3>
      <dl>
          <dt>Molten Lava Cake</dt>
          <dd>Rich chocolate cake with a gooey molten center, served warm with vanilla ice cream.</dd>
          <dt>Tiramisu</dt>
          <dd>Traditional Italian dessert with layers of coffee-soaked ladyfingers, mascarpone cream, and a dusting of cocoa powder.</dd>
          <dt>Lemon Cheesecake</dt>
          <dd>Creamy cheesecake with a zesty lemon topping on a buttery graham cracker crust.</dd>
      </dl>
  </section>
  <section class="grid-item">
      <h3>Beverages</h3>
      <dl>
          <dt>Freshly Squeezed Orange Juice</dt>
          <dd>A glass of refreshing, freshly squeezed orange juice.</dd>
          <dt>Iced Lavender Lemonade</dt>
          <dd>A cool and refreshing blend of lemonade with a hint of lavender.</dd>
          <dt>Classic Cappuccino</dt>
          <dd>A rich and frothy cappuccino made with freshly ground coffee beans.</dd>
          <dt>Mint Mojito</dt>
          <dd>A non-alcoholic blend of fresh mint, lime, and sparkling water.</dd>
      </dl>
  </section>
</aside> */}

import "./menu.css";
import menuBg from "./assets/images/menu-bg.jpg"
export function menu(doc) {
    doc.body.style.backgroundImage = `url(${menuBg})`;
    doc.body.classList.add("hide-after");
    doc.querySelector('header').classList.add("changeBg");
    
    const h2 = doc.createElement('h2');
    h2.setAttribute("id", "menuTitle");
    h2.textContent = "Our Menu";

    const menus = ["Starters", "Mains", "Deserts", "Beverages"];
    const dlContent = [`<dt>Crispy Spring Rolls</dt>
          <dd>Golden-fried rolls stuffed with a blend of fresh vegetables and spices, served with sweet chili dipping sauce.</dd>
          <dt>Garlic Butter Shrimp</dt>
          <dd>Succulent shrimp sautéed in a rich garlic butter sauce, garnished with parsley.</dd>
          <dt>Bruschetta Trio</dt>
          <dd>Toasted baguette slices topped with a variety of toppings: classic tomato-basil, mushroom-tarragon, and whipped feta with honey.</dd>`,

          `<dt>Herb-Crusted Salmon</dt>
          <dd>Oven-baked salmon fillet with a crunchy herb crust, served with a lemon dill sauce, roasted potatoes, and asparagus.
          </dd>
          <dt>Spaghetti Carbonara</dt>
          <dd>Classic Italian pasta dish with a creamy egg-based sauce, crispy pancetta, and a sprinkle of Parmesan cheese.</dd>
          <dt>Vegetarian Stir-Fry</dt>
          <dd>A colorful mix of vegetables sautéed in a tangy soy-ginger sauce, served over steamed jasmine rice.</dd>
          <dt>Chicken Tikka Masala</dt>
          <dd>Marinated chicken cooked in a rich, creamy tomato sauce, served with basmati rice and garlic naan.</dd>`,
            ` <dt>Molten Lava Cake</dt>
          <dd>Rich chocolate cake with a gooey molten center, served warm with vanilla ice cream.</dd>
          <dt>Tiramisu</dt>
          <dd>Traditional Italian dessert with layers of coffee-soaked ladyfingers, mascarpone cream, and a dusting of cocoa powder.</dd>
          <dt>Lemon Cheesecake</dt>
          <dd>Creamy cheesecake with a zesty lemon topping on a buttery graham cracker crust.</dd>`,
          ` <dt>Freshly Squeezed Orange Juice</dt>
          <dd>A glass of refreshing, freshly squeezed orange juice.</dd>
          <dt>Iced Lavender Lemonade</dt>
          <dd>A cool and refreshing blend of lemonade with a hint of lavender.</dd>
          <dt>Classic Cappuccino</dt>
          <dd>A rich and frothy cappuccino made with freshly ground coffee beans.</dd>
          <dt>Mint Mojito</dt>
          <dd>A non-alcoholic blend of fresh mint, lime, and sparkling water.</dd>`
        ];
    const gridContainer = doc.createElement("aside");
    gridContainer.setAttribute("id", "menu");
    for(let i = 0; i<4; ++i)
    {
        const section = doc.createElement('section');
        section.classList.add("grid-item");
        const option = doc.createElement('h3');
        option.textContent = menus[i];
        const dl = doc.createElement('dl');
        dl.innerHTML = dlContent[i];
        section.appendChild(option);
        section.appendChild(dl);
        gridContainer.appendChild(section);
    }

    doc.querySelector("#content").appendChild(h2);
    doc.querySelector("#content").appendChild(gridContainer);
    
}