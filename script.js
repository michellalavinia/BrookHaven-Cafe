// ─────────────────────────────────────────────────────────────────────
// Brew Haven — JavaScript
// Converted from React state/JSX into vanilla DOM rendering + handlers.
// ─────────────────────────────────────────────────────────────────────

// ── Data ──────────────────────────────────────────────────────────────

const menuItems = [
  {
    id: 1,
    name: "Signature Latte",
    description: "Velvety espresso with house-crafted oat milk foam and a hint of vanilla bean.",
    price: "Rp. 56.000",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1680381792123-676305af82d8?w=480&h=380&fit=crop&auto=format",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Cold Brew Reserve",
    description: "Steeped for 20 hours in filtered water, served over hand-cut crystal ice.",
    price: "Rp. 78.000",
    rating: 4.8,
    reviews: 218,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=480&h=380&fit=crop&auto=format",
    tag: "New",
  },
  {
    id: 3,
    name: "Pour Over Single Origin",
    description: "Ethiopian Yirgacheffe — bright florals, stone fruit, and a clean lingering finish.",
    price: "Rp. 108.000",
    rating: 4.9,
    reviews: 174,
    image: "https://images.unsplash.com/photo-1625021659159-f63f546d74a7?w=480&h=380&fit=crop&auto=format",
    tag: "Specialty",
  },
  {
    id: 4,
    name: "Cortado Blanco",
    description: "Equal parts ristretto and warm textured milk — bold, smooth, unapologetically short.",
    price: "Rp. 97.000",
    rating: 4.7,
    reviews: 196,
    image: "https://images.unsplash.com/photo-1770494347810-5aa9e689f13e?w=480&h=380&fit=crop&auto=format",
    tag: "Classic",
  },
];

const reviewsData = [
  {
    id: 1,
    name: "Amara Osei",
    role: "Food Writer",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    quote: "BrookHaven has ruined every other coffee shop for me. The pour over alone is worth crossing the city for — floral, precise, and presented with genuine care.",
  },
  {
    id: 2,
    name: "James Whitfield",
    role: "Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    quote: "I come here every morning before the studio. The space is calm, the music is right, and the signature latte is the best thing I put in my body all day.",
  },
  {
    id: 3,
    name: "Sofia Mendez",
    role: "Novelist",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    quote: "I wrote three chapters here in one sitting. The atmosphere isn't precious — it's warm, honest, and somehow always exactly what you need.",
  },
];

const features = [
  {
    icon: "leaf",
    title: "Freshly Roasted Beans",
    desc: "Single-origin beans sourced directly from farms and roasted in-house each week to peak flavor.",
  },
  {
    icon: "award",
    title: "Skilled Baristas",
    desc: "Our team trains under SCA-certified instructors. Every drink is dialed, timed, and tasted before it reaches you.",
  },
  {
    icon: "users",
    title: "Cozy Atmosphere",
    desc: "Warm wood, warm light, warm people. A space that welcomes you to stay, think, and linger.",
  },
];

const stats = [
  { value: "48K+", label: "Cups served" },
  { value: "36", label: "Coffee varieties" },
  { value: "7", label: "Years of craft" },
];

const infoCardsData = [
  {
    icon: "map-pin",
    title: "Address",
    lines: ["5 Chapel Road", "Brookhaven, New York, NY 11719"],
  },
  {
    icon: "clock",
    title: "Hours",
    lines: [
      "Mon – Fri  7:00 am – 8:00 pm",
      "Saturday   8:00 am – 9:00 pm",
      "Sunday     9:00 am – 6:00 pm",
    ],
  },
  {
    icon: "phone",
    title: "Phone",
    lines: ["+1 (212) 555-0172"],
  },
  {
    icon: "mail",
    title: "Email",
    lines: ["hello@brookhaven.coffee"],
  },
];

const footerColumns = [
  { title: "Navigate", links: ["Home", "Menu", "About Us", "Reservation", "Contact"] },
  { title: "Offerings", links: ["Espresso Bar", "Pour Over", "Cold Brew", "Seasonal Drinks", "Merchandise"] },
  { title: "Company", links: ["Our Story", "Careers", "Press", "Wholesale", "Gift Cards"] },
];

const socialIcons = ["instagram", "twitter", "facebook"];
const legalLinks = ["Privacy Policy", "Terms of Use", "Accessibility"];

// ── Helpers ──────────────────────────────────────────────────────────

function starRowHTML(rating) {
  let html = '<div class="star-row">';
  for (let n = 1; n <= 5; n++) {
    const filled = n <= Math.round(rating);
    html += `<span class="${filled ? "star-filled" : "star-empty"}"><i data-lucide="star"></i></span>`;
  }
  html += "</div>";
  return html;
}

// ── Render: Mini stats (hero) ───────────────────────────────────────

function renderMiniStats() {
  const el = document.getElementById("miniStats");
  el.innerHTML = stats
    .map(
      (s) => `
      <div>
        <div class="mini-stat-value">${s.value}</div>
        <div class="mini-stat-label">${s.label}</div>
      </div>`
    )
    .join("");
}

// ── Render: Menu grid ────────────────────────────────────────────────

function renderMenu() {
  const el = document.getElementById("menuGrid");
  el.innerHTML = menuItems
    .map(
      (item) => `
      <article class="menu-card">
        <div class="menu-card-img-wrap">
          <img src="${item.image}" alt="${item.name}" />
          <span class="menu-tag">${item.tag}</span>
        </div>
        <div class="menu-card-body">
          <h3 class="menu-card-title">${item.name}</h3>
          <p class="menu-card-desc">${item.description}</p>
          <div class="menu-card-footer">
            <div class="menu-rating-row">
              ${starRowHTML(item.rating)}
              <span class="menu-rating-text">${item.rating} (${item.reviews})</span>
            </div>
            <span class="menu-price">${item.price}</span>
          </div>
          <button class="btn-add">Add to Order</button>
        </div>
      </article>`
    )
    .join("");
}

// ── Render: Features ─────────────────────────────────────────────────

function renderFeatures() {
  const el = document.getElementById("featuresGrid");
  el.innerHTML = features
    .map(
      (f) => `
      <div class="feature-card">
        <div class="feature-icon"><i data-lucide="${f.icon}"></i></div>
        <h3 class="feature-title">${f.title}</h3>
        <p class="feature-desc">${f.desc}</p>
      </div>`
    )
    .join("");
}

// ── Render: About stats ──────────────────────────────────────────────

function renderAboutStats() {
  const el = document.getElementById("aboutStats");
  el.innerHTML = stats
    .map(
      (s) => `
      <div>
        <div class="about-stat-value">${s.value}</div>
        <div class="about-stat-label">${s.label}</div>
      </div>`
    )
    .join("");
}

// ── Render: Reviews ───────────────────────────────────────────────────

function renderReviews() {
  const el = document.getElementById("reviewsGrid");
  el.innerHTML = reviewsData
    .map(
      (r) => `
      <div class="review-card">
        <div class="review-stars">
          ${"<i data-lucide=\"star\"></i>".repeat(5)}
        </div>
        <p class="review-quote">"${r.quote}"</p>
        <div class="review-person">
          <div class="review-avatar"><img src="${r.avatar}" alt="${r.name}" /></div>
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-role">${r.role}</div>
          </div>
        </div>
      </div>`
    )
    .join("");
}

// ── Render: Info cards (location) ──────────────────────────────────────

function renderInfoCards() {
  const el = document.getElementById("infoCards");
  el.innerHTML = infoCardsData
    .map(
      (item) => `
      <div class="info-card">
        <div class="info-card-icon"><i data-lucide="${item.icon}"></i></div>
        <div>
          <div class="info-card-title">${item.title}</div>
          ${item.lines.map((l) => `<div class="info-card-line">${l}</div>`).join("")}
        </div>
      </div>`
    )
    .join("");
}

// ── Render: Footer ────────────────────────────────────────────────────

function renderFooter() {
  const socialsEl = document.getElementById("footerSocials");
  socialsEl.innerHTML = socialIcons
    .map(
      (icon) => `
      <a href="#" class="footer-social" aria-label="Social link"><i data-lucide="${icon}"></i></a>`
    )
    .join("");

  const colIds = ["footerCol1", "footerCol2", "footerCol3"];
  footerColumns.forEach((col, i) => {
    const colEl = document.getElementById(colIds[i]);
    colEl.innerHTML = `
      <div class="footer-col-title">${col.title}</div>
      <ul>
        ${col.links.map((link) => `<li><a href="#">${link}</a></li>`).join("")}
      </ul>`;
  });

  const legalEl = document.getElementById("footerLegal");
  legalEl.innerHTML = legalLinks.map((l) => `<a href="#">${l}</a>`).join("");
}

// ── Mobile menu toggle ───────────────────────────────────────────────

function setupMobileMenu() {
  const toggle = document.getElementById("mobileToggle");
  const drawer = document.getElementById("mobileDrawer");
  const iconMenu = document.getElementById("iconMenu");
  const iconX = document.getElementById("iconX");

  let open = false;

  function setOpen(value) {
    open = value;
    drawer.classList.toggle("open", open);
    iconMenu.style.display = open ? "none" : "block";
    iconX.style.display = open ? "block" : "none";
  }

  toggle.addEventListener("click", () => setOpen(!open));

  // Close drawer on link click
  drawer.querySelectorAll("a.mobile-link, #mobileOrderBtn").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}

// ── Guest counter (reservation form) ─────────────────────────────────

function setupGuestCounter() {
  let guests = 2;
  const countEl = document.getElementById("guestCount");
  const labelEl = document.getElementById("guestLabel");
  const minusBtn = document.getElementById("guestMinus");
  const plusBtn = document.getElementById("guestPlus");

  function update() {
    countEl.textContent = guests;
    labelEl.textContent = `${guests === 1 ? "guest" : "guests"} · max 12`;
  }

  minusBtn.addEventListener("click", () => {
    guests = Math.max(1, guests - 1);
    update();
  });

  plusBtn.addEventListener("click", () => {
    guests = Math.min(12, guests + 1);
    update();
  });

  update();
}

// ── Reservation form ─────────────────────────────────────────────────

function setupReservationForm() {
  const form = document.getElementById("reservationForm");
  const success = document.getElementById("reservationSuccess");
  const resetBtn = document.getElementById("resetReservation");
  const dateInput = document.getElementById("resDate");

  // Set min date to today
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display = "none";
    success.style.display = "block";
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
    success.style.display = "none";
    form.style.display = "flex";
  });
}

// ── Init ──────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderMiniStats();
  renderMenu();
  renderFeatures();
  renderAboutStats();
  renderReviews();
  renderInfoCards();
  renderFooter();

  setupMobileMenu();
  setupGuestCounter();
  setupReservationForm();

  // Render all Lucide icons (including ones inserted dynamically above)
  if (window.lucide) {
    lucide.createIcons();
  }
});
