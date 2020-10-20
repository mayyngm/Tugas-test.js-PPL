const {
  incrementQty,
  decrementQty,
  recalculateSubtotal,
  calculateDiscount,
} = require("../helpers");

test("qty 1 ditambah 1 sama dengan 2", () => {
  expect(incrementQty(1)).toBe(2);
});
test("qty 1 ditambah 1 sama dengan 2", () => {
  expect(incrementQty("1")).toBe(2);
});
test("qty 2 dikurangi 1 sama dengan 1", () => {
  expect(decrementQty(2)).toBe(1);
});

test("hitung diskon dengan kode25", () => {
  expect(calculateDiscount(250000, "KODE25")).toBe(187500);
<<<<<<< HEAD
});
=======
});
>>>>>>> 8fc7eb179afa5b8e4bd639813d408d3be136c9cb
