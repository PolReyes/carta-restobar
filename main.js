import './style.css'

document.querySelector('#app').innerHTML = `
<div class="wrapper">
<div class="header">
  <h2>Tres Escobas</h2>
  <h3 class="item__title">Carta</h3>
</div>

<div class="buttons-container">
  <a href="#" class="button button--is-active" data-target="pizzaMenu">Alitas</a>
  <a href="#" class="button" data-target="coffeeMenu">Hamburguesas</a>
  <a href="#" class="button" data-target="">Salchipapa</a>
  <a href="#" class="button" data-target="">Broaster</a>
  <a href="#" class="button" data-target="">Piqueos</a>
  <a href="#" class="button" data-target="">Cóteles</a>
  <a href="#" class="button" data-target="">Bebidas</a>
  <a href="#" class="button" data-target="">Cervezas</a>
  <a href="#" class="button" data-target="">Bebidas sin alcohol</a>

</div>

<!-- Start Pizza Menu -->
<div class="menu menu--is-visible" id="pizzaMenu">
  <div class="item">
    <h3 class="item__title">Acevichada</h3>
    <div class="item__content">
      <div class="item__description">
        <p>Deliciosas alitas de pollo de la casa bañados en salsa acevichada</p>
      </div>

      <div class="item__prices">
        <div class="item__header">
          <p class="item__prices-description">8 unidades</p>
          <span class="item__dots"></span>
          <span class="item__price">s/. 19</span>
        </div>
        <div class="item__header">
          <p class="item__prices-description">16 unidades</p>
          <span class="item__dots"></span>
          <span class="item__price">s/. 36</span>
        </div>
      </div>


    </div>
  </div>

  <div class="item">
    <h3 class="item__title">BBQ</h3>
    <div class="item__header">
      <p class="item__description">8 unidades</p>
      <span class="item__dots"></span>
      <span class="item__price">s/. 18</span>
    </div>
    <div class="item__header">
      <p class="item__description">16 unidades</p>
      <span class="item__dots"></span>
      <span class="item__price">s/. 34</span>
    </div>

  </div>

  <div class="item">
    <h3 class="item__title">BBQ Maracuyá</h3>
    <div class="item__header">
      <p class="item__description">8 unidades</p>
      <span class="item__dots"></span>
      <span class="item__price">s/. 18</span>
    </div>
    <div class="item__header">
      <p class="item__description">16 unidades</p>
      <span class="item__dots"></span>
      <span class="item__price">s/. 34</span>
    </div>

  </div>

  <div class="item">
    <h3 class="item__title">Teriyaki</h3>
    <div class="item__header">
      <p class="item__description">8 unidades</p>
      <span class="item__dots"></span>
      <span class="item__price">s/. 18</span>
    </div>
    <div class="item__header">
      <p class="item__description">16 unidades</p>
      <span class="item__dots"></span>
      <span class="item__price">s/. 34</span>
    </div>

  </div>

  <div class="item">
    <h3 class="item__title">Honey</h3>
    <div class="item__header">
      <p class="item__description">8 unidades</p>
      <span class="item__dots"></span>
      <span class="item__price">s/. 18</span>
    </div>
    <div class="item__header">
      <p class="item__description">16 unidades</p>
      <span class="item__dots"></span>
      <span class="item__price">s/. 34</span>
    </div>

  </div>

  <div class="item">
    <h3 class="item__title">Anticuchera</h3>
    <div class="item__header">
      <p class="item__description">8 unidades</p>
      <span class="item__dots"></span>
      <span class="item__price">s/. 18</span>
    </div>
    <div class="item__header">
      <p class="item__description">16 unidades</p>
      <span class="item__dots"></span>
      <span class="item__price">s/. 34</span>
    </div>

  </div>

  <div class="item">
    <h3 class="item__title">Peruvian</h3>
    <div class="item__header">
      <p class="item__description">8 unidades</p>
      <span class="item__dots"></span>
      <span class="item__price">s/. 18</span>
    </div>
    <div class="item__header">
      <p class="item__description">16 unidades</p>
      <span class="item__dots"></span>
      <span class="item__price">s/. 34</span>
    </div>

  </div>
</div> <!-- End Pizza Menu -->

<!-- Start Coffee Menu -->
<div class="menu" id="coffeeMenu">
  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Cappuccino</h3>
      <span class="item__dots"></span>
      <span class="item__price">$4</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum
      officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Iced Coffee</h3>
      <span class="item__dots"></span>
      <span class="item__price">$5</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum
      officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Café Latte</h3>
      <span class="item__dots"></span>
      <span class="item__price">$3</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum
      officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Espresso</h3>
      <span class="item__dots"></span>
      <span class="item__price">$4</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum
      officia eaque nobis ut.</p>
  </div>
</div> <!-- End Coffee Menu -->

<!-- Start Noodles Menu -->
<div class="menu" id="noodlesMenu">
  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Chicken Noodles</h3>
      <span class="item__dots"></span>
      <span class="item__price">$16</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum
      officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Egg Noodles</h3>
      <span class="item__dots"></span>
      <span class="item__price">$12</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum
      officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Veg Noodles</h3>
      <span class="item__dots"></span>
      <span class="item__price">$10</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum
      officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Chuck Norris</h3>
      <span class="item__dots"></span>
      <span class="item__price">$20</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum
      officia eaque nobis ut.</p>
  </div>
</div> <!-- End Noodles Menu -->

</div>
`

const buttons = document.querySelectorAll('.button');
const menus = document.querySelectorAll('.menu');

const highlight = document.createElement('span');
document.body.appendChild(highlight);
highlight.classList.add('highlight');

// Set initial dimensions and position of 'highlight' based on activeButton coords 
function initialHightlightLocation() {
  const activeButton = document.querySelector('.button--is-active');
  const activeButtonCoords = activeButton.getBoundingClientRect();

  const initialCoords = {
    width: activeButtonCoords.width,
    height: activeButtonCoords.height,
    left: activeButtonCoords.left + window.scrollX,
    top: activeButtonCoords.top + window.scrollY
  }

  highlight.style.width = `${initialCoords.width}px`;
  highlight.style.height = `${initialCoords.height}px`;
  highlight.style.transform = `translate(${initialCoords.left}px, ${initialCoords.top}px)`;
}

function handleClick(e) {
  e.preventDefault();

  buttons.forEach(button => button.classList.remove('button--is-active'));
  this.classList.add('button--is-active');

  // Set current dimensions and position of 'highlight' based on the clicked button 
  const buttonCoords = this.getBoundingClientRect();
  const coords = {
    width: buttonCoords.width,
    height: buttonCoords.height,
    left: buttonCoords.left + window.scrollX,
    top: buttonCoords.top + window.scrollY
  }
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

  // Show the menu associated to the clicked button
  const targetMenu = document.querySelector(`#${this.dataset.target}`);
  menus.forEach(menu => {
    menu.classList.remove('menu--is-visible');
    targetMenu.classList.add('menu--is-visible');
  })
}

window.addEventListener('load', initialHightlightLocation);
window.addEventListener('resize', initialHightlightLocation);
buttons.forEach(button => button.addEventListener('click', handleClick));