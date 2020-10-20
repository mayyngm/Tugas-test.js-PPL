import {
  incrementQty,
  decrementQty,
  recalculateSubtotal,
  calculateDiscount,
  calculateKembali,
} from "./helpers.js";

const incrButton = document.querySelector("#incr");
const decrButton = document.querySelector("#decr");
const qtyInput = document.querySelector("#qty");
const subtotalText = document.querySelector("#subtotal");
const price = document.querySelector("#price");
const discountCode = document.querySelector("#code");
const confirmButton = document.querySelector("#confirmButton");
const kembali = document.querySelector("#kembali");
const confirmButton2 = document.querySelector("#confirmButton2");
const bayar = document.querySelector("#bayar");

incrButton.addEventListener("click", () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculateSubtotal(price.value, qtyInput.value)}`;
});

decrButton.addEventListener("click", () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculateSubtotal(price.value, qtyInput.value)}`;
});

confirmButton.addEventListener("click", () => {
  let subtotal = recalculateSubtotal(price.value, qtyInput.value);
  let total = calculateDiscount(subtotal, discountCode.value);
  subtotalText.textContent = `Rp. ${total}`;
});

confirmButton2.addEventListener("click", () => {
  bayar.value = calculateKembali(bayar.value);
  kembali.textContent = `Rp. ${calculateKembali(bayar.value, kembali.value)}`
})