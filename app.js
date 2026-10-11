
/* =====================================================
   GENGA COLLECTIBLES STORE
   Complete front-end application
   Browse-first demo version
   ===================================================== */

/* -------------------- PRODUCTS -------------------- */

const products = [
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

/* -------------------- APP STATE -------------------- */

const state = {
  page: 'login',
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
  pendingPage: null,
  pendingAction: null
};

const app = document.querySelector('#app');
const drawer = document.querySelector('#drawer');
const scrim = document.querySelector('#scrim');
const toastEl = document.querySelector('#toast');

const PUBLIC_PAGES = [
  'home',
  'onhand',
  'preorder',
  'product',
  'about',
  'faq',
  'login',
  'register'
];

const ACCOUNT_PAGES = [
  'cart',
  'checkout',
  'favorites',
  'profile',
  'history'
];

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
  if (page === 'logout') {
    logoutDemo();
    return;
  }

  // Browsing pages are public. Account pages require authentication.
  if (ACCOUNT_PAGES.includes(page) && !isLoggedIn()) {
    state.pendingPage = page;
    state.page = 'login';
    closeDrawer();
    render();
    notify('Please log in or create an account to continue.');
    return;
  }

  // Logged-in users do not need to revisit the auth pages.
  if (['login', 'register'].includes(page) && isLoggedIn()) {
    page = 'home';
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

          <select id="sort" aria-label="Sort products">
            <option value="popularity"
              ${state.sort === 'popularity' ? 'selected' : ''}>
              Popularity
            </option>

            <option value="price-up"
              ${state.sort === 'price-up' ? 'selected' : ''}>
              Price: low to high
            </option>

            <option value="price-down"
              ${state.sort === 'price-down' ? 'selected' : ''}>
              Price: high to low
            </option>

            <option value="name"
              ${state.sort === 'name' ? 'selected' : ''}>
              Name A–Z
            </option>
          </select>

          <select id="price" aria-label="Filter by price">
            <option value="all">All prices</option>

            <option value="low"
              ${state.price === 'low' ? 'selected' : ''}>
              Under ₱500
            </option>

            <option value="mid"
              ${state.price === 'mid' ? 'selected' : ''}>
              ₱500–₱1,999
            </option>

            <option value="high"
              ${state.price === 'high' ? 'selected' : ''}>
              ₱2,000+
            </option>
          </select>

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

        <p class="eyebrow">
          THE ART BEHIND EVERY COLLECTION
        </p>

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

          <button class="btn full light" data-page="preorder">
            PRE-ORDER NOW
          </button>
        </div>

        <div class="hero-art">
          <img src="Logo.png" alt="GENGA Logo">
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
              products[3],
              products[6],
              products[8]
            ].map(card).join('')}
          </div>

          <div class="hero-actions">
            <button class="btn full" data-page="onhand">
              BROWSE COLLECTION
            </button>

            <button class="btn full" data-page="preorder">
              PASABUY / PRE-ORDER
            </button>
          </div>

          <div class="two-col" style="margin-top:50px">

            <div class="feature-card">
              <h3>COLLECT WITH CONFIDENCE</h3>
              <p>
                Find collectibles and review your order history.
              </p>
            </div>

            <div class="feature-card">
              <h3>NEED A HAND?</h3>
              <p>
                Learn about payment, delivery, and packaging.
              </p>

              <button class="btn" data-page="faq">
                READ FAQ
              </button>
            </div>

          </div>
        </div>
      </div>

    </section>
  `;
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

function addToCart(id, qty = state.quantity, afterLogin = 'cart') {
  const product = find(id);
  if (!product) return;

  if (!isLoggedIn()) {
    const optionSelect = document.querySelector('#option');
    if (optionSelect) state.option = optionSelect.value;

    state.pendingAction = {
      id: product.id,
      qty: Math.max(1, Number(qty) || 1),
      option: product.options ? state.option : '',
      afterLogin
    };

    state.pendingPage = afterLogin;
    state.page = 'login';
    closeDrawer();
    render();
    notify('Please log in or register to add items to your cart.');
    return;
  }

  const option = product.options ? state.option : '';

  const existing = state.cart.find(item =>
    item.id === product.id && item.option === option
  );

  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      ...product,
      qty,
      option
    });
  }

  saveUserData();
  notify('Added to cart: ' + product.name);
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

              <img
                src="${asset(item.image)}"
                alt="${item.name}"
              >

              <div>
                <h3>${item.name}</h3>

                <p>
                  ${item.option ? 'Option: ' + item.option : ''}
                </p>

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
          <button class="btn" data-page="onhand">
            BROWSE ITEMS
          </button>
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
          <input
            type="radio"
            name="payment"
            value="50% Online + 50% COD"
            checked
          >
          <span>
            <strong>50% Online + 50% COD</strong>
            <small>Half online, remaining balance on delivery</small>
          </span>
        </label>

        <div class="subtotal">
          <span>TOTAL</span>
          <strong>${money(total)}</strong>
        </div>

        <button class="btn full" type="submit">
          PLACE DEMO ORDER
        </button>

        <p class="muted">
          Demo only. No real payment will be processed.
        </p>

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
        <p class="eyebrow">SAVED FOR LATER</p>
        <h1 class="section-title">YOUR WISHLIST</h1>
      </div>

      ${list.length
        ? `<div class="product-grid">${list.map(card).join('')}</div>`
        : `
          <div class="empty">
            <h2>No favorites saved yet.</h2>
            <button class="btn" data-page="onhand">Explore items</button>
          </div>
        `}
    `,
    'cart'
  );
}

/* -------------------- PROFILE -------------------- */

function profile() {
  const session = getCurrentUser();

  return shell(
    'PROFILE',
    `
      <div class="profile-avatar">♙</div>

      <h1 class="profile-name">${session.name}</h1>

      <div class="profile-data">

        <div>
          <strong>FULL NAME</strong>
          <span>${session.name}</span>
        </div>

        <div>
          <strong>EMAIL</strong>
          <span>${session.email}</span>
        </div>

        <div>
          <strong>ORDERS</strong>
          <span>${state.orders.length} demo order(s)</span>
        </div>

      </div>

      <div class="profile-links">
        <button data-page="favorites">
          FAVORITES <span>♡</span>
        </button>

        <button data-page="history">
          TRANSACTION HISTORY <span>→</span>
        </button>

        <button data-page="logout">
          LOG OUT <span>→</span>
        </button>
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
        <p class="eyebrow">YOUR PAST ORDERS</p>
        <h1 class="section-title">COLLECTION JOURNEY</h1>
      </div>

      ${state.orders.length
        ? state.orders.map(order => `
          <article class="history-card">

            <div class="history-top">
              <strong class="history-id">${order.id}</strong>

              <span class="status ${order.status.toLowerCase()}">
                ${order.status.toUpperCase()}
              </span>
            </div>

            <div class="history-date">${order.date}</div>

            <h3>${order.name}</h3>

            <div class="history-price">${money(order.price)}</div>

          </article>
        `).join('')
        : `
          <div class="empty">
            <h2>No orders yet.</h2>
            <button class="btn" data-page="onhand">Browse items</button>
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
      'Choose a payment option during checkout. This demo does not collect real payments.'
    ],
    [
      'Delivery Methods',
      'Delivery arrangements and fees depend on the courier and destination.'
    ],
    [
      'Track Order',
      'Your demo order statuses are available in Transaction History.'
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
        <p class="eyebrow">NEED A HAND?</p>
        <h1 class="section-title">FREQUENTLY ASKED QUESTIONS</h1>
      </div>

      ${items.map((item, index) => `
        <div class="faq-item">
          <button class="faq-question" data-faq="${index}">
            ${item[0]}
            <span>${state.faqOpen === index ? '−' : '+'}</span>
          </button>

          ${state.faqOpen === index
            ? `<div class="faq-answer">${item[1]}</div>`
            : ''}
        </div>
      `).join('')}
    `,
    'home'
  );
}

/* -------------------- ABOUT US -------------------- */

function about() {
  return shell(
    'ABOUT US',
    `
      <div class="about-rule"></div>

      <h1 class="section-title" style="text-align:center">
        ABOUT GENGA
      </h1>

      <p class="about-copy">
        Genga is an online shop concept for anime fans and collectors
        in the Philippines. Discover figures, plushies, keychains,
        and other collectibles while growing your collection.
      </p>

      <div class="about-rule"></div>
    `,
    'home'
  );
}

/* -------------------- LOGIN PAGE -------------------- */

function login() {
  return shell(
    'LOGIN',
    `
      <section class="auth-section">

        <p class="eyebrow">WELCOME BACK, COLLECTOR</p>

        <h1 class="auth-title">LOGIN</h1>

        <p class="auth-description">
          Sign in to add items to your cart, save favorites, and manage your orders.
        </p>

        <form class="auth-form" id="loginForm">

          <div class="field">
            <label for="loginEmail">Email address</label>
            <input
              id="loginEmail"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="you@example.com"
              required
            >
          </div>

          <div class="field">
            <label for="loginPassword">Password</label>
            <input
              id="loginPassword"
              name="password"
              type="password"
              autocomplete="current-password"
              placeholder="Enter your password"
              required
            >
          </div>

          <p class="auth-error" id="loginError"></p>

          <button class="btn" type="submit">LOGIN</button>

        </form>

        <div class="auth-switch">
          Don't have an account?
          <button data-page="register">Register here</button>
        </div>

      </section>
    `,
    'login'
  );
}

/* -------------------- REGISTER PAGE -------------------- */

function register() {
  return shell(
    'REGISTER',
    `
      <section class="auth-section">

        <p class="eyebrow">JOIN THE COLLECTION</p>

        <h1 class="auth-title">CREATE ACCOUNT</h1>

        <p class="auth-description">
          Create an account to add items to your cart, save favorites, and manage your orders.
        </p>

        <form class="auth-form" id="registerForm">

          <div class="field">
            <label for="regName">Full name</label>
            <input
              id="regName"
              name="name"
              type="text"
              autocomplete="name"
              placeholder="Your full name"
              required
            >
          </div>

          <div class="field">
            <label for="regEmail">Email address</label>
            <input
              id="regEmail"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="you@example.com"
              required
            >
          </div>

          <div class="field">
            <label for="regPassword">Password</label>
            <input
              id="regPassword"
              name="password"
              type="password"
              autocomplete="new-password"
              minlength="8"
              placeholder="At least 8 characters"
              required
            >
          </div>

          <div class="field">
            <label for="regConfirm">Confirm password</label>
            <input
              id="regConfirm"
              name="confirmPassword"
              type="password"
              autocomplete="new-password"
              minlength="8"
              placeholder="Re-enter your password"
              required
            >
          </div>

          <p class="auth-error" id="registerError"></p>

          <button class="btn" type="submit">
            CREATE ACCOUNT
          </button>

        </form>

        <div class="auth-switch">
          Already registered?
          <button data-page="login">Login here</button>
        </div>

      </section>
    `,
    'login'
  );
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
  state.page = 'login';

  closeDrawer();
  render();

  notify('You have logged out successfully.');
}

/* -------------------- RENDER PAGES -------------------- */

function render() {
  // Allow public browsing. Protect only account and purchase pages.
  if (ACCOUNT_PAGES.includes(state.page) && !isLoggedIn()) {
    state.pendingPage = state.page;
    state.page = 'login';
  }

  // Logged-in users should not see login/register pages.
  if (['login', 'register'].includes(state.page) && isLoggedIn()) {
    state.page = 'home';
  }

  const pages = {
    home,
    onhand: () => collection('onhand'),
    preorder: () => collection('preorder'),
    product: () => productDetail(state.selected),
    cart,
    checkout,
    favorites,
    profile,
    history,
    faq,
    about,
    login,
    register
  };

  app.innerHTML = (pages[state.page] || login)();

  // Visitors can browse public pages. Account/purchase pages stay hidden
  // until login; login/register disappear once the user is authenticated.
  document.querySelectorAll('#drawer [data-page]').forEach(button => {
    const page = button.dataset.page;
    const loggedIn = isLoggedIn();
    const protectedPage = ACCOUNT_PAGES.includes(page);
    const authPage = ['login', 'register'].includes(page);

    if (page === 'logout') {
      button.hidden = !loggedIn;
    } else if (protectedPage) {
      button.hidden = !loggedIn;
    } else if (authPage) {
      button.hidden = loggedIn;
    } else {
      button.hidden = false;
    }
  });

  window.scrollTo({ top: 0, behavior: 'auto' });
}

/* -------------------- MENU EVENTS -------------------- */

if (drawer && scrim) {
  document.querySelector('#menuToggle').addEventListener('click', () => {
    drawer.classList.add('open');
    scrim.classList.add('show');
    drawer.setAttribute('aria-hidden', 'false');

    document.querySelector('#menuToggle')
      .setAttribute('aria-expanded', 'true');
  });

  document.querySelector('#closeMenu')
    .addEventListener('click', closeDrawer);

  scrim.addEventListener('click', closeDrawer);
}

/* -------------------- CLICK EVENTS -------------------- */

document.addEventListener('click', event => {
  const target = event.target.closest(
    'button, [data-product], a[data-page]'
  );

  if (!target) return;

  if (target.dataset.page) {
    event.preventDefault();
    go(target.dataset.page);
    return;
  }

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

  if (target.dataset.product) {
    state.selected = Number(target.dataset.product);
    state.quantity = 1;
    state.previous = state.page;
    go('product');
    return;
  }

  if (target.dataset.fav) {
    if (!isLoggedIn()) {
      state.pendingPage = 'favorites';
      state.page = 'login';
      closeDrawer();
      render();
      notify('Please log in or create an account to save favorites.');
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

  if (target.dataset.add) {
    if (target.hasAttribute('data-detail-add')) {
      const option = document.querySelector('#option');

      if (option) state.option = option.value;
    }

    addToCart(target.dataset.add);
    return;
  }

  if (target.dataset.order) {
    addToCart(target.dataset.order, state.quantity, 'checkout');
    if (isLoggedIn()) go('checkout');
    return;
  }

  if (target.dataset.qty) {
    state.quantity = Math.max(
      1,
      state.quantity + (target.dataset.qty === '+' ? 1 : -1)
    );

    const display = document.querySelector('#qtyValue');

    if (display) display.textContent = state.quantity;

    return;
  }

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

  if (target.dataset.faq !== undefined) {
    state.faqOpen =
      state.faqOpen === Number(target.dataset.faq)
        ? -1
        : Number(target.dataset.faq);

    render();
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
    password
  });

  localStorage.setItem(
    'gengaDemoUsers',
    JSON.stringify(users)
  );

  notify('Account created! Please log in.');

  state.page = 'login';
  render();
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
    error.textContent = 'Incorrect email or password.';
    error.style.display = 'block';
    return;
  }

  localStorage.setItem(
    'gengaDemoSession',
    JSON.stringify({
      name: user.name,
      email: user.email
    })
  );

  loadUserData();

  state.search = '';
  const pendingAction = state.pendingAction;
  const nextPage = state.pendingPage || 'home';
  state.pendingAction = null;
  state.pendingPage = null;

  if (pendingAction) {
    state.option = pendingAction.option || state.option;
    addToCart(pendingAction.id, pendingAction.qty);
    state.page = pendingAction.afterLogin || 'cart';
  } else {
    state.page = nextPage;
  }

  render();
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
    status: 'Processing',
    customer: session.email,
    customerName: data.get('name'),
    phone: data.get('phone'),
    address: data.get('address'),
    payment: data.get('payment')
  });

  state.cart = [];

  saveUserData();

  state.page = 'history';
  render();

  notify('Demo order placed successfully!');
});

/* -------------------- INITIALIZATION -------------------- */

state.faqOpen = 0;

if (isLoggedIn()) {
  loadUserData();
  state.page = 'home';
} else {
  // Guests can browse the store without signing in.
  state.page = 'home';
}

render();
