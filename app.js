/* =====================================================
   GENGA COLLECTIBLES STORE
   Complete front-end application
   ===================================================== */
/* -------------------- PRODUCTS -------------------- */




const products = readStorage('gengaProducts', null) || [
  {
    id: 1,
    name: 'Banana Fish Acrylic Keychain Collection',
    price: 0,
    image: 'Banana-Fish-Acrylic-Keychain.jpg',
    badge: 'On Hand',
    type: 'onhand',
    desc: 'Banana Fish acrylic keychain collection.'
  },
  {
    id: 2,
    name: 'Banana Fish Acrylic Stand',
    price: 0,
    image: 'Banana-Fish-Acrylic-Stand.jpg',
    badge: 'On Hand',
    type: 'onhand',
    desc: 'Banana Fish acrylic stand.'
  },
  {
    id: 3,
    name: 'Banana Fish Ash Lynx Figure',
    price: 0,
    image: 'Banana-Fish-Ash-Lynx-Figure.jpg',
    badge: 'On Hand',
    type: 'onhand',
    desc: 'Ash Lynx collectible figure.'
  },
  {
    id: 4,
    name: 'Banana Fish Ash Lynx Sunflower Figure',
    price: 0,
    image: 'Banana-Fish-Ash-Lynx-Sunflower-Figure.jpg',
    badge: 'On Hand',
    type: 'onhand',
    desc: 'Ash Lynx sunflower-themed collectible figure.'
  },
  {
    id: 5,
    name: 'Banana Fish Sleepyhead Acrylic Keychain',
    price: 0,
    image: 'Banana-Fish-Sleepyhead-Acrylic-Keychain.jpg',
    badge: 'On Hand',
    type: 'onhand',
    desc: 'Banana Fish Sleepyhead acrylic keychain.'
  },
  {
    id: 6,
    name: 'One Piece Ace Action Figure',
    price: 0,
    image: 'One-Piece-Ace-Action-Figure.jpg',
    badge: 'On Hand',
    type: 'onhand',
    desc: 'Portgas D. Ace action figure.'
  },
  {
    id: 7,
    name: 'One Piece Ace Figure',
    price: 0,
    image: 'One-Piece-Ace-Figure.jpg',
    badge: 'On Hand',
    type: 'onhand',
    desc: 'Portgas D. Ace collectible figure.'
  },
  {
    id: 8,
    name: 'One Piece Ace Flame Emperor Figure',
    price: 0,
    image: 'One-Piece-Ace-Flame-Emperor-Figure.jpg',
    badge: 'On Hand',
    type: 'onhand',
    desc: 'Portgas D. Ace Flame Emperor figure.'
  },
  {
    id: 9,
    name: 'One Piece ASL Brothers Diorama Figure',
    price: 0,
    image: 'One-Piece-ASL-Brothers-Diorama-Figure.jpg',
    badge: 'On Hand',
    type: 'onhand',
    desc: 'One Piece ASL brothers diorama figure.'
  },
  {
    id: 10,
    name: 'One Piece Sanji Fire Battle Figure',
    price: 0,
    image: 'One-Piece-Sanji-Fire-Battle-Figure.jpg',
    badge: 'On Hand',
    type: 'onhand',
    desc: 'Sanji Fire Battle collectible figure.'
  },
  {
    id: 11,
    name: 'One Piece Sanji Sitting Premium Figure',
    price: 0,
    image: 'One-Piece-Sanji-Sitting-Premium-Figure.jpg',
    badge: 'On Hand',
    type: 'onhand',
    desc: 'Sanji Sitting Premium collectible figure.'
  },
  {
    id: 12,
    name: 'Banana Fish Ash and Eiji Plush',
    price: 0,
    image: 'Banana-Fish-Ash-and-Eiji-Plush.jpg',
    badge: 'Pre-Order',
    type: 'preorder',
    desc: 'Ash and Eiji character plush.'
  },
  {
    id: 13,
    name: 'Haikyuu Mini Plush Collection',
    price: 0,
    image: 'Haikyuu-Mini-Plush-Collection.jpg',
    badge: 'Pre-Order',
    type: 'preorder',
    desc: 'Mini plush collection inspired by Haikyuu.'
  },
  {
    id: 14,
    name: 'Jujutsu Kaisen Anime Bear Plush Collection',
    price: 0,
    image: 'Jujutsu-Kaisen-Anime-Bear-Plush-Collection.jpg',
    badge: 'Pre-Order',
    type: 'preorder',
    desc: 'Jujutsu Kaisen anime bear plush collection.'
  },
  {
    id: 15,
    name: 'Jujutsu Kaisen Mini Plush Collection',
    price: 0,
    image: 'Jujutsu-Kaisen-Mini-Plush-Collection.jpg',
    badge: 'Pre-Order',
    type: 'preorder',
    desc: 'Jujutsu Kaisen mini plush collection.'
  },
  {
    id: 16,
    name: 'One Piece Luffy 30cm Plush',
    price: 0,
    image: 'One-Piece-Luffy-30cm-Plush.jpg',
    badge: 'Pre-Order',
    type: 'preorder',
    desc: '30cm Luffy plush.'
  },
  {
    id: 17,
    name: 'One Piece Luffy Gear 5 and Normal Plush',
    price: 0,
    image: 'One-Piece-Luffy-Gear5-and-Normal-Plush.jpg',
    badge: 'Pre-Order',
    type: 'preorder',
    desc: 'Luffy Gear 5 and normal plush collection.'
  },
  {
    id: 18,
    name: 'Twisted Wonderland Plushies',
    price: 0,
    image: 'Twisted-Wonderland-Plushies.jpg',
    badge: 'Pre-Order',
    type: 'preorder',
    desc: 'Twisted Wonderland character plushies.'
  }

];
localStorage.setItem('gengaProducts', JSON.stringify(products));

/* -------------------- APP STATE -------------------- */

const state = {
  page: 'home',
  previous: 'onhand',
  selected: 1,
  quantity: 1,
  option: 'Ash',
  search: '',
  sort: 'popularity',
  price: 'all',
  cart: [],
  favorites: [],
  faqOpen: 0,
  orders: [],
  pendingAddToCart: null,
  pendingDestination: null
};

const app = document.querySelector('#app');
const drawer = document.querySelector('#drawer');
const scrim = document.querySelector('#scrim');
const toastEl = document.querySelector('#toast');

const PUBLIC_PAGES = [
  'home', 'onhand', 'preorder', 'product', 'about', 'faq',
  'login', 'register'
];

const PROTECTED_PAGES = [
  'cart', 'checkout', 'favorites', 'profile', 'history'
];
const ADMIN_PAGES = ['admin'];
const ADMIN_EMAIL = 'admin@genga.ph';
const ADMIN_PASSWORD = 'GengaAdmin2026!';

function isAdmin() {
  const session = getCurrentUser();
  const user = session && getUsers().find(item => item.email === session.email);
  return Boolean(session && user && user.role === 'admin');
}
function getAllOrders() {
  // Merge orders already stored in each customer's history with the admin list.
  // This lets the dashboard see orders created before the admin feature was added.
  const allOrders = readStorage('gengaAllOrders', []);
  const users = getUsers();
  const byId = new Map();

  allOrders.forEach(order => {
    if (order && order.id) byId.set(String(order.id), order);
  });

  users.forEach(user => {
    const customerOrders = readStorage('gengaOrders_' + user.email, []);
    customerOrders.forEach(order => {
      if (!order || !order.id) return;
      const key = String(order.id);
      const existing = byId.get(key);
      byId.set(key, existing ? { ...existing, ...order } : order);
    });
  });

  const merged = Array.from(byId.values()).sort((a, b) => {
    const aId = Number(String(a.id).replace(/\\D/g, '')) || 0;
    const bId = Number(String(b.id).replace(/\\D/g, '')) || 0;
    return bId - aId;
  });

  localStorage.setItem('gengaAllOrders', JSON.stringify(merged));
  return merged;
}
function saveAllOrders(orders) {
  localStorage.setItem('gengaAllOrders', JSON.stringify(orders));
}
function saveProducts() {
  localStorage.setItem('gengaProducts', JSON.stringify(products));
}

(function seedDemoAdmin() {
  const users = getUsers();
  if (!users.some(user => user.email === ADMIN_EMAIL)) {
    users.push({ name: 'GENGA Administrator', email: ADMIN_EMAIL, password: ADMIN_PASSWORD, role: 'admin' });
    localStorage.setItem('gengaDemoUsers', JSON.stringify(users));
  }
})();

/* -------------------- STORAGE HELPERS -------------------- */

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function getUsers() {
  return readStorage('gengaDemoUsers', []);
}

function getCurrentUser() {
  return readStorage('gengaDemoSession', null);
}

function isLoggedIn() {
  const session = getCurrentUser();

  if (!session || !session.email) {
    return false;
  }

  return getUsers().some(user =>
    user.email === session.email
  );
}

function saveUserData() {
  const session = getCurrentUser();

  if (!session) return;

  localStorage.setItem(
    'gengaCart_' + session.email,
    JSON.stringify(state.cart)
  );

  localStorage.setItem(
    'gengaFavorites_' + session.email,
    JSON.stringify(state.favorites)
  );

  localStorage.setItem(
    'gengaOrders_' + session.email,
    JSON.stringify(state.orders)
  );
}

function loadUserData() {
  const session = getCurrentUser();

  if (!session) return;

  state.cart = readStorage(
    'gengaCart_' + session.email,
    []
  );

  state.favorites = readStorage(
    'gengaFavorites_' + session.email,
    []
  );

  state.orders = readStorage(
    'gengaOrders_' + session.email,
    []
  );
}

/* -------------------- GENERAL HELPERS -------------------- */

const money = amount =>
  '₱' + Number(amount).toLocaleString('en-PH');

const asset = filename => filename;

const find = id =>
  products.find(product => product.id === Number(id));

function notify(message) {
  if (!toastEl) return;

  toastEl.textContent = message;
  toastEl.classList.add('show');

  clearTimeout(notify.timer);

  notify.timer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2500);
}

function closeDrawer() {
  if (!drawer || !scrim) return;

  drawer.classList.remove('open');
  scrim.classList.remove('show');
  drawer.setAttribute('aria-hidden', 'true');

  const menuButton = document.querySelector('#menuToggle');

  if (menuButton) {
    menuButton.setAttribute('aria-expanded', 'false');
  }
}

/* -------------------- NAVIGATION -------------------- */

function go(page) {
  if (ADMIN_PAGES.includes(page) && !isAdmin()) { notify('Admin access only.'); return; }
  if (page === 'logout') {
    logoutDemo();
    return;
  }

  if (PROTECTED_PAGES.includes(page) && !isLoggedIn()) {
    state.pendingDestination = page;
    state.page = 'login';
    closeDrawer();
    render();
    notify('Please log in or create an account to continue.');
    return;
  }

  if (page === 'product') {
    state.previous = state.page;
  }

  state.page = page;
  closeDrawer();
  render();
}

function header(title, right = 'home') {
  return `
    <div class="page-header">
      <button
        class="icon-btn"
        data-back
        aria-label="Go back"
      >‹</button>

      <h2>${title}</h2>

      <button
        class="icon-btn"
        data-page="${right}"
        aria-label="${right === 'cart' ? 'Cart' : 'Home'}"
      >${right === 'cart' ? '🛒' : '⌂'}</button>
    </div>
  `;
}

function shell(title, content, right = 'home') {
  return `
    <section class="page">
      ${header(title, right)}

      <div class="cream-page">
        <div class="content">
          ${content}
        </div>
      </div>
    </section>
  `;
}

/* -------------------- PRODUCT CARDS -------------------- */

function card(product) {
  const favorite = state.favorites.includes(product.id);

  return `
    <article class="product-card">
      <img
        class="product-image"
        data-product="${product.id}"
        src="${asset(product.image)}"
        alt="${product.name}"
        loading="lazy"
      >

      <button
        class="heart ${favorite ? 'active' : ''}"
        data-fav="${product.id}"
        aria-label="Toggle favorite"
      >${favorite ? '♥' : '♡'}</button>

      <div class="product-body">
        <span class="pill">${product.badge}</span>

        <h3 class="product-name">${product.name}</h3>

        <div class="price">${money(product.price)}</div>

        <div class="product-actions">
          <button
            class="btn"
            data-product="${product.id}"
          >View item</button>

          <button
            class="btn light"
            data-add="${product.id}"
          >Add to cart</button>
        </div>
      </div>
    </article>
  `;
}

/* -------------------- PRODUCT COLLECTIONS -------------------- */

function collection(type) {
  let list = products.filter(product =>
    product.type === type &&
    product.name.toLowerCase().includes(
      state.search.toLowerCase()
    )
  );

  if (state.price === 'low') {
    list = list.filter(product => product.price < 500);
  }

  if (state.price === 'mid') {
    list = list.filter(product =>
      product.price >= 500 && product.price < 2000
    );
  }

  if (state.price === 'high') {
    list = list.filter(product => product.price >= 2000);
  }

  if (state.sort === 'price-up') {
    list.sort((a, b) => a.price - b.price);
  }

  if (state.sort === 'price-down') {
    list.sort((a, b) => b.price - a.price);
  }

  if (state.sort === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  const onHand = type === 'onhand';

  return shell(
    onHand ? 'ON-HAND ITEMS' : 'PRE-ORDER',
    `
      <div class="section-head">
        <p class="eyebrow">
          ${onHand
            ? 'READY STOCK · SHIPS SOON'
            : 'RESERVE YOUR NEXT GRAIL'}
        </p>

        <h1 class="section-title">
          ${onHand
            ? 'FIND IT. LOVE IT. GET IT.'
            : 'COMING TO YOUR SHELF'}
        </h1>

        <p class="intro">
          ${onHand
            ? 'These collectibles are ready for their new home.'
            : 'Reserve incoming collectibles before they sell out.'}
        </p>
      </div>

      <div class="collection-panel">
        <div class="search-row">
          <input
            class="search"
            id="search"
            value="${state.search}"
            placeholder="⌕ Search the collection"
            aria-label="Search products"
          >
        </div>

       
        <div class="filters">
          <div class="custom-select" id="sortDropdown">
            <button
              type="button"
              class="custom-select-trigger"
              id="sortTrigger"
              aria-expanded="false"
            >
              <span id="sortLabel">
                ${({
                  popularity: 'Popularity',
                  'price-up': 'Price: low to high',
                  'price-down': 'Price: high to low',
                  name: 'Name A–Z'
                })[state.sort] || 'Popularity'}
              </span>
              <span>⌄</span>
            </button>

            <div class="custom-select-menu" id="sortMenu" hidden>
              <button type="button" data-sort="popularity">Popularity</button>
              <button type="button" data-sort="price-up">Price: low to high</button>
              <button type="button" data-sort="price-down">Price: high to low</button>
              <button type="button" data-sort="name">Name A–Z</button>
            </div>
          </div>

          <div class="custom-select" id="priceDropdown">
            <button
              type="button"
              class="custom-select-trigger"
              id="priceTrigger"
              aria-expanded="false"
            >
              <span id="priceLabel">
                ${({
                  all: 'All Prices',
                  low: 'Under ₱500',
                  mid: '₱500–₱1,999',
                  high: '₱2,000+'
                })[state.price] || 'All Prices'}
              </span>
              <span>⌄</span>
            </button>

            <div class="custom-select-menu" id="priceMenu" hidden>
              <button type="button" data-price="all">All Prices</button>
              <button type="button" data-price="low">Under ₱500</button>
              <button type="button" data-price="mid">₱500–₱1,999</button>
              <button type="button" data-price="high">₱2,000+</button>
            </div>
          </div>
        </div>

        <div class="product-grid">
          ${list.length
            ? list.map(card).join('')
            : '<p class="empty">No products found. Try another search.</p>'}
        </div>
      </div>
    `,
    'cart'
  );
}

/* -------------------- HOMEPAGE -------------------- */


function home() {
  return `
    <section class="page">
      <div class="hero">
        <p class="eyebrow">THE ART BEHIND EVERY COLLECTION</p>
        <h1>GENGA</h1>

        <p>
          Collect the characters you love.
          Find your next favorite anime figure,
          plush, and collectible.
        </p>

        <div class="hero-actions">
          <button class="btn full" data-page="onhand">
            ON-HAND ITEMS
          </button>
        </div>
      </div>

      <div class="cream-page">
        <div class="content">
          <div class="section-head">
            <p class="eyebrow">FRESH FINDS FOR YOUR SHELF</p>
            <h2 class="section-title">PRE-ORDER NOW!</h2>
          </div>

          <div class="product-grid">
            ${[
              products[12],
              products[13]
            ].map(card).join('')}
          </div>

          <div class="hero-actions">
            <button class="btn full" data-page="preorder">
              BROWSE COLLECTION
            </button>
            <button class="btn full" data-page="pasabuy">
              PASABUY
            </button>
          </div>


          <div class="two-col" style="margin-top:50px">
            <div class="feature-card">
              <h3>COLLECT WITH CONFIDENCE</h3>
              <p>Find collectibles and review your order history.</p>
            </div>

            <div class="feature-card">
              <h3>NEED A HAND?</h3>
              <p>Learn about payment, delivery, and packaging.</p>
              <button class="btn" data-page="faq">READ FAQ</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}


/* -------------------- PASABUY PAGE -------------------- */

function pasabuy() {
  return shell(
    'PASABUY',
    `
      <section class="pasabuy-section" id="pasabuy">
        <p class="pasabuy-eyebrow">FROM JAPAN TO YOUR SHELF</p>

        <h1>Want us to Pasabuy something for you?</h1>

        <p class="pasabuy-description">
          Send us the item link or a photo. We'll help source it,
          confirm the price, and keep you updated all the way home.
        </p>

        <div class="pasabuy-links">
          <a class="pasabuy-link" href="mailto:hello@genga.ph">
            <span class="pasabuy-icon">G</span>
            <span class="pasabuy-link-text">
              <small>EMAIL · CONTACT US</small>
              <strong>hello@genga.ph</strong>
              <small>Email your product link or request</small>
            </span>
            <span class="pasabuy-arrow">↗</span>
          </a>

          <a class="pasabuy-link"
             href="https://www.facebook.com/"
             target="_blank" rel="noopener noreferrer">
            <span class="pasabuy-icon">f</span>
            <span class="pasabuy-link-text">
              <small>FACEBOOK PAGE</small>
              <strong>Genga PH</strong>
              <small>Chat with our Pasabuy team</small>
            </span>
            <span class="pasabuy-arrow">↗</span>
          </a>

          <a class="pasabuy-link"
             href="https://www.tiktok.com/@genga.ph"
             target="_blank" rel="noopener noreferrer">
            <span class="pasabuy-icon">♪</span>
            <span class="pasabuy-link-text">
              <small>TIKTOK</small>
              <strong>@genga.ph</strong>
              <small>See arrivals and live claims</small>
            </span>
            <span class="pasabuy-arrow">↗</span>
          </a>

          <a class="pasabuy-link"
             href="https://www.instagram.com/genga.collects/"
             target="_blank" rel="noopener noreferrer">
            <span class="pasabuy-icon">◎</span>
            <span class="pasabuy-link-text">
              <small>INSTAGRAM</small>
              <strong>@genga.collects</strong>
              <small>Message us or browse drops</small>
            </span>
            <span class="pasabuy-arrow">↗</span>
          </a>
        </div>
      </section>
    `,
    'home'
  );
}

/* -------------------- PRODUCT DETAILS -------------------- */

function productDetail(id) {
  const product = find(id) || products[0];
  state.selected = product.id;

  return shell(
    'PRODUCT DETAILS',
    `
      <div class="detail-layout">
        <img
          class="detail-image"
          src="${asset(product.image)}"
          alt="${product.name}"
        >

        <div class="detail-info">
          <span class="pill">${product.badge}</span>
          <h1>${product.name}</h1>
          <div class="price">${money(product.price)}</div>
          <p class="intro">${product.desc}</p>

          ${product.options ? `
            <div class="field" style="margin:24px 0">
              <label for="option">Choose option</label>
              <select id="option">
                ${product.options.map(option => `
                  <option ${option === state.option ? 'selected' : ''}>
                    ${option}
                  </option>
                `).join('')}
              </select>
            </div>
          ` : ''}

          <div class="detail-buttons">
            <div class="qty">
              <button data-qty="-">−</button>
              <strong id="qtyValue">${state.quantity}</strong>
              <button data-qty="+">+</button>
            </div>

            <button
              class="btn"
              data-add="${product.id}"
              data-detail-add
            >ADD TO CART</button>

            <button
              class="btn full light"
              data-order="${product.id}"
            >ORDER NOW</button>
          </div>
        </div>
      </div>
    `,
    'cart'
  );
}

/* -------------------- SHOPPING CART -------------------- */

function addToCart(id, qty = state.quantity, nextPage = 'cart') {
  const product = find(id);
  if (!product) return false;

  if (!isLoggedIn()) {
    state.pendingAddToCart = {
      id: product.id,
      qty,
      option: product.options ? state.option : '',
      nextPage
    };

    state.page = 'login';
    closeDrawer();
    render();
    notify('Please log in or register to add items to your cart.');
    return false;
  }

  const option = product.options ? state.option : '';
  const existing = state.cart.find(item =>
    item.id === product.id && item.option === option
  );

  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ ...product, qty, option });
  }

  saveUserData();
  notify('Added to cart: ' + product.name);
  return true;
}

function cart() {
  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return shell(
    'YOUR CART',
    `
      <div class="section-head">
        <p class="eyebrow">YOUR NEXT COLLECTION</p>
        <h1 class="section-title">CART</h1>
      </div>

      ${state.cart.length ? `
        <div class="cart-list">
          ${state.cart.map(item => `
            <article class="cart-item">
              <img src="${asset(item.image)}" alt="${item.name}">

              <div>
                <h3>${item.name}</h3>
                <p>${item.option ? 'Option: ' + item.option : ''}</p>
                <div class="price">${money(item.price)}</div>

                <div class="qty small">
                  <button data-cartqty="-${item.id}-${item.option}">−</button>
                  <strong>${item.qty}</strong>
                  <button data-cartqty="+${item.id}-${item.option}">+</button>
                </div>
              </div>

              <button
                class="remove"
                data-remove="${item.id}-${item.option}"
              >Remove</button>
            </article>
          `).join('')}
        </div>

        <div class="subtotal">
          <span>SUBTOTAL</span>
          <strong>${money(total)}</strong>
        </div>

        <button class="btn full" data-page="checkout">
          PROCEED TO CHECKOUT
        </button>
      ` : `
        <div class="empty">
          <h2>Your cart is empty.</h2>
          <p>Find something special for your collection.</p>
          <button class="btn" data-page="onhand">BROWSE ITEMS</button>
        </div>
      `}
    `,
    'home'
  );
}

/* -------------------- CHECKOUT -------------------- */

function checkout() {
  if (!state.cart.length) {
    return shell(
      'CHECKOUT',
      `
        <div class="empty">
          <h2>Your cart is empty.</h2>
          <button class="btn" data-page="onhand">Browse items</button>
        </div>
      `
    );
  }

  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const session = getCurrentUser();

  return shell(
    'CHECKOUT',
    `
      <div class="section-head">
        <p class="eyebrow">YOUR ORDER</p>
        <h1 class="section-title">CHECKOUT</h1>
      </div>

      <form id="checkoutForm">
        <div class="form-grid" style="margin:24px 0">
          <div class="field full-field">
            <label for="customerName">Full name</label>
            <input
              id="customerName"
              required
              name="name"
              value="${session.name || ''}"
              placeholder="Your full name"
            >
          </div>

          <div class="field">
            <label for="phone">Contact number</label>
            <input
              id="phone"
              required
              name="phone"
              type="tel"
              placeholder="09xx xxx xxxx"
            >
          </div>

          <div class="field full-field">
            <label for="address">Delivery address</label>
            <textarea
              id="address"
              required
              name="address"
              rows="3"
              placeholder="House no., street, barangay, city"
            ></textarea>
          </div>
        </div>

        <h2 style="font:28px var(--display);color:var(--teal)">
          PAYMENT METHOD
        </h2>

        <label class="payment-option">
          <input type="radio" name="payment" value="GCash" required>
          <span>
            <strong>GCash</strong>
            <small>Full payment via GCash</small>
          </span>
        </label>

        <label class="payment-option">
          <input type="radio" name="payment" value="Bank Transfer">
          <span>
            <strong>Bank Transfer</strong>
            <small>Full payment via bank transfer</small>
          </span>
        </label>

        <label class="payment-option">
          <input type="radio" name="payment" value="Cash on Delivery">
          <span>
            <strong>Cash on Delivery</strong>
            <small>Pay when your order arrives</small>
          </span>
        </label>

        <div class="subtotal">
          <span>TOTAL</span>
          <strong>${money(total)}</strong>
        </div>

        <button class="btn full" type="submit">PLACE ORDER</button>
      </form>
    `
  );
}

/* -------------------- FAVORITES -------------------- */

function favorites() {
  const list = products.filter(product =>
    state.favorites.includes(product.id)
  );

  return shell(
    'FAVORITES',
    `
      <div class="section-head">
        <p class="eyebrow">YOUR PERSONAL COLLECTION</p>
        <h1 class="section-title">SAVED ITEMS</h1>
      </div>

      ${list.length ? `
        <div class="product-grid">
          ${list.map(card).join('')}
        </div>
      ` : `
        <div class="empty">
          <h2>No favorites yet.</h2>
          <p>Save items you love and find them here later.</p>
          <button class="btn" data-page="onhand">Browse items</button>
        </div>
      `}
    `,
    'home'
  );
}

/* -------------------- PROFILE -------------------- */

function profile() {
  const session = getCurrentUser();

  return shell(
    'PROFILE',
    `
      <div class="section-head">
        <p class="eyebrow">YOUR ACCOUNT</p>
        <h1 class="section-title">MY PROFILE</h1>
      </div>

      <div class="feature-card">
        <div class="field">
          <label>Full name</label>
          <p>${session ? session.name : ''}</p>
        </div>

        <div class="field">
          <label>Email address</label>
          <p>${session ? session.email : ''}</p>
        </div>

        <button class="btn" data-page="history">VIEW ORDER HISTORY</button>
      </div>
    `,
    'home'
  );
}

/* -------------------- TRANSACTION HISTORY -------------------- */

function history() {
  return shell(
    'TRANSACTION HISTORY',
    `
      <div class="section-head">
        <p class="eyebrow">YOUR PAST PURCHASES</p>
        <h1 class="section-title">ORDER HISTORY</h1>
      </div>

      ${state.orders.length ? `
        <div class="history-list">
          ${state.orders.map(order => `
            <article class="feature-card">
              <h3>${order.id}</h3>
              <p>${order.date}</p>
              <p>${order.name}</p>
              <p>Total: <strong>${money(order.price)}</strong></p>
              <p>Status: <strong>${order.status}</strong></p>
            </article>
          `).join('')}
        </div>
      ` : `
        <div class="empty">
          <h2>No orders yet.</h2>
          <p>Your completed orders will appear here.</p>
          <button class="btn" data-page="onhand">START SHOPPING</button>
        </div>
      `}
    `,
    'home'
  );
}

/* -------------------- FAQ -------------------- */

function faq() {
  const items = [
    [
      'Payment Methods',
      'Choose a payment option during checkout. This does not collect real payments.'
    ],
    [
      'Delivery Methods',
      'Delivery arrangements and fees depend on the courier and destination.'
    ],
    [
      'Track Order',
      'Your order statuses are available in Transaction History.'
    ],
    [
      'Packaging',
      'Collectibles should be carefully packed with protective materials.'
    ]
  ];

  return shell(
    'FAQ',
    `
      <div class="section-head">
        <p class="eyebrow">NEED TO KNOW</p>
        <h1 class="section-title">FREQUENTLY ASKED QUESTIONS</h1>
      </div>

      <div class="faq-list">
        ${items.map((item, index) => `
          <article class="faq-item">
            <button class="faq-question" data-faq="${index}">
              <span>${item[0]}</span>
              <span>${state.faqOpen === index ? '−' : '+'}</span>
            </button>

            ${state.faqOpen === index ? `
              <p class="faq-answer">${item[1]}</p>
            ` : ''}
          </article>
        `).join('')}
      </div>
    `,
    'home'
  );
}

/* -------------------- ABOUT US -------------------- */

function about() {
  return shell(
    'ABOUT US',
    `
      <div class="section-head">
        <p class="eyebrow">WELCOME TO GENGA</p>
        <h1 class="section-title">FOR THE LOVE OF COLLECTING</h1>
      </div>

      <div class="feature-card">
        <p>
          GENGA is a collectibles storefront for anime fans
          looking for figures, plushies, and character merchandise.
        </p>
        <p>
          Browse available items and pre-orders. Create an account
          to use the cart, save favorites, and view order history.
        </p>
        <button class="btn" data-page="onhand">EXPLORE COLLECTION</button>
      </div>
    `,
    'home'
  );
}

/* -------------------- LOGIN PAGE -------------------- */

function login() {
  return shell(
    'LOGIN',
    `
      <div class="auth-section">
        <div class="section-head">
          <p class="eyebrow">WELCOME BACK</p>
          <h1 class="section-title">LOG IN</h1>
          <p>Log in to add items to your cart and manage your account.</p>
        </div>

        <form id="loginForm" class="auth-form">
          <div class="field">
            <label for="loginEmail">Email address</label>
            <input
              id="loginEmail"
              type="email"
              name="email"
              autocomplete="email"
              required
              placeholder="you@example.com"
            >
          </div>

          <div class="field">
            <label for="loginPassword">Password</label>
            <input
              id="loginPassword"
              type="password"
              name="password"
              autocomplete="current-password"
              required
              placeholder="Enter your password"
            >
          </div>

          <p id="loginError" class="form-error" style="display:none"></p>

          <button class="btn full" type="submit">LOG IN</button>

          <p class="auth-switch">
            Don't have an account?
            <button class="text-btn" type="button" data-page="register">
              Register
            </button>
          </p>

          <button class="text-btn" type="button" data-page="home">
            Continue browsing as guest
          </button>
        </form>
      </div>
    `,
    'home'
  );
}

/* -------------------- REGISTER PAGE -------------------- */

function register() {
  return shell(
    'REGISTER',
    `
      <div class="auth-section">
        <div class="section-head">       
<img
  class="hero-logo"
  src="Logo.png"
  alt="GENGA — The Art Behind Every Collection"
>
        </div>

        <form id="registerForm" class="auth-form">
          <div class="field">
            <label for="registerName">Full name</label>
            <input
              id="registerName"
              type="text"
              name="name"
              autocomplete="name"
              required
              placeholder="Your full name"
            >
          </div>

          <div class="field">
            <label for="registerEmail">Email address</label>
            <input
              id="registerEmail"
              type="email"
              name="email"
              autocomplete="email"
              required
              placeholder="you@example.com"
            >
          </div>

          <div class="field">
            <label for="registerPassword">Password</label>
            <input
              id="registerPassword"
              type="password"
              name="password"
              autocomplete="new-password"
              minlength="8"
              required
              placeholder="At least 8 characters"
            >
          </div>

          <div class="field">
            <label for="confirmPassword">Confirm password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              autocomplete="new-password"
              minlength="8"
              required
              placeholder="Enter your password again"
            >
          </div>

          <p id="registerError" class="form-error" style="display:none"></p>

          <button class="btn full" type="submit">CREATE ACCOUNT</button>

          <p class="auth-switch">
            Already have an account?
            <button class="text-btn" type="button" data-page="login">
              Log in
            </button>
          </p>
        </form>
      </div>
    `,
    'home'
  );
}

/* -------------------- ADMIN DASHBOARD -------------------- */
function adminDashboard() {
  if (!isAdmin()) return shell('ADMIN ACCESS', '<div class="empty"><h2>Admin access only.</h2></div>');
  const orders = getAllOrders();
  return shell('ADMIN DASHBOARD', `
    <div class="admin-wrap">
      <div id="stockEditorHost"></div>
      <div class="section-head"><p class="eyebrow">GENGA STORE MANAGEMENT</p><h1 class="section-title">ADMIN DASHBOARD</h1><p class="intro">Manage inventory and review customer orders.</p></div>
      <div class="admin-stats">
        <div class="admin-stat"><small>ON-HAND PRODUCTS</small><strong>${products.filter(p=>p.type==='onhand').length}</strong></div>
        <div class="admin-stat"><small>PRE-ORDER PRODUCTS</small><strong>${products.filter(p=>p.type==='preorder').length}</strong></div>
        <div class="admin-stat"><small>TOTAL ORDERS</small><strong>${orders.length}</strong></div>
        <div class="admin-stat"><small>PENDING ORDERS</small><strong>${orders.filter(o=>['Pending approval','Processing'].includes(o.status)).length}</strong></div>
      </div>
      <section class="admin-panel">
        <h2>INVENTORY MANAGEMENT</h2>
        <form id="adminProductForm" class="admin-product-form">
          <div class="field"><label>Product name</label><input name="name" required placeholder="Product name"></div>
          <div class="field"><label>Price (₱)</label><input name="price" type="number" min="0" step="1" required value="0"></div>
          <div class="field"><label>Image filename</label><input name="image" required placeholder="image-file.jpg"></div>
          <div class="field"><label>Product type</label><select name="type"><option value="onhand">On-hand</option><option value="preorder">Pre-order</option></select></div>
          <div class="field"><label>Stock quantity</label><input name="stock" type="number" min="0" value="0" required></div>
          <div class="field"><label>Description</label><input name="desc" placeholder="Short description"></div>
          <button class="btn full" type="submit">ADD PRODUCT</button>
        </form>
        <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Product</th><th>Type</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead><tbody>
        ${products.map(p=>`<tr><td>${p.name}</td><td>${p.type==='onhand'?'On-hand':'Pre-order'}</td><td>${money(p.price)}</td><td>${Number(p.stock||0)}</td><td><button class="btn admin-small" data-stock-edit="${p.id}">Edit stock</button> <button class="btn light admin-small" data-product-delete="${p.id}">Delete</button></td></tr>`).join('')}
        </tbody></table></div><p class="muted">Image filename must match a file in your assets folder. Stock is recorded for inventory display; checkout stock enforcement is not included yet.</p>
      </section>
      <section class="admin-panel"><h2>ORDER APPROVAL & STATUS</h2>
      ${orders.length ? `<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Order</th><th>Customer</th><th>Items</th><th>Total</th><th>Payment</th><th>Status</th><th>Update</th></tr></thead><tbody>
      ${orders.map(o=>`<tr><td data-label="Order">${o.id}<br><small>${o.date}</small></td><td data-label="Customer">${o.customerName||'Customer'}<br><small>${o.customer||''}</small></td><td data-label="Items">${o.name}</td><td data-label="Total">${money(o.price)}</td><td data-label="Payment">${o.payment||'—'}</td><td data-label="Status">${o.status}</td><td data-label="Update"><label class="admin-status-label">Change status</label><select data-order-status="${o.id}">${['Pending approval','Confirmed','Processing','Shipped','Delivered','Cancelled'].map(st=>`<option value="${st}" ${o.status===st?'selected':''}>${st}</option>`).join('')}</select></td></tr>`).join('')}
      </tbody></table></div>` : '<p class="empty">No orders yet. New orders will appear here.</p>'}</section>
    </div>`, 'home');
}

/* -------------------- LOGOUT -------------------- */

function logoutDemo() {
  saveUserData();

  localStorage.removeItem('gengaDemoSession');

  state.cart = [];
  state.favorites = [];
  state.orders = [];
  state.search = '';
  state.quantity = 1;
  state.pendingAddToCart = null;
  state.pendingDestination = null;
  state.page = 'home';

  closeDrawer();
  render();

  notify('You have logged out successfully.');
}

/* -------------------- RENDER PAGES -------------------- */

function render() {
  if (ADMIN_PAGES.includes(state.page) && !isAdmin()) state.page = 'login';
  if (PROTECTED_PAGES.includes(state.page) && !isLoggedIn()) {
    state.page = 'login';
  }

  if (['login', 'register'].includes(state.page) && isLoggedIn()) {
    state.page = 'home';
  }

  const pages = {
    home,
    onhand: () => collection('onhand'),
    preorder: () => collection('preorder'),
    pasabuy,
    product: () => productDetail(state.selected),
    cart,
    checkout,
    favorites,
    profile,
    history,
    faq,
    about,
    login,
    register,
    admin: adminDashboard
  };

  app.innerHTML = (pages[state.page] || home)();
  const nav = document.querySelector('#drawer nav');
  if (nav && isAdmin() && !document.querySelector('#adminNavButton')) {
    const b = document.createElement('button');
    b.id = 'adminNavButton'; b.dataset.page = 'admin'; b.textContent = 'ADMIN DASHBOARD →';
    nav.appendChild(b);
  }
  if (!isAdmin()) document.querySelector('#adminNavButton')?.remove();

  document.querySelectorAll('#drawer [data-page]').forEach(button => {
    const page = button.dataset.page;
    const loggedIn = isLoggedIn();

    const alwaysVisible = [
      'home', 'onhand', 'preorder', 'about', 'faq'
    ];

    const authPages = ['login', 'register'];

    const protectedPages = [
      'cart', 'favorites', 'history', 'profile', 'checkout'
    ];

    if (alwaysVisible.includes(page)) {
      button.hidden = false;
    } else if (authPages.includes(page)) {
      button.hidden = loggedIn;
    } else if (page === 'logout') {
      button.hidden = !loggedIn;
    } else if (protectedPages.includes(page)) {
      button.hidden = !loggedIn;
    }
  });

  window.scrollTo({ top: 0, behavior: 'auto' });
}

/* -------------------- MENU EVENTS -------------------- */

if (drawer && scrim) {
  const menuToggle = document.querySelector('#menuToggle');
  const closeMenu = document.querySelector('#closeMenu');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      drawer.classList.add('open');
      scrim.classList.add('show');
      drawer.setAttribute('aria-hidden', 'false');
      menuToggle.setAttribute('aria-expanded', 'true');
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', closeDrawer);
  }

  scrim.addEventListener('click', closeDrawer);
}

/* -------------------- CLICK EVENTS -------------------- */

document.addEventListener('click', event => {
  const target = event.target.closest(
    'button, [data-product], a[data-page]'
  );

  if (!target) return;

  /* Navigate to a page */
  if (target.dataset.page) {
    event.preventDefault();
    go(target.dataset.page);
    return;
  }

  /* Back button */
  if (target.hasAttribute('data-back')) {
    if (state.page === 'product') {
      go(state.previous);
    } else if (state.page === 'checkout') {
      go('cart');
    } else {
      go('home');
    }

    return;
  }

  /* Open product details */
  if (target.dataset.product) {
    state.selected = Number(target.dataset.product);
    state.quantity = 1;
    state.previous = state.page;
    go('product');
    return;
  }

  /* Favorites require an account */
  if (target.dataset.fav) {
    if (!isLoggedIn()) {
      state.pendingDestination = 'favorites';
      state.page = 'login';
      closeDrawer();
      render();
      notify('Log in or register to save favorites.');
      return;
    }

    const id = Number(target.dataset.fav);

    state.favorites = state.favorites.includes(id)
      ? state.favorites.filter(item => item !== id)
      : [...state.favorites, id];

    saveUserData();
    render();

    notify(
      state.favorites.includes(id)
        ? 'Saved to favorites'
        : 'Removed from favorites'
    );

    return;
  }

  /* Add to cart */
  if (target.dataset.add) {
    if (target.hasAttribute('data-detail-add')) {
      const option = document.querySelector('#option');
      if (option) state.option = option.value;
    }

    addToCart(target.dataset.add, state.quantity, 'cart');
    return;
  }

  /* Order now */
  if (target.dataset.order) {
    const id = Number(target.dataset.order);
    const option = document.querySelector('#option');

    if (option) state.option = option.value;

    if (!isLoggedIn()) {
      addToCart(id, state.quantity, 'checkout');
      return;
    }

    if (addToCart(id, state.quantity, 'checkout')) {
      go('checkout');
    }

    return;
  }

  /* Product quantity controls */
  if (target.dataset.qty) {
    state.quantity = Math.max(
      1,
      state.quantity + (target.dataset.qty === '+' ? 1 : -1)
    );

    const display = document.querySelector('#qtyValue');

    if (display) {
      display.textContent = state.quantity;
    }

    return;
  }

  /* Remove an item from cart */
  if (target.dataset.remove) {
    const [id, ...optionParts] = target.dataset.remove.split('-');
    const option = optionParts.join('-');

    state.cart = state.cart.filter(item =>
      !(item.id === Number(id) && item.option === option)
    );

    saveUserData();
    render();
    return;
  }

  /* Change cart item quantity */
  if (target.dataset.cartqty) {
    const [direction, id, ...optionParts] =
      target.dataset.cartqty.split('-');

    const option = optionParts.join('-');

    const item = state.cart.find(item =>
      item.id === Number(id) && item.option === option
    );

    if (item) {
      item.qty += direction === '+' ? 1 : -1;

      if (item.qty <= 0) {
        state.cart = state.cart.filter(cartItem => cartItem !== item);
      }
    }

    saveUserData();
    render();
    return;
  }

  /* Expand or collapse FAQ answers */
  if (target.dataset.faq !== undefined) {
    state.faqOpen =
      state.faqOpen === Number(target.dataset.faq)
        ? -1
        : Number(target.dataset.faq);

    render();
  }
});


/* -------------------- CUSTOM FILTER MENUS -------------------- */

document.addEventListener('click', event => {
  const sortDropdown = document.querySelector('#sortDropdown');
  const priceDropdown = document.querySelector('#priceDropdown');

  const dropdowns = [sortDropdown, priceDropdown].filter(Boolean);

  const trigger = event.target.closest(
    '#sortTrigger, #priceTrigger'
  );

  const option = event.target.closest('[data-sort], [data-price]');

  if (trigger) {
    const dropdown = trigger.closest('.custom-select');
    const menu = dropdown.querySelector('.custom-select-menu');
    const opening = menu.hidden;

    // Close other dropdown menus first.
    dropdowns.forEach(item => {
      const otherMenu = item.querySelector('.custom-select-menu');
      const otherTrigger = item.querySelector('.custom-select-trigger');

      if (otherMenu) otherMenu.hidden = true;

      if (otherTrigger) {
        otherTrigger.setAttribute('aria-expanded', 'false');
      }
    });

    menu.hidden = !opening;
    trigger.setAttribute('aria-expanded', String(opening));
    return;
  }

  if (option) {
    if (option.hasAttribute('data-sort')) {
      state.sort = option.dataset.sort;
    } else if (option.hasAttribute('data-price')) {
      state.price = option.dataset.price;
    }

    render();
    return;
  }

  // Close menus when tapping outside.
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      const menu = dropdown.querySelector('.custom-select-menu');
      const button = dropdown.querySelector('.custom-select-trigger');

      if (menu) menu.hidden = true;

      if (button) {
        button.setAttribute('aria-expanded', 'false');
      }
    }
  });
});



/* -------------------- FILTERS -------------------- */

document.addEventListener('change', event => {
  if (event.target.id === 'sort') {
    state.sort = event.target.value;
    render();
  }

  if (event.target.id === 'price') {
    state.price = event.target.value;
    render();
  }

  if (event.target.id === 'option') {
    state.option = event.target.value;
  }
});

/* -------------------- SEARCH -------------------- */

document.addEventListener('input', event => {
  if (event.target.id !== 'search') return;

  state.search = event.target.value;

  const position = event.target.selectionStart;

  render();

  const searchInput = document.querySelector('#search');

  if (searchInput) {
    searchInput.focus();
    searchInput.setSelectionRange(position, position);
  }
});
/* -------------------- REGISTRATION -------------------- */

document.addEventListener('submit', event => {
  const form = event.target;

  if (form.id !== 'registerForm') return;

  event.preventDefault();

  const data = new FormData(form);

  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '')
    .trim()
    .toLowerCase();

  const password = String(data.get('password') || '');
  const confirmPassword = String(
    data.get('confirmPassword') || ''
  );

  const error = document.querySelector('#registerError');

  if (!error) return;

  error.style.display = 'none';

  if (!name || !email) {
    error.textContent = 'Please enter your name and email.';
    error.style.display = 'block';
    return;
  }

  if (password.length < 8) {
    error.textContent = 'Password must be at least 8 characters.';
    error.style.display = 'block';
    return;
  }

  if (password !== confirmPassword) {
    error.textContent = 'Passwords do not match.';
    error.style.display = 'block';
    return;
  }

  const users = getUsers();

  if (users.some(user => user.email === email)) {
    error.textContent =
      'This email is already registered. Please log in.';
    error.style.display = 'block';
    return;
  }

  users.push({
    name,
    email,
    password,
    role: 'customer'
  });

  localStorage.setItem(
    'gengaDemoUsers',
    JSON.stringify(users)
  );

  state.page = 'login';
  render();

  notify('Account created! Please log in.');
});

/* -------------------- LOGIN -------------------- */

document.addEventListener('submit', event => {
  const form = event.target;

  if (form.id !== 'loginForm') return;

  event.preventDefault();

  const data = new FormData(form);

  const email = String(data.get('email') || '')
    .trim()
    .toLowerCase();

  const password = String(data.get('password') || '');

  const error = document.querySelector('#loginError');

  const user = getUsers().find(user =>
    user.email === email &&
    user.password === password
  );

  if (!user) {
    if (error) {
      error.textContent = 'Incorrect email or password.';
      error.style.display = 'block';
    }
    return;
  }

  localStorage.setItem(
    'gengaDemoSession',
    JSON.stringify({
      name: user.name,
      email: user.email,
      role: user.role || 'customer'
    })
  );

  loadUserData();

  state.search = '';

  const pending = state.pendingAddToCart;
  const pendingDestination = state.pendingDestination;

  state.pendingAddToCart = null;
  state.pendingDestination = null;

  if (pending) {
    state.option = pending.option || state.option;
    state.quantity = pending.qty || 1;

    state.page = 'home';
    render();

    addToCart(
      pending.id,
      pending.qty,
      pending.nextPage || 'cart'
    );

    go(pending.nextPage || 'cart');
  } else {
    state.page = user.role === 'admin' ? 'admin' : (pendingDestination || 'home');
    render();
  }

  notify('Welcome to GENGA, ' + user.name + '!');
});

/* -------------------- CHECKOUT SUBMISSION -------------------- */

document.addEventListener('submit', event => {
  if (event.target.id !== 'checkoutForm') return;

  event.preventDefault();

  if (!isLoggedIn()) {
    go('login');
    return;
  }

  if (!state.cart.length) {
    notify('Your cart is empty.');
    go('cart');
    return;
  }

  const form = event.target;
  const data = new FormData(form);

  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const session = getCurrentUser();

  state.orders.unshift({
    id: 'GENGA-' + String(Date.now()).slice(-6),

    date: new Date().toLocaleDateString('en-PH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),

    name: state.cart.map(item =>
      `${item.name} ×${item.qty}`
    ).join(', '),

    price: total,
    status: 'Pending approval',
    customer: session.email,
    customerName: data.get('name'),
    phone: data.get('phone'),
    address: data.get('address'),
    payment: data.get('payment')
  });

  const createdOrder = state.orders[0];
  const allOrders = getAllOrders();
  allOrders.unshift(createdOrder);
  saveAllOrders(allOrders);

  state.cart = [];

  saveUserData();

  state.page = 'history';
  render();

  notify('Order placed successfully!');
});


/* -------------------- ADMIN ACTIONS -------------------- */
document.addEventListener('submit', event => {
  if (event.target.id !== 'adminProductForm') return;
  event.preventDefault();
  if (!isAdmin()) return notify('Admin access only.');
  const d = new FormData(event.target);
  const name = String(d.get('name')||'').trim();
  const image = String(d.get('image')||'').trim();
  const price = Number(d.get('price'));
  if (!name || !image || !Number.isFinite(price) || price < 0) return notify('Enter valid product details.');
  const type = d.get('type') === 'preorder' ? 'preorder' : 'onhand';
  products.push({id:Math.max(0,...products.map(p=>Number(p.id)||0))+1,name,image,price,type,stock:Math.max(0,Number(d.get('stock'))||0),badge:type==='preorder'?'Pre-Order':'On Hand',desc:String(d.get('desc')||'').trim()||name});
  saveProducts(); render(); notify('Product added to inventory.');
});
document.addEventListener('submit', event => {
  if (event.target.id !== 'stockEditForm') return;
  event.preventDefault();
  if (!isAdmin()) return notify('Admin access only.');
  const form = event.target;
  const product = find(form.dataset.stockProduct);
  const value = Number(new FormData(form).get('stock'));
  if (!product || !Number.isInteger(value) || value < 0) return notify('Enter a valid non-negative whole number.');
  product.stock = value;
  saveProducts();
  render();
  notify('Stock quantity updated.');
});

document.addEventListener('click', event => {
  if (event.target.closest('[data-stock-modal-close], [data-admin-modal-close]')) {
    const host = document.querySelector('#stockEditorHost');
    if (host) host.innerHTML = '';
  }
});

document.addEventListener('change', event => {
  const sel = event.target.closest('[data-order-status]');
  if (!sel) return;
  if (!isAdmin()) return notify('Admin access only.');

  const orderId = String(sel.dataset.orderStatus);
  const orders = getAllOrders();
  const order = orders.find(item => String(item.id) === orderId);
  if (!order) {
    notify('Order could not be found. Refresh and try again.');
    return;
  }

  order.status = sel.value;
  saveAllOrders(orders);

  // Update every matching customer history stored on this same browser origin.
  getUsers().forEach(user => {
    const storageKey = 'gengaOrders_' + user.email;
    const customerOrders = readStorage(storageKey, []);
    let changed = false;
    customerOrders.forEach(customerOrder => {
      if (String(customerOrder.id) === orderId) {
        customerOrder.status = order.status;
        changed = true;
      }
    });
    if (changed) localStorage.setItem(storageKey, JSON.stringify(customerOrders));
  });

  render();
  notify('Order status updated to ' + order.status + '.');
});
document.addEventListener('click', event => {
  const stockBtn = event.target.closest('[data-stock-edit]');
  if (stockBtn) {
    if (!isAdmin()) return notify('Admin access only.');
    const p = find(stockBtn.dataset.stockEdit); if (!p) return;
    const host = document.querySelector('#stockEditorHost');
    if (!host) return;
    host.innerHTML = `
      <div class="admin-modal-backdrop" data-stock-modal-close>
        <section class="admin-modal" role="dialog" aria-modal="true" aria-labelledby="stockModalTitle">
          <button type="button" class="admin-modal-close" data-stock-modal-close aria-label="Close">×</button>
          <p class="eyebrow">INVENTORY UPDATE</p>
          <h2 id="stockModalTitle">Edit stock quantity</h2>
          <p class="admin-modal-product">${p.name}</p>
          <form id="stockEditForm" data-stock-product="${p.id}">
            <label for="stockQuantityInput">Available stock</label>
            <input id="stockQuantityInput" name="stock" type="number" min="0" step="1" value="${Number(p.stock||0)}" required>
            <div class="admin-modal-actions">
              <button type="button" class="btn light" data-stock-modal-close>Cancel</button>
              <button type="submit" class="btn">SAVE STOCK</button>
            </div>
          </form>
        </section>
      </div>`;
    const input = host.querySelector('#stockQuantityInput');
    if (input) { input.focus(); input.select(); }
    return;
  }
  const deleteConfirm = event.target.closest('[data-delete-confirm]');
  if (deleteConfirm) {
    if (!isAdmin()) return notify('Admin access only.');
    const productId = Number(deleteConfirm.dataset.deleteConfirm);
    const product = find(productId);
    if (!product) return;
    const index = products.findIndex(item => item.id === product.id);
    if (index >= 0) products.splice(index, 1);
    saveProducts();
    render();
    notify('Product deleted.');
    return;
  }

  const deleteBtn = event.target.closest('[data-product-delete]');
  if (deleteBtn) {
    if (!isAdmin()) return notify('Admin access only.');
    const product = find(deleteBtn.dataset.productDelete);
    const host = document.querySelector('#stockEditorHost');
    if (!product || !host) return;
    host.innerHTML = `
      <div class="admin-modal-backdrop" data-admin-modal-close>
        <section class="admin-modal" role="dialog" aria-modal="true" aria-labelledby="deleteModalTitle">
          <button type="button" class="admin-modal-close" data-admin-modal-close aria-label="Close">×</button>
          <p class="eyebrow">INVENTORY MANAGEMENT</p>
          <h2 id="deleteModalTitle">Delete this product?</h2>
          <p class="admin-modal-product">Are you sure you want to delete <strong>${product.name}</strong>? This action cannot be undone.</p>
          <div class="admin-modal-actions">
            <button type="button" class="btn light" data-admin-modal-close>Cancel</button>
            <button type="button" class="btn admin-danger" data-delete-confirm="${product.id}">DELETE PRODUCT</button>
          </div>
        </section>
      </div>`;
  }
});

/* -------------------- INITIALIZATION -------------------- */

state.faqOpen = 0;

if (isLoggedIn()) {
  loadUserData();
}

state.page = 'home';
render();