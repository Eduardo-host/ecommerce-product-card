// ===== Cart UI interactions =====
const cartCountEl = document.getElementById("cartCount");
const addBtn = document.querySelector(".item-cart-btn");

// Quantity controls
const qtyValueEl = document.getElementById("qtyValue");
const incQty = document.getElementById("incQty");
const decQty = document.getElementById("decQty");

// Clear cart button
const clearCartBtn = document.getElementById("clearCartBtn");

let cartCount = Number(cartCountEl.textContent) || 0;
let qty = Number(qtyValueEl.textContent) || 1;

// Increase quantity
incQty.addEventListener("click", () => {
  qty++;
  qtyValueEl.textContent = qty;
});

// Decrease quantity
decQty.addEventListener("click", () => {
  if (qty > 1) {
    qty--;
    qtyValueEl.textContent = qty;
  }
});

// Add to cart
addBtn.addEventListener("click", () => {
  cartCount += qty;
  cartCountEl.textContent = cartCount;

  const originalText = "Add to cart";
  addBtn.textContent = "Added ✅";
  addBtn.disabled = true;

  setTimeout(() => {
    addBtn.textContent = originalText;
    addBtn.disabled = false;
  }, 900);
});

// Clear cart
clearCartBtn.addEventListener("click", () => {
  cartCount = 0;
  qty = 1;

  cartCountEl.textContent = cartCount;
  qtyValueEl.textContent = qty;

  const originalText = "Add to cart";
  addBtn.textContent = "Cart cleared 🗑️";
  addBtn.disabled = true;

  setTimeout(() => {
    addBtn.textContent = originalText;
    addBtn.disabled = false;
  }, 900);
});