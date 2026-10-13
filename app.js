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
if (!readStorage('gengaProducts', null)) localStorage.setItem('gengaProducts', JSON.stringify(products));

/* -------------------- APP STATE -------------------- */

const state = {
  page: 'home',
  previous: 'onhand',
  navStack: [],
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
  pendingDestination: null,
  trackingQuery: ''
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
  'cart', 'checkout', 'favorites', 'profile', 'history', 'track'
];
const ADMIN_PAGES = ['admin', 'inventory'];
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
  // An administrator stays inside the admin interface; customer/store pages are hidden.
  if (isAdmin() && !['admin', 'inventory'].includes(page)) {
    state.page = 'admin';
    closeDrawer();
    render();
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

  if (state.page !== page) state.navStack.push(state.page);
  state.page = page;
  closeDrawer();
  render();
}

function header(title, right = 'home') {
  const adminMode = isAdmin();
  return `
    <div class="page-header ${adminMode ? 'admin-page-header' : ''}">
      <h2>${adminMode ? 'GENGA ADMIN' : title}</h2>
      ${adminMode ? '' : `
        <button
          class="icon-btn"
          data-page="${right}"
          aria-label="${right === 'cart' ? 'Cart' : 'Back'}"
          title="${right === 'cart' ? 'Cart' : 'Back'}"
          ${right === 'cart' ? 'data-page="cart"' : 'data-back="true"'}
        >${right === 'cart' ? '🛒' : '←'}</button>
      `}
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
  const stockManaged = product.stock !== undefined && product.stock !== null;
  const stockOut = stockManaged && Number(product.stock) <= 0;

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
        <span class="pill">${stockOut ? 'Out of Stock' : product.badge}</span>

        <h3 class="product-name">${product.name}</h3>
        ${stockManaged ? `<p class="product-stock ${stockOut ? 'out' : ''}">${stockOut ? 'Currently unavailable' : `${Number(product.stock)} available`}</p>` : ''}

        <div class="price">${money(product.price)}</div>

        <div class="product-actions">
          <button
            class="btn"
            data-product="${product.id}"
          >View item</button>

          <button
            class="btn light"
            data-add="${product.id}" ${stockOut ? 'disabled title="Out of stock"' : ''}
          >${stockOut ? 'Out of stock' : 'Add to cart'}</button>
        </div>
      </div>
    </article>
  `;
}

/* -------------------- PRODUCT COLLECTIONS -------------------- */

function collection(type) {
  let list = products.filter(product =>
    product.type === type &&
    !(product.stock !== undefined && Number(product.stock) <= 0) &&
    product.name.toLowerCase().includes(state.search.toLowerCase())
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
      <button class="collection-back" type="button" data-back aria-label="Back to home">← Back to Home</button>
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
            ${products.filter(product => product.type === 'preorder' && !(product.stock !== undefined && Number(product.stock) <= 0)).slice(0, 2).map(product => `<article class="product-card featured-simple" data-product="${product.id}" role="button" tabindex="0"><img class="product-image" src="${asset(product.image)}" alt="${product.name}" loading="lazy"><div class="product-body"><span class="pill">PRE-ORDER</span><h3 class="product-name">${product.name}</h3></div></article>`).join('') || '<p class="empty">New pre-order items coming soon.</p>'}
          </div>

          <div class="hero-actions">
            <button class="btn full" data-page="preorder">
              BROWSE COLLECTION
            </button>
            <button class="btn full" data-page="pasabuy">
              PASABUY
            </button>
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
          ${product.stock !== undefined ? `<p class="product-stock ${Number(product.stock) <= 0 ? 'out' : ''}">${Number(product.stock) <= 0 ? 'Out of stock' : `${Number(product.stock)} available`}</p>` : ''}
          <p class="intro">${product.desc}</p>

          <div class="detail-choice-row">
            <div class="field"><label for="option">Choose character / option</label>
              <select id="option">${(product.options || ['Standard', 'Character A', 'Character B']).map(option => `<option ${option === state.option ? 'selected' : ''}>${option}</option>`).join('')}</select>
            </div>
            <div class="field"><label>Quantity</label>
              <div class="qty"><button data-qty="-">−</button><strong id="qtyValue">${state.quantity}</strong><button data-qty="+">+</button></div>
            </div>
          </div>
          <div class="detail-buttons">
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
  if (product.stock !== undefined && product.stock !== null) {
    const option = product.options ? state.option : '';
    const existingQty = state.cart.filter(item => item.id === product.id && item.option === option).reduce((sum, item) => sum + Number(item.qty || 0), 0);
    if (Number(product.stock) <= 0 || existingQty + Number(qty) > Number(product.stock)) {
      notify(Number(product.stock) <= 0 ? 'This product is currently out of stock.' : `Only ${Number(product.stock) - existingQty} item(s) remain in stock.`);
      return false;
    }
  }

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
    return shell('CHECKOUT', `<div class="empty"><h2>Your cart is empty.</h2><button class="btn" data-page="onhand">Browse items</button></div>`);
  }

  const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const session = getCurrentUser();
  const account = getUsers().find(u => u.email === session?.email) || {};
  const addressReady = Boolean(account.phone && account.address);

  return shell('CHECKOUT', `
    <div class="section-head">
      <p class="eyebrow">YOUR ORDER</p>
      <h1 class="section-title">CHECKOUT</h1>
    </div>
    <form id="checkoutForm">
      <section class="checkout-contact-card">
        <h2>DELIVERY DETAILS</h2>
        <p>Your saved contact details from registration are used automatically. To change them, visit <button type="button" class="inline-link" data-page="profile">My Profile</button>.</p>
        <div class="form-grid" style="margin:24px 0">
          <div class="field full-field"><label for="customerName">Full name</label><input id="customerName" name="name" value="${escapeHtml(account.name || session?.name || '')}" readonly required autocomplete="name"></div>
          <div class="field full-field"><label for="phone">Contact number</label><input id="phone" name="phone" type="tel" value="${escapeHtml(account.phone || '')}" readonly required autocomplete="tel" placeholder="Add your number in My Profile"></div>
          <div class="field full-field"><label for="address">Delivery address</label><textarea id="address" name="address" rows="3" readonly required autocomplete="street-address" placeholder="Add your address in My Profile">${escapeHtml(account.address || '')}</textarea></div>
        </div>
        ${addressReady ? '' : '<p class="checkout-warning">Please add your contact number and delivery address in My Profile before placing your order.</p>'}
      </section>
      <h2 class="payment-heading">PAYMENT METHOD</h2>
      <label class="payment-option"><input type="radio" name="payment" value="GCash" required><span><strong>GCash</strong><small>Full payment via GCash</small></span></label>
      <label class="payment-option"><input type="radio" name="payment" value="Bank Transfer"><span><strong>Bank Transfer</strong><small>Full payment via bank transfer</small></span></label>
      <label class="payment-option"><input type="radio" name="payment" value="50% Online + 50% COD"><span><strong>50% Online Payment + 50% Cash on Delivery</strong><small>Pay half online now and the remaining half upon delivery.</small></span></label>
      <div class="subtotal"><span>TOTAL</span><strong>${money(total)}</strong></div>
      <div class="payment-split" id="paymentSplit" hidden><p>Pay online now (50%) <strong>${money(Math.ceil(total*100/2)/100)}</strong></p><p>Pay upon delivery / COD (50%) <strong>${money(Math.floor(total*100/2)/100)}</strong></p></div>
      <button class="btn full" type="submit" ${addressReady ? '' : 'disabled'}>PLACE ORDER</button>
    </form>
  `);
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

/* -------------------- TRACK ORDER -------------------- */
function trackOrder() {
  const query = String(state.trackingQuery || '').trim().toUpperCase();
  const order = query ? state.orders.find(item => String(item.id).toUpperCase() === query) : null;
  const recentOrders = state.orders.slice(0, 5);
  const orderCard = item => `
    <article class="track-order-card">
      <div class="track-order-top"><div><p class="eyebrow">ORDER ${escapeHtml(item.id)}</p><h2>${escapeHtml(item.status || 'Pending approval')}</h2></div><span class="track-order-date">${escapeHtml(item.date || '')}</span></div>
      <p>${escapeHtml(item.name || '')}</p>
      <p><strong>Total:</strong> ${money(item.price)} &nbsp; <strong>Payment:</strong> ${escapeHtml(item.payment || '—')}</p>
      <ol class="track-timeline">${(item.tracking || [{status:item.status || 'Pending approval', date:item.date || ''}]).map((step, index) => `<li class="${index === (item.tracking || []).length - 1 ? 'current' : 'done'}"><span class="track-dot">${index < (item.tracking || []).length - 1 ? '✓' : '•'}</span><div><strong>${escapeHtml(step.status)}</strong><small>${escapeHtml(step.date || '')}</small></div></li>`).join('')}</ol>
    </article>`;
  return shell('TRACK ORDER', `
    <div class="section-head"><p class="eyebrow">WHERE IS MY ORDER?</p><h1 class="section-title">TRACK ORDER</h1><p class="intro">Enter an order number from your order confirmation to view its latest status.</p></div>
    <form id="trackOrderForm" class="track-search"><label class="sr-only" for="trackingNumber">Order number</label><input id="trackingNumber" name="trackingNumber" value="${escapeHtml(state.trackingQuery)}" placeholder="e.g. GENGA-296327" autocomplete="off" required><button class="btn" type="submit">TRACK</button></form>
    ${query ? (order ? orderCard(order) : '<div class="empty track-order-card"><h2>Order not found</h2><p>Check the order number. You can only track orders linked to your signed-in account.</p></div>') : ''}
    ${!query && recentOrders.length ? `<h2 class="track-recent-heading">YOUR RECENT ORDERS</h2>${recentOrders.map(orderCard).join('')}` : ''}
    ${!recentOrders.length && !query ? '<div class="empty"><h2>No orders to track yet.</h2><p>After checkout, your order number and status will appear here.</p><button class="btn" data-page="onhand">START SHOPPING</button></div>' : ''}
  `, 'home');
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
  const user = session ? getUsers().find(u => u.email === session.email) : null;
  return shell('PROFILE', `
    <div class="section-head"><p class="eyebrow">YOUR ACCOUNT</p><h1 class="section-title">MY PROFILE</h1></div>
    <form id="profileForm" class="feature-card form-grid">
      <div class="field full-field"><label for="profileName">Full name</label><input id="profileName" name="name" required value="${user?.name || session?.name || ''}"></div>
      <div class="field full-field"><label>Email address</label><input value="${user?.email || session?.email || ''}" disabled></div>
      <div class="field full-field"><label for="profilePhone">Contact number</label><input id="profilePhone" name="phone" type="tel" value="${user?.phone || ''}" placeholder="09xx xxx xxxx" required></div>
      <div class="field full-field"><label for="profileAddress">Delivery address</label><textarea id="profileAddress" name="address" rows="3" required placeholder="House no., street, barangay, city">${user?.address || ''}</textarea></div>
      <button class="btn full" type="submit">SAVE PROFILE</button>
      <button class="btn light full" type="button" data-page="logout">LOG OUT</button>
    </form>
  `, 'cart');
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
              <p>Payment: <strong>${order.payment || '—'}</strong></p>
              ${order.payment === '50% Online + 50% COD' ? `<p>Online payment: <strong>${money(order.onlineDue ?? order.price/2)}</strong> · COD: <strong>${money(order.codDue ?? order.price/2)}</strong></p>` : ''}
              <div class="tracking-steps"><strong>TRACK ORDER</strong><p>${(order.tracking || [{status: order.status, date: order.date}]).map(step => `${step.status} — ${step.date}`).join('<br>')}</p></div>
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
      'Pay through GCash, bank transfer, or 50% online payment + 50% cash on delivery.'
    ],
    [
      'Delivery Methods',
      'We ship nationwide through trusted local couriers. Delivery fees vary by desitination'
    ],
    [
      'Track Order',
      'Your order statuses are available in Transaction History.'
    ],
    [
      'Packaging',
      'Every collections is checked , wrapped in protective materials, and placed in a secure box'
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
            <button class="password-toggle" type="button" data-toggle-password="loginPassword" aria-label="Show password" title="Show password">&#128065;</button>
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
            <label for="registerPhone">Contact number</label>
            <input id="registerPhone" name="phone" type="tel" required placeholder="09xx xxx xxxx" autocomplete="tel">
          </div>
          <div class="field full-field">
            <label for="registerAddress">Delivery address</label>
            <textarea id="registerAddress" name="address" rows="3" required placeholder="House no., street, barangay, city" autocomplete="street-address"></textarea>
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
            <button class="password-toggle" type="button" data-toggle-password="registerPassword" aria-label="Show password" title="Show password">&#128065;</button>
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
            <button class="password-toggle" type="button" data-toggle-password="confirmPassword" aria-label="Show password" title="Show password">&#128065;</button>
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

      <section class="admin-panel"><h2>ORDER APPROVAL & STATUS</h2>
      ${orders.length ? `<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Order</th><th>Customer</th><th>Items</th><th>Total</th><th>Payment</th><th>Status</th><th>Update</th></tr></thead><tbody>
      ${orders.map(o=>`<tr><td data-label="Order">${o.id}<br><small>${o.date}</small></td><td data-label="Customer">${o.customerName||'Customer'}<br><small>${o.customer||''}</small></td><td data-label="Items">${o.name}</td><td data-label="Total">${money(o.price)}</td><td data-label="Payment">${o.payment||'—'}</td><td data-label="Status">${o.status}</td><td data-label="Update"><label class="admin-status-label">Change status</label><select data-order-status="${o.id}">${['Pending approval','Confirmed','Processing','Shipped','Delivered','Cancelled'].map(st=>`<option value="${st}" ${o.status===st?'selected':''}>${st}</option>`).join('')}</select></td></tr>`).join('')}
      </tbody></table></div>` : '<p class="empty">No orders yet. New orders will appear here.</p>'}</section>
      <button class="btn full" data-page="inventory">OPEN INVENTORY MANAGEMENT</button>

    </div>`, 'home');
}

function adminInventory() {
  if (!isAdmin()) return shell('ADMIN ACCESS', '<div class="empty"><h2>Admin access only.</h2></div>');
  return shell('INVENTORY MANAGEMENT', `
    <div class="admin-wrap"><div id="stockEditorHost"></div>
      <button class="inventory-back" type="button" data-page="admin" aria-label="Back to admin dashboard">← Back to Admin Dashboard</button>
      <div class="section-head"><p class="eyebrow">PRODUCT CATALOG</p><h1 class="section-title">INVENTORY MANAGEMENT</h1><p class="intro">Add products, upload real images, edit prices and stock. Set stock to zero to hide a product from customers.</p></div>
      <section class="admin-panel">
        <h2>INVENTORY MANAGEMENT</h2>
        <form id="adminProductForm" class="admin-product-form">
          <div class="field"><label for="newProductName">Product name</label><input id="newProductName" name="name" required placeholder="e.g. One Piece Ace Figure"></div>
          <div class="field"><label for="newProductPrice">Price (₱)</label><input id="newProductPrice" name="price" type="number" min="0.01" step="0.01" required placeholder="Enter price, e.g. 350.00" inputmode="decimal"><small class="field-hint">Enter the selling price in Philippine pesos.</small></div>
          <div class="field"><label for="newProductImage">Product image</label><input id="newProductImage" name="imageFile" type="file" accept="image/*" required><small class="field-hint">Choose a photo saved on your device. Google Photos images must first be downloaded to your device.</small><div id="newProductImagePreview" class="admin-image-preview" hidden><img alt="Selected product preview"><span>Image preview</span></div></div>
          <div class="field"><label for="newProductType">Product type</label><select id="newProductType" name="type"><option value="onhand">On-hand</option><option value="preorder">Pre-order</option></select></div>
          <div class="field"><label for="newProductStock">Available stock</label><input id="newProductStock" name="stock" type="number" min="0" step="1" required placeholder="Enter quantity, e.g. 10" inputmode="numeric"><small class="field-hint">Use 0 to mark as out of stock (hidden from customers).</small></div>
          <div class="field"><label for="newProductDesc">Product description</label><input id="newProductDesc" name="desc" placeholder="Short description of the item"></div>
          <button class="btn full" type="submit">ADD PRODUCT</button>
        </form>
        <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Product</th><th>Type</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead><tbody>
        ${products.map(p=>`<tr><td>${p.name}</td><td>${p.type==='onhand'?'On-hand':'Pre-order'}</td><td>${money(p.price)}</td><td>${p.stock === undefined ? 'Not set' : Number(p.stock)}</td><td><button class="btn admin-small" data-stock-edit="${p.id}">Edit stock &amp; price</button> <button class="btn light admin-small" data-product-delete="${p.id}">Delete</button></td></tr>`).join('')}
        </tbody></table></div><p class="muted">Price and stock changes are reflected in the storefront on this browser. Products with managed stock set to 0 are hidden from customers and cannot be added to cart.</p>
      </section>
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
  // Keep an authenticated admin out of the customer storefront.
  if (isAdmin() && !['admin', 'inventory'].includes(state.page)) state.page = 'admin';
  if (ADMIN_PAGES.includes(state.page) && !isAdmin()) state.page = 'login';
  if (PROTECTED_PAGES.includes(state.page) && !isLoggedIn()) {
    state.page = 'login';
  }

  if (['login', 'register'].includes(state.page) && isLoggedIn()) {
    state.page = isAdmin() ? 'admin' : 'home';
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
    track: trackOrder,
    faq,
    about,
    login,
    register,
    admin: adminDashboard,
    inventory: adminInventory
  };

  const adminMode = isAdmin();
  document.body.classList.toggle('admin-mode', adminMode);
  app.innerHTML = (pages[state.page] || home)();

  const nav = document.querySelector('#drawer nav');
  if (nav && adminMode) {
    nav.innerHTML = `
      <button data-page="admin" class="admin-nav-active">ORDER APPROVAL & STATUS</button>
      <button data-page="inventory">INVENTORY MANAGEMENT</button>
      <button data-page="logout">LOG OUT</button>
    `;
  } else if (nav && !adminMode) {
    // Guests see only public browsing pages and sign-in options.
    // Customer-only links appear only after a valid customer login.
    const loggedIn = isLoggedIn();
    nav.innerHTML = loggedIn ? `
      <button data-page="home">HOME</button>
      <button data-page="onhand">ON-HAND ITEMS</button>
      <button data-page="preorder">PRE-ORDER ITEMS</button>
      <button data-page="favorites">FAVORITES ♡</button>
      <button data-page="cart">YOUR CART</button>
      <button data-page="history">TRANSACTION HISTORY</button>
      <button data-page="track">TRACK ORDER</button>
      <button class="nav-divider" data-page="about">ABOUT US</button>
      <button data-page="faq">FAQ</button>
      <button class="nav-divider" data-page="profile">MY PROFILE</button>
      <button data-page="logout">LOG OUT</button>
    ` : `
      <button data-page="home">HOME</button>
      <button data-page="onhand">ON-HAND ITEMS</button>
      <button data-page="preorder">PRE-ORDER ITEMS</button>
      <button class="nav-divider" data-page="about">ABOUT US</button>
      <button data-page="faq">FAQ</button>
      <button class="nav-divider" data-page="login">LOGIN</button>
      <button data-page="register">CREATE ACCOUNT</button>
    `;
  }

  const footer = document.querySelector('.footer');
  if (footer) footer.hidden = adminMode;

  const topProfile = document.querySelector('.profile-shortcut');
  if (topProfile) {
    if (adminMode) {
      topProfile.dataset.page = 'logout';
      topProfile.setAttribute('aria-label', 'Log out');
      topProfile.title = 'Log out';
      topProfile.textContent = '⇥';
    } else if (isLoggedIn()) {
      topProfile.dataset.page = 'profile';
      topProfile.setAttribute('aria-label', 'My account');
      topProfile.title = 'My account';
      topProfile.textContent = '♙';
    } else {
      topProfile.dataset.page = 'login';
      topProfile.setAttribute('aria-label', 'Log in');
      topProfile.title = 'Log in';
      topProfile.textContent = '♙';
    }
  }

  const brand = document.querySelector('.brand-mini');
  if (brand) {
    if (adminMode) {
      brand.removeAttribute('data-page');
      brand.setAttribute('aria-label', 'GENGA Admin');
    } else {
      brand.dataset.page = 'home';
      brand.setAttribute('aria-label', 'GENGA Home');
    }
  }

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
  const eye = event.target.closest('[data-toggle-password]');
  if (eye) {
    const input = document.getElementById(eye.dataset.togglePassword);
    if (input) { input.type = input.type === 'password' ? 'text' : 'password'; eye.innerHTML = input.type === 'password' ? '&#128065;' : '&#128584;'; }
    return;
  }
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
    const fallback = state.page === 'checkout' ? 'cart' : (state.page === 'product' ? state.previous : 'home');
    const previousPage = state.navStack.pop();
    state.page = previousPage && previousPage !== state.page ? previousPage : fallback;
    closeDrawer(); render();
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



document.addEventListener('change', event => {
  if (event.target.name === 'payment') {
    const split = document.querySelector('#paymentSplit');
    if (split) split.hidden = event.target.value !== '50% Online + 50% COD';
  }
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
    phone: String(data.get('phone') || '').trim(),
    address: String(data.get('address') || '').trim(),
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

/* -------------------- PROFILE SAVE -------------------- */
document.addEventListener('submit', event => {
  if (event.target.id !== 'profileForm') return;
  event.preventDefault();
  const session = getCurrentUser();
  const users = getUsers();
  const user = users.find(u => u.email === session?.email);
  if (!user) return notify('Please log in again.');
  const data = new FormData(event.target);
  user.name = String(data.get('name') || '').trim();
  user.phone = String(data.get('phone') || '').trim();
  user.address = String(data.get('address') || '').trim();
  localStorage.setItem('gengaDemoUsers', JSON.stringify(users));
  localStorage.setItem('gengaDemoSession', JSON.stringify({...session, name:user.name}));
  render(); notify('Profile details saved.');
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

  const account = getUsers().find(user => user.email === session.email);
  if (!account || !String(account.phone || '').trim() || !String(account.address || '').trim()) {
    notify('Please add your contact number and address in My Profile first.');
    go('profile');
    return;
  }
  if (account) {
    account.name = String(data.get('name') || account.name);
    // Checkout uses the saved profile details; customers edit these in My Profile.
    account.phone = String(account.phone || '');
    account.address = String(account.address || '');
    localStorage.setItem('gengaDemoUsers', JSON.stringify(getUsers()));
    localStorage.setItem('gengaDemoSession', JSON.stringify({...session, name: account.name}));
  }
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
    customerName: account?.name || session.name || '',
    phone: account?.phone || '',
    address: account?.address || '',
    payment: data.get('payment'),
    onlineDue: data.get('payment') === '50% Online + 50% COD' ? Math.ceil(total * 100 / 2) / 100 : total,
    codDue: data.get('payment') === '50% Online + 50% COD' ? Math.floor(total * 100 / 2) / 100 : 0,
    tracking: [{ status: 'Pending approval', date: new Date().toLocaleString('en-PH') }]
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


/* -------------------- TRACK ORDER SEARCH -------------------- */
document.addEventListener('submit', event => {
  if (event.target.id !== 'trackOrderForm') return;
  event.preventDefault();
  state.trackingQuery = String(new FormData(event.target).get('trackingNumber') || '').trim().toUpperCase();
  render();
});

/* -------------------- ADMIN ACTIONS -------------------- */
document.addEventListener('submit', event => {
  if (event.target.id !== 'adminProductForm') return;
  event.preventDefault();
  if (!isAdmin()) return notify('Admin access only.');
  const form = event.target;
  const d = new FormData(form);
  const name = String(d.get('name') || '').trim();
  const file = d.get('imageFile');
  const price = Number(d.get('price'));
  const stockRaw = String(d.get('stock') ?? '').trim();
  const stock = Number(stockRaw);
  if (!name) return notify('Enter a product name.');
  if (!file || !file.size || !file.type.startsWith('image/')) return notify('Choose a valid product image from your device.');
  if (!Number.isFinite(price) || price <= 0) return notify('Enter a price greater than ₱0.');
  if (stockRaw === '' || !Number.isInteger(stock) || stock < 0) return notify('Enter a whole-number stock quantity (0 or more).');
  if (file.size > 2 * 1024 * 1024) return notify('Please choose an image smaller than 2 MB.');
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const type = d.get('type') === 'preorder' ? 'preorder' : 'onhand';
      products.push({
        id: Math.max(0, ...products.map(p => Number(p.id) || 0)) + 1,
        name,
        image: String(reader.result),
        price: Math.round(price * 100) / 100,
        type,
        stock,
        badge: type === 'preorder' ? 'Pre-Order' : 'On Hand',
        desc: String(d.get('desc') || '').trim() || name
      });
      saveProducts();
      render();
      notify('Product added with image, price, and stock.');
    } catch (error) {
      notify('Could not save this image. Try a smaller image file.');
    }
  };
  reader.onerror = () => notify('Could not read this image. Please choose another file.');
  reader.readAsDataURL(file);
});

document.addEventListener('submit', event => {
  if (event.target.id !== 'stockEditForm') return;
  event.preventDefault();
  if (!isAdmin()) return notify('Admin access only.');

  const form = event.target;
  const product = find(form.dataset.stockProduct);
  const data = new FormData(form);
  const stock = Number(data.get('stock'));
  const price = Number(data.get('price'));

  if (!product) return notify('Product could not be found. Please refresh and try again.');
  if (!Number.isInteger(stock) || stock < 0) {
    return notify('Enter a valid non-negative whole number for stock.');
  }
  if (!Number.isFinite(price) || price < 0) {
    return notify('Enter a valid price of zero or more.');
  }

  product.stock = stock;
  product.price = Math.round(price * 100) / 100;
  saveProducts();
  render();
  notify('Stock and price updated successfully.');
});

document.addEventListener('click', event => {
  // Close only when the backdrop itself or an explicit close/cancel button is clicked.
  // Do not match the backdrop through closest(): every input inside the modal is
  // a descendant of it, which caused the editor to close when tapping the Price field.
  const target = event.target;
  const clickedBackdrop = target.classList &&
    target.classList.contains('admin-modal-backdrop') &&
    (target.hasAttribute('data-stock-modal-close') || target.hasAttribute('data-admin-modal-close'));
  const clickedCloseButton = target.closest &&
    target.closest('button[data-stock-modal-close], button[data-admin-modal-close]');

  if (clickedBackdrop || clickedCloseButton) {
    const host = document.querySelector('#stockEditorHost');
    if (host) host.innerHTML = '';
  }
});

document.addEventListener('change', event => {
  if (event.target.id === 'newProductImage') {
    const file = event.target.files && event.target.files[0];
    const preview = document.querySelector('#newProductImagePreview');
    if (preview && file && file.type.startsWith('image/')) {
      const img = preview.querySelector('img');
      img.src = URL.createObjectURL(file);
      preview.hidden = false;
    } else if (preview) {
      preview.hidden = true;
    }
  }
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
  order.tracking = order.tracking || [];
  order.tracking.push({ status: order.status, date: new Date().toLocaleString('en-PH') });
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
          <h2 id="stockModalTitle">Edit stock &amp; price</h2>
          <p class="admin-modal-product">${p.name}</p>
          <form id="stockEditForm" data-stock-product="${p.id}">
            <div class="field">
              <label for="stockQuantityInput">Available stock</label>
              <input id="stockQuantityInput" name="stock" type="number" min="0" step="1" value="${p.stock === undefined ? '' : Number(p.stock)}" placeholder="Enter available units, e.g. 10" inputmode="numeric" required>
              <small class="field-hint">Set to 0 to hide this product from the customer storefront.</small>
            </div>
            <div class="field">
              <label for="stockPriceInput">Product price (₱)</label>
              <input id="stockPriceInput" name="price" type="number" min="0" step="0.01" inputmode="decimal" value="${Number(p.price||0)}" placeholder="Enter price in PHP, e.g. 350.00" required>
              <small class="field-hint">Displayed to customers as the product price.</small>
            </div>
            <div class="admin-modal-actions">
              <button type="button" class="btn light" data-stock-modal-close>Cancel</button>
              <button type="submit" class="btn">SAVE CHANGES</button>
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