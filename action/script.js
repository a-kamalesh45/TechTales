// Card Creating

fetch('action.json')
  .then(response => response.json()) 
  .then(data => {
    const container = document.getElementById('cardContainer');
    console.log("container", container);
    data.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('card');
      bookCard.innerHTML = `
        <div  class="frame">
          <div class="cover">
          <img src="${book.image}" alt="${book.title}">
          <p class="desc">${book.description}</p>
          </div>
          </div>
        <div class="data">    
          <h1 class="title">${book.title}</h1>
          <h2 class="author">${book.author}</h2>
          <div class="prices">
          <h1 class="price">${book.price}</h1>
          <div class="prev">
            <h3 class="oldPrice">${book.originalPrice}</h3>
            <h2 class="discount">(${book.discount} off)</h2>
          </div>
          </div>
          <div class="icons">
            <a class="icon" href="#${book.title}">
              <img  src="../Gallery/fav.svg" alt="Favourite">
              <p>Add to Cart</p>
            </a>
            <a class="icon" href="#${book.title}">
              <img class="more" src="../Gallery/more.svg" alt="More">
              <p>Read more</p>
            </a>
            <a class="icon" href="#${book.title}">
              <img  src="../Gallery/buy.svg" alt="Buy Now">
              <p>Buy Now</p>
            </a>
          </div>
        </div>
      `;
      container.appendChild(bookCard);
    });
    const cards = document.querySelectorAll('.card');
    // console.log("cards", cards);
    cards.forEach(card => {
      const icon = card.querySelector('.icons')
      const desc = card.querySelector('.desc')
      card.addEventListener('mouseover', () => {
        icon.style.opacity = '1';
        desc.style.opacity = '1';
        desc.style.transform = 'translateY(0)';
      });
      card.addEventListener('mouseout', () => {
          icon.style.opacity = '0';
          desc.style.opacity = '0';
          desc.style.transform = 'translateY(100%)';
      });
    })

    const category = document.querySelector('.cat');
    const dropdown = document.querySelector('.dropdn');
    console.log("dropdown", dropdown);
    category.addEventListener('click', () => {
      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
      }
      else {
        dropdown.style.display = 'block';
      }
    })

    const menu_icon = document.querySelector('.menubar');
    const menu = document.querySelector('.navbar ul');
    const close = document.querySelector('.close');
    menu_icon.addEventListener('click', () => {
        menu.style.display = 'flex';
        menu_icon.style.display = 'none';
        close.style.display = 'block';
    })
    close.addEventListener('click', () => {
        menu.style.display = 'none';
        menu_icon.style.display = 'block';
        close.style.display = 'none';
    })

  })
  .catch(error => {
    console.error("Error fetching the books data:", error);
  });


// Cart and Profile Button

const cartBtn = document.querySelector('.cartBtn');
const cart = document.querySelector('.cart');
const cartBox = document.querySelector('.cartBox');
const profileBtn = document.querySelector('.profileBtn');
const prof = document.querySelector('.profile');
const profBox = document.querySelector('.profBox');
cartBtn.addEventListener('click', () => {
  if(cart.style.display == 'flex')
  cart.style.display = 'none';
  else
  cart.style.display = 'flex';
})
profileBtn.addEventListener('click', () => {
  if(prof.style.display == 'flex')
  prof.style.display = 'none';
  else
  prof.style.display = 'flex';
})
cart.addEventListener('click', () => {
  cart.style.display = 'none';
})
prof.addEventListener('click', () => {
  prof.style.display = 'none';
})
cartBox.addEventListener('click', (e) => {
  e.stopPropagation();
})
profBox.addEventListener('click', (e) => {
  e.stopPropagation();
})