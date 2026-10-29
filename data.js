/* data.js - shared by all pages.
   The menu is stored in the browser (localStorage) so the admin page can change it.
   Change the values in SETTINGS to rebrand the whole site in one place. */

const SETTINGS = {
  name: "Restaurant",                 // <-- change restaurant name here
  tagline: "Authentic Telugu Meals in Miyapur",
  phone: "7901232423",
  whatsapp: "917901232423",           // country code + number, no + or spaces
  city: "Miyapur, Hyderabad",
  address: "Miyapur, Hyderabad, Telangana",
  hours: "Open daily 11:00 AM - 11:00 PM",
  gstRate: 0.05,                      // 5% GST
  adminPassword: "admin123"           // <-- change this password
};

const DEFAULT_MENU = [
  { id: 1, name: "Hyderabadi Chicken Biryani", price: 260, veg: false, available: true, cat: "Biryani", img: "images/chicken-biryani.jpg", desc: "Dum-cooked basmati rice layered with spicy tandoori chicken, mint and lemon." },
  { id: 2, name: "Gongura Chicken", price: 280, veg: false, available: true, cat: "Curries", img: "images/gongura-chicken.jpg", desc: "Tender chicken in a tangy Andhra-style gongura masala." },
  { id: 3, name: "Veg Biryani", price: 200, veg: true, available: true, cat: "Biryani", img: "images/veg-biryani.jpg", desc: "Fragrant biryani with fresh vegetables and fried onions, served with raita." },
  { id: 4, name: "Non-Veg Thali", price: 320, veg: false, available: true, cat: "Thali", img: "images/non-veg-thali.jpg", desc: "Rice, roti, chicken, curries, raita and chutney on one steel plate." },
  { id: 5, name: "Veg Thali", price: 240, veg: true, available: true, cat: "Thali", img: "images/veg-thali.jpg", desc: "Full Telugu meal: rice, dal, curries, rasam, curd and sweet." },
  { id: 6, name: "Gulab Jamun", price: 80, veg: true, available: true, cat: "Sweets", img: "images/gulab-jamun.jpg", desc: "Soft khoya dumplings soaked in warm sugar syrup, topped with pistachio." },
  { id: 7, name: "Perugannam (Curd Rice)", price: 120, veg: true, available: true, cat: "Meals", img: "images/perugannam.jpg", desc: "Cool creamy curd rice with pomegranate, cashew and curry leaves." },
  { id: 8, name: "Pulihora", price: 130, veg: true, available: true, cat: "Meals", img: "images/pulihora.jpg", desc: "Tangy tamarind-lemon rice tempered with peanuts, chillies and curry leaves." },
  { id: 9, name: "Pappu Annam with Ghee", price: 140, veg: true, available: true, cat: "Meals", img: "images/pappu-ghee.jpg", desc: "Hot rice, golden pappu and pure ghee, served with pickle." }
];

/* the 4 signature dishes on the home page (ids from the menu above) */
const SIGNATURE_IDS = [7, 8, 9, 5];

function getMenu() {
  const saved = localStorage.getItem("menuData");
  if (saved) { try { return JSON.parse(saved); } catch (e) {} }
  return DEFAULT_MENU;
}
function saveMenu(menu) { localStorage.setItem("menuData", JSON.stringify(menu)); }

/* cart is saved in localStorage so it survives moving between pages */
function getCart() {
  try { return JSON.parse(localStorage.getItem("cartData")) || {}; } catch (e) { return {}; }
}
function saveCart(cart) { localStorage.setItem("cartData", JSON.stringify(cart)); updateCartBadge(); }
function cartCount() { return Object.values(getCart()).reduce((a, b) => a + b, 0); }
function updateCartBadge() {
  document.querySelectorAll(".cart-badge").forEach(el => { el.textContent = cartCount(); });
}
function rupees(n) { return "\u20B9" + n; }
