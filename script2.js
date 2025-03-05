// Define a book card making function
function makeBookCard(book) {
    const container = document.getElementById('cardContainer');
    if (!container) {
      console.error('Container element not found');
      return;
    }
  
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    bookCard.innerHTML = `
      <div class="frame">
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
          <a class="icon add-to-cart" href="#${book.title}">
            <img src="Gallery/fav.svg" alt="Favourite">
            <p>Add to Cart</p>
          </a>
          <a class="icon" href="#${book.title}">
            <img class="more" src="Gallery/more.svg" alt="More">
            <p>Read more</p>
          </a>
          <a class="icon" href="#${book.title}">
            <img src="Gallery/buy.svg" alt="Buy Now">
            <p>Buy Now</p>
          </a>
        </div>
      </div>
    `;
  
    // Hover Effect for Description in card
    const icon = bookCard.querySelector('.icons');
    const desc = bookCard.querySelector('.desc');
    bookCard.addEventListener('mouseover', () => {
      icon.style.opacity = '1';
      desc.style.opacity = '1';
      desc.style.transform = 'translateY(0)';
    });
    bookCard.addEventListener('mouseout', () => {
      icon.style.opacity = '0';
      desc.style.opacity = '0';
      desc.style.transform = 'translateY(100%)';
    });
  
    // Add to cart option
    const addToCartButton = bookCard.querySelector('.add-to-cart');
    const cartText = addToCartButton.querySelector('p');
    addToCartButton.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior
      if (cartText.textContent === 'Add to Cart') {
        cartText.textContent = 'Added to Cart!';
        setTimeout(() => {
          cartText.textContent = 'Remove from Cart';
        }, 650);
      } else {
        cartText.textContent = 'Removed from Cart!';
        setTimeout(() => {
          cartText.textContent = 'Add to Cart';
        }, 650);
      }
    });
  
    container.appendChild(bookCard);
  }
  
  // Read which category is now selected
  const category = document.querySelector('.category').innerHTML;
  
  // Fetch book data and make book cards accordingly
  fetch('book.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const container = document.getElementById('cardContainer');
      if (!container) {
        throw new Error('Container element not found');
      }
  
      // Clear the container before adding new cards
      container.innerHTML = '';
  
      // Filter and display books based on the selected category
      data.forEach(book => {
        if (category === 'Categories ▼' && book.category === 'bestseller') {
          makeBookCard(book);
        } else if (book.category === category) {
          makeBookCard(book);
        }
      });
    })
    .catch(error => {
      console.error('Error fetching the books data:', error);
    });
  
  // Dropdown Logic
  const category1 = document.querySelector('.cat');
  const dropdown = document.querySelector('.dropdn');
  console.log('Dropdown:', dropdown);
  category1.addEventListener('click', () => {
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  });
  
  // Cart and Profile Button Logic
  const cartBtn = document.querySelector('.cartBtn');
  const cart = document.querySelector('.cart');
  const cartBox = document.querySelector('.cartBox');
  const profileBtn = document.querySelector('.profileBtn');
  const prof = document.querySelector('.profile');
  const profBox = document.querySelector('.profBox');
  
  cartBtn.addEventListener('click', () => {
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
  });
  
  profileBtn.addEventListener('click', () => {
    prof.style.display = prof.style.display === 'block' ? 'none' : 'block';
  });
  
  cart.addEventListener('click', () => {
    cart.style.display = 'none';
  });
  
  prof.addEventListener('click', () => {
    prof.style.display = 'none';
  });
  
  cartBox.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  
  profBox.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  
  // Mobile Menu Logic
  const menu_icon = document.querySelector('.menubar');
  const menu = document.querySelector('.navbar ul');
  const close = document.querySelector('.close');
  
  menu_icon.addEventListener('click', () => {
    menu.style.display = 'flex';
    menu_icon.style.display = 'none';
    close.style.display = 'block';
  });
  
  close.addEventListener('click', () => {
    menu.style.display = 'none';
    menu_icon.style.display = 'block';
    close.style.display = 'none';
  });