const products = [
  {
    id: 1,
    name: 'One Piece Luffy Straw Hat Plush',
    price: 350,
    image: 'luffy-plush.jpg',
    badge: 'Ready to ship',
    type: 'onhand',
    desc: 'A soft Luffy plush wearing his iconic straw hat.'
  },
  {
    id: 2,
    name: 'Jujutsu Kaisen Mini Plush',
    price: 420,
    image: 'jjk-plush.jpg',
    badge: 'Limited stock',
    type: 'onhand',
    desc: 'A mini plush collection inspired by Jujutsu Kaisen.'
  },
  {
    id: 3,
    name: 'Anime Mascot Plush Collection',
    price: 450,
    image: 'anime-mascots.jpg',
    badge: 'On hand',
    type: 'onhand',
    desc: 'A colorful assortment of anime mascot plushies.'
  },
  {
    id: 4,
    name: 'Haikyuu Team Mini Plush Set',
    price: 450,
    image: 'haikyuu-plush.jpg',
    badge: 'New on hand',
    type: 'onhand',
    desc: 'Bring your favorite volleyball team home.'
  },
  {
    id: 5,
    name: 'Anime Character Plush Keychain',
    price: 180,
    image: 'keychains.jpg',
    badge: 'Ready to ship',
    type: 'onhand',
    desc: 'Small character plush keychains for collectors.'
  },
  {
    id: 6,
    name: 'One Piece Plush Pair',
    price: 850,
    image: 'one-piece-pair.jpg',
    badge: 'Limited pair',
    type: 'onhand',
    desc: 'A cute pair of One Piece plushies.'
  },
  {
    id: 7,
    name: 'Banana Fish Ash & Eiji Mini Plush',
    price: 550,
    image: 'ash-eiji.jpg',
    badge: 'New on hand',
    type: 'onhand',
    desc: 'Ash and Eiji matching mini plush pair.',
    options: ['Ash', 'Eiji', 'Pair']
  },
  {
    id: 8,
    name: 'Sanji Portrait of Pirates Figure',
    price: 1850,
    image: 'sanji-portrait.jpg',
    badge: 'ETA: 8–12 weeks',
    type: 'preorder',
    desc: 'A detailed Sanji collectible figure.'
  },
  {
    id: 9,
    name: 'Sanji Hell Memories Statue',
    price: 3450,
    image: 'sanji-hell.jpg',
    badge: 'Pre-order',
    type: 'preorder',
    desc: 'A dramatic Sanji statue for your display shelf.'
  },
  {
    id: 10,
    name: 'Portgas D. Ace Flame Statue',
    price: 3200,
    image: 'ace-statue.jpg',
    badge: 'Pre-order',
    type: 'preorder',
    desc: 'A flame-effect Ace statue for One Piece fans.'
  }
];

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
  favorites: [1],
  orders: [
    {
      id: 'GENGA-260014',
      date: 'October 7, 2026',
      name: 'One Piece Luffy Plush',
      price: 350,
      status: 'Delivered'
    },
    {
      id: 'GENGA-260009',
      date: 'September 18, 2026',
      name: 'Anime Mascot Plush Collection',
      price: 900,
      status: 'Shipped'
    },
    {
      id: 'GENGA-632461',
      date: 'Today',
      name: 'Sanji Hell Memories Statue, Sanji Portrait of Pirates Figure',
      price: 5300,
      status: 'Processing'
    }
  ]
};

// DEMO AUTHENTICATION HELPERS
// For production, replace this with a secure backend authentication provider.
function getCurrentUser() {
  try {
    const user = JSON.parse(localStorage.getItem('gengaDemoSession') || 'null');
    return user && user.email ? user : null;
  } catch {
    return null;
  }
}

function isLoggedIn() {
  return Boolean(getCurrentUser());
}

const publicPages = new Set(['login', 'register']);

if (!isLoggedIn()) state.page = 'login';

const app = document.querySelector('#app');
const drawer = document.querySelector('#drawer');
const scrim = document.querySelector('#scrim');
const toastEl = document.querySelector('#toast');

const money = n =>
  '₱' + Number(n).toLocaleString('en-PH');

// Images are expected beside index.html, app.js, and styles.css.
const asset = filename => filename;

const find = id =>
  products.find(p => p.id === Number(id));

function notify(message) {
  toastEl.textContent = message;
  toastEl.classList.add('show');

  clearTimeout(notify.timer);

  notify.timer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2200);
}

function header(title, right = 'home') {
  return `
    <div class="page-header">
      <button class="icon-btn" data-back aria-label="Back">
        ‹
      </button>

      <h2>${title}</h2>

      <button
        class="icon-btn"
        data-page="${right}"
        aria-label="${right === 'cart' ? 'Cart' : 'Home'}"
      >
        ${right === 'cart' ? '🛒' : '⌂'}
      </button>
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

function card(product) {
  const isFavorite =
    state.favorites.includes(product.id);

  return `
    <article class="product-card">

      <img
        class="product-image"
        data-product="${product.id}"
        src="${asset(product.image)}"
        alt="${product.name}"
      >

      <button
        class="heart ${isFavorite ? 'active' : ''}"
        data-fav="${product.id}"
        aria-label="Toggle favorite"
      >
        ${isFavorite ? '♥' : '♡'}
      </button>

      <div class="product-body">

        <span class="pill">
          ${product.badge}
        </span>

        <h3 class="product-name">
          ${product.name}
        </h3>

        <div class="price">
          ${money(product.price)}
        </div>

        <div class="product-actions">
          <button
            class="btn"
            data-product="${product.id}"
          >
            View item
          </button>

          <button
            class="btn light"
            data-add="${product.id}"
          >
            Add to cart
          </button>
        </div>

      </div>
    </article>
  `;
}

function collection(type) {
  let list = products.filter(product =>
    product.type === type &&
    product.name.toLowerCase().includes(
      state.search.toLowerCase()
    )
  );

  if (state.price === 'low') {
    list = list.filter(p => p.price < 500);
  }

  if (state.price === 'mid') {
    list = list.filter(
      p => p.price >= 500 && p.price < 2000
    );
  }

  if (state.price === 'high') {
    list = list.filter(p => p.price >= 2000);
  }

  if (state.sort === 'price-up') {
    list.sort((a, b) => a.price - b.price);
  }

  if (state.sort === 'price-down') {
    list.sort((a, b) => b.price - a.price);
  }

  if (state.sort === 'name') {
    list.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  const isOnHand = type === 'onhand';

  return shell(
    isOnHand ? 'ON-HAND ITEMS' : 'PRE-ORDER',
    `
      <div class="section-head">
        <p class="eyebrow">
          ${isOnHand
            ? 'READY STOCK · SHIPS SOON'
            : 'RESERVE YOUR NEXT GRAIL'}
        </p>

        <h1 class="section-title">
          ${isOnHand
            ? 'FIND IT. LOVE IT. GET IT.'
            : 'COMING TO YOUR SHELF'}
        </h1>

        <p class="intro">
          ${isOnHand
            ? 'These collectibles are already with us and ready for their new home.'
            : 'Secure incoming collectibles before they sell out. ETA is shown on every item.'}
        </p>
      </div>

      <div class="collection-panel">

        <div class="search-row">
          <input
            class="search"
            id="search"
            value="${state.search}"
            placeholder="⌕ Search the collection"
            aria-label="Search the collection"
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
          ${
            list.map(card).join('') ||
            '<div class="empty" style="grid-column:1/-1">No collectibles found. Try another search.</div>'
          }
        </div>

      </div>
    `,
    'cart'
  );
}

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
          <img
            src="${asset('sanji-portrait.jpg')}"
            alt="Featured anime collectible"
          >
        </div>

      </div>

      <div class="cream-page">
        <div class="content">

          <div class="section-head">
            <p class="eyebrow">
              FRESH FINDS FOR YOUR SHELF
            </p>

            <h2 class="section-title">
              PRE-ORDER NOW!
            </h2>
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
                Clear product details, order history,
                and delivery updates in one place.
              </p>
            </div>

            <div class="feature-card">
              <h3>NEED A HAND?</h3>
              <p>
                Visit our FAQ for payment, delivery,
                order tracking, and packaging information.
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

          <span class="pill">
            ${product.badge}
          </span>

          <h1>${product.name}</h1>

          <div class="price">
            ${money(product.price)}
          </div>

          <p class="intro">
            ${product.desc}
          </p>

          ${
            product.options
              ? `
                <div class="field" style="margin:24px 0">
                  <label for="option">Choose option</label>

                  <select id="option">
                    ${product.options.map(option => `
                      <option
                        ${option === state.option ? 'selected' : ''}
                      >
                        ${option}
                      </option>
                    `).join('')}
                  </select>
                </div>
              `
              : ''
          }

          <div class="detail-buttons">

            <div class="qty">
              <button data-qty="-">−</button>

              <strong id="qtyValue">
                ${state.quantity}
              </strong>

              <button data-qty="+">+</button>
            </div>

            <button
              class="btn"
              data-add="${product.id}"
              data-detail-add
            >
              ADD TO CART
            </button>

            <button
              class="btn full light"
              data-order="${product.id}"
            >
              ORDER NOW
            </button>

          </div>
        </div>
      </div>
    `,
    'cart'
  );
}

function cart() {
  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const items = state.cart.map(item => `
    <article class="cart-item">

      <img
        src="${asset(item.image)}"
        alt="${item.name}"
      >

      <div>
        <h3>${item.name}</h3>

        <div>
          ${
            item.option
              ? 'Option: ' + item.option
              : ''
          }
        </div>

        <div class="price">
          ${money(item.price)}
        </div>

        <div class="qty small">
          <button data-cartqty="-${item.id}">−</button>
          <strong>${item.qty}</strong>
          <button data-cartqty="+${item.id}">+</button>
        </div>
      </div>

      <button
        class="remove"
        data-remove="${item.id}"
      >
        Remove
      </button>

    </article>
  `).join('');

  return shell(
    'YOUR CART',
    `
      <div class="section-head">
        <p class="eyebrow">YOUR NEXT COLLECTION</p>
        <h1 class="section-title">CART</h1>
      </div>

      ${
        state.cart.length
          ? `
            <div class="cart-list">
              ${items}
            </div>

            <div class="subtotal">
              <span>SUBTOTAL</span>
              <strong>${money(total)}</strong>
            </div>

            <button class="btn full" data-page="checkout">
              PROCEED TO CHECKOUT
            </button>
          `
          : `
            <div class="empty">
              <h2>Your cart is waiting for a new grail.</h2>
              <p>Browse our collectibles and add something you love.</p>
              <button class="btn" data-page="onhand">
                BROWSE ITEMS
              </button>
            </div>
          `
      }
    `,
    'home'
  );
}

function checkout() {
  if (!state.cart.length) {
    return shell(
      'CHECKOUT',
      `
        <div class="empty">
          <h2>Your cart is empty.</h2>
          <button class="btn" data-page="onhand">
            Browse items
          </button>
        </div>
      `
    );
  }

  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return shell(
    'CHECKOUT',
    `
      <div class="section-head">
        <p class="eyebrow">SAFE & SECURE</p>
        <h1 class="section-title">CHECKOUT</h1>
      </div>

      <form id="checkoutForm">

        <div class="info-box">
          <strong>DELIVER TO</strong>
          <div style="margin-top:10px">
            Add your delivery details below before placing your order.
          </div>
        </div>

        <div class="form-grid" style="margin:24px 0">

          <div class="field">
            <label>Full name</label>
            <input required name="name" placeholder="Your full name">
          </div>

          <div class="field">
            <label>Contact number</label>
            <input
              required
              name="phone"
              inputmode="tel"
              placeholder="09xx xxx xxxx"
            >
          </div>

          <div class="field full-field">
            <label>Delivery address</label>
            <input
              required
              name="address"
              placeholder="House no., street, barangay, city"
            >
          </div>

        </div>

        <h2 style="font:28px var(--display);color:var(--teal)">
          PAYMENT METHOD
        </h2>

        <label class="payment-option">
          <input type="radio" name="payment" value="GCash" required>
          <span>
            <strong>GCash</strong>
            <small>Full payment via verified GCash account</small>
          </span>
        </label>

        <label class="payment-option">
          <input type="radio" name="payment" value="Bank Transfer">
          <span>
            <strong>Bank Transfer</strong>
            <small>Full payment via verified bank account</small>
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
            <small>Pay half now and the balance upon delivery</small>
          </span>
        </label>

        <div class="subtotal">
          <span>PAY ONLINE NOW</span>
          <strong id="payNow">${money(total / 2)}</strong>
        </div>

        <p style="text-align:right">
          Balance upon delivery:
          <strong>${money(total / 2)}</strong>
        </p>

        <button class="btn full" type="submit">
          PLACE ORDER
        </button>

        <p class="muted">
          Demo checkout only: no real payment will be collected.
        </p>

      </form>
    `
  );
}

function favorites() {
  const list = products.filter(product =>
    state.favorites.includes(product.id)
  );

  return shell(
    'FAVORITES',
    `
      <div class="section-head">
        <p class="eyebrow">SAVED FOR LATER</p>
        <h1 class="section-title">YOUR COLLECTION WISHLIST</h1>
      </div>

      ${
        list.length
          ? `<div class="product-grid">${list.map(card).join('')}</div>`
          : `
            <div class="empty">
              <h2>No favorites saved yet.</h2>
              <button class="btn" data-page="onhand">
                Explore items
              </button>
            </div>
          `
      }
    `,
    'cart'
  );
}

function profile() {
  const session = getCurrentUser();
  const customerName = session ? session.name : 'Guest Collector';
  const customerEmail = session ? session.email : 'Not logged in';

  return shell(
    'PROFILE',
    `
      <div class="profile-avatar">♙</div>

      <h1 class="profile-name">${customerName}</h1>

      <div class="profile-data">
        <div>
          <strong>EMAIL</strong>
          <span>${customerEmail}</span>
        </div>

        <div>
          <strong>CONTACT NUMBER</strong>
          <span>Not added yet</span>
        </div>

        <div>
          <strong>ADDRESS</strong>
          <span>Add your address at checkout</span>
        </div>
      </div>

      <div class="profile-links">
        <button data-page="favorites">
          FAVORITES <span>♡</span>
        </button>

        <button data-page="history">
          TRANSACTION HISTORY <span>→</span>
        </button>

        <button data-page="history">
          TRACK ORDER <span>→</span>
        </button>

        <button data-page="logout">
          LOG OUT <span>↗</span>
        </button>
      </div>

      <p class="muted">
        Demo profile. Real account details require a backend.
      </p>
    `,
    'home'
  );
}

function history() {
  return shell(
    'TRANSACTION HISTORY',
    `
      <div class="section-head">
        <p class="eyebrow">YOUR PAST ORDERS</p>
        <h1 class="section-title">COLLECTION JOURNEY</h1>
      </div>

      ${
        state.orders.map(order => `
          <article class="history-card">

            <div class="history-top">
              <strong class="history-id">${order.id}</strong>

              <span class="status ${order.status.toLowerCase()}">
                ${order.status.toUpperCase()}
              </span>
            </div>

            <div class="history-date">
              ${order.date}
            </div>

            <h3>${order.name}</h3>

            <div class="history-price">
              ${money(order.price)}
            </div>

          </article>
        `).join('')
      }
    `,
    'home'
  );
}

function faq() {
  const items = [
    [
      'Payment Methods',
      'Pay securely through GCash, bank transfer, or our 50% online payment + 50% cash-on-delivery option. Payment instructions appear at checkout.'
    ],
    [
      'Delivery Methods',
      'Delivery is arranged through available local couriers. Delivery fees and estimated arrival may vary depending on your location and the item.'
    ],
    [
      'Track Order',
      'Open your profile and choose Transaction History to view the sample status of your orders. For a live store, connect order tracking to your fulfilment system.'
    ],
    [
      'Packaging',
      'Items are packed carefully with protective materials to help keep collectibles safe during transit.'
    ]
  ];

  return shell(
    'FAQ',
    `
      <div class="section-head">
        <p class="eyebrow">NEED A HAND?</p>
        <h1 class="section-title">FREQUENTLY ASKED QUESTIONS</h1>
      </div>

      ${
        items.map((item, index) => `
          <div class="faq-item">

            <button class="faq-question" data-faq="${index}">
              ${item[0]}
              <span>${state.faqOpen === index ? '−' : '+'}</span>
            </button>

            ${
              state.faqOpen === index
                ? `<div class="faq-answer">${item[1]}</div>`
                : ''
            }

          </div>
        `).join('')
      }
    `,
    'home'
  );
}

function about() {
  return shell(
    'ABOUT US',
    `
      <div class="about-rule"></div>

      <h1 class="section-title" style="text-align:center">
        ABOUT US
      </h1>

      <p class="about-copy">
        Genga is an online shop made for anime fans and collectors
        in the Philippines. We offer quality collectibles and
        merchandise such as figures, plushies, acrylic stands,
        keychains, and more. Our goal is to make hard-to-find anime
        merchandise easier to access while giving fans a convenient
        way to grow their collection.
      </p>

      <div class="about-rule"></div>
    `,
    'home'
  );
}
function login() {
  return shell(
    'LOGIN',
    `
      <section class="auth-section">
        <p class="eyebrow">WELCOME BACK, COLLECTOR</p>

        <h1 class="auth-title">LOGIN</h1>

        <p class="auth-description">
          Sign in to access your GENGA account.
        </p>

        <form class="auth-form" id="loginForm">

          <div class="field">
            <label for="loginEmail">Email address</label>
            <input
              id="loginEmail"
              name="email"
              type="email"
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
              placeholder="Enter your password"
              required
            >
          </div>

          <p class="auth-error" id="loginError"></p>

          <button class="btn" type="submit">
            LOGIN
          </button>

        </form>

        <div class="auth-switch">
          Don't have an account?
          <button data-page="register">Register here</button>
        </div>
      </section>
    `,
    'home'
  );
}

function register() {
  return shell(
    'REGISTER',
    `
      <section class="auth-section">
        <p class="eyebrow">JOIN THE COLLECTION</p>

        <h1 class="auth-title">CREATE ACCOUNT</h1>

        <p class="auth-description">
          Register to start building your collection.
        </p>

        <form class="auth-form" id="registerForm">

          <div class="field">
            <label for="regName">Full name</label>
            <input
              id="regName"
              name="name"
              type="text"
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
    'home'
  );
}

function updateAuthUI() {
  const loggedIn = isLoggedIn();

  document.querySelectorAll('[data-auth-only]').forEach(element => {
    element.hidden = !loggedIn;
  });

  document.querySelectorAll('[data-guest-only]').forEach(element => {
    element.hidden = loggedIn;
  });

  const profileButton = document.querySelector('.profile-shortcut');
  if (profileButton) {
    profileButton.dataset.page = loggedIn ? 'profile' : 'login';
    profileButton.setAttribute(
      'aria-label',
      loggedIn ? 'My account' : 'Login'
    );
  }

  const menuToggle = document.querySelector('#menuToggle');
  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', drawer.classList.contains('open') ? 'true' : 'false');
  }
}

function render() {
  // Only Login and Register are accessible without a session.
  if (!publicPages.has(state.page) && !isLoggedIn()) {
    state.page = 'login';
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
  updateAuthUI();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function go(page) {
  if (page === 'logout') {
    logoutDemo();
    return;
  }

  if (!publicPages.has(page) && !isLoggedIn()) {
    state.page = 'login';
    closeDrawer();
    render();
    notify('Please log in or create an account first.');
    return;
  }

  if (page === 'product') {
    state.previous = state.page;
  }

  state.page = page;
  closeDrawer();
  render();
}

function addToCart(id, qty = state.quantity) {
  const product = find(id);

  if (!product) return;

  const option = product.options ? state.option : '';

  const existing = state.cart.find(item =>
    item.id === product.id &&
    item.option === option
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

  notify(`${product.name} added to cart`);
}

function closeDrawer() {
  drawer.classList.remove('open');
  scrim.classList.remove('show');
  drawer.setAttribute('aria-hidden', 'true');
  const menuToggle = document.querySelector('#menuToggle');
  if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
}

/* Navigation menu */

document.querySelector('#menuToggle').addEventListener('click', () => {
  drawer.classList.add('open');
  scrim.classList.add('show');
  drawer.setAttribute('aria-hidden', 'false');
  document.querySelector('#menuToggle').setAttribute('aria-expanded', 'true');
});

document.querySelector('#closeMenu').addEventListener('click', closeDrawer);
scrim.addEventListener('click', closeDrawer);

/* All page and product interactions */

document.addEventListener('click', event => {
  const target = event.target.closest('button, a[data-page], [data-product]');

  if (!target) return;

  if (target.dataset.page) {
  if (target.dataset.page === 'logout') {
    logoutDemo();
    return;
  }

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
    go('product');
    return;
  }

  if (target.dataset.fav) {
    const id = Number(target.dataset.fav);

    state.favorites = state.favorites.includes(id)
      ? state.favorites.filter(item => item !== id)
      : [...state.favorites, id];

    notify(
      state.favorites.includes(id)
        ? 'Saved to favorites'
        : 'Removed from favorites'
    );

    render();
    return;
  }

  if (target.dataset.add) {
    if (
      target.hasAttribute('data-detail-add') &&
      document.querySelector('#option')
    ) {
      state.option = document.querySelector('#option').value;
    }

    addToCart(target.dataset.add);
    return;
  }

  if (target.dataset.order) {
    addToCart(target.dataset.order);
    go('checkout');
    return;
  }

  if (target.dataset.qty) {
    state.quantity = Math.max(
      1,
      state.quantity + (target.dataset.qty === '+' ? 1 : -1)
    );

    const quantityDisplay = document.querySelector('#qtyValue');

    if (quantityDisplay) {
      quantityDisplay.textContent = state.quantity;
    }

    return;
  }

  if (target.dataset.remove) {
    state.cart = state.cart.filter(
      item => item.id !== Number(target.dataset.remove)
    );

    render();
    return;
  }

  if (target.dataset.cartqty) {
    const sign = target.dataset.cartqty[0];
    const id = Number(target.dataset.cartqty.slice(1));

    const item = state.cart.find(item => item.id === id);

    if (item) {
      item.qty += sign === '+' ? 1 : -1;

      if (item.qty <= 0) {
        state.cart = state.cart.filter(
          cartItem => cartItem !== item
        );
      }
    }

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

/* Filters and product options */

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

/* Product search */

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

/* Demo checkout */

document.addEventListener('submit', event => {
  if (event.target.id !== 'checkoutForm') return;

  event.preventDefault();

  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const orderName = state.cart
    .map(item => `${item.name} ×${item.qty}`)
    .join(', ');

  state.orders.unshift({
    id: 'GENGA-' + String(Date.now()).slice(-6),

    date: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),

    name: orderName,
    price: total,
    status: 'Processing'
  });

  state.cart = [];
  state.page = 'history';

  render();

  notify('Demo order placed successfully');
});
// DEMO AUTHENTICATION ONLY
// Do not use localStorage for real customer passwords.

document.addEventListener('submit', function(event) {
  const form = event.target;

  if (form.id === 'registerForm') {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get('name').trim();
    const email = data.get('email').trim().toLowerCase();
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');

    const error = document.querySelector('#registerError');

    if (password.length < 8) {
      error.textContent =
        'Password must contain at least 8 characters.';
      error.style.display = 'block';
      return;
    }

    if (password !== confirmPassword) {
      error.textContent = 'Passwords do not match.';
      error.style.display = 'block';
      return;
    }

    let users;
    try {
      users = JSON.parse(localStorage.getItem('gengaDemoUsers') || '[]');
      if (!Array.isArray(users)) users = [];
    } catch {
      users = [];
    }

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

    notify('Registration successful! Please log in.');

    go('login');
    return;
  }

  if (form.id === 'loginForm') {
    event.preventDefault();

    const data = new FormData(form);
    const email = data.get('email').trim().toLowerCase();
    const password = data.get('password');

    const error = document.querySelector('#loginError');

    let users;
    try {
      users = JSON.parse(localStorage.getItem('gengaDemoUsers') || '[]');
      if (!Array.isArray(users)) users = [];
    } catch {
      users = [];
    }

    const user = users.find(user =>
      user.email === email &&
      user.password === password
    );

    if (!user) {
      error.textContent =
        'Incorrect email or password.';
      error.style.display = 'block';
      return;
    }

    // Store only basic demo session information.
    localStorage.setItem(
      'gengaDemoSession',
      JSON.stringify({
        name: user.name,
        email: user.email
      })
    );

    notify('Welcome back, ' + user.name + '!');

    go('home');
  }
});

// Demo logout

function logoutDemo() {
  localStorage.removeItem('gengaDemoSession');
  state.cart = [];
  state.favorites = [];
  state.page = 'login';
  closeDrawer();
  render();
  notify('You have logged out successfully.');
}
/* Start the website */

state.faqOpen = 0;

render();