import { test } from "node:test";
import assert from "node:assert/strict";
import { applyDiscount, lineTotal, subtotal } from "./cart.js";

test("lineTotal multiplies price by quantity", () => {
  assert.equal(lineTotal({ price: 250, quantity: 3 }), 750);
});

test("subtotal adds every line", () => {
  assert.equal(subtotal([{ price: 100, quantity: 2 }, { price: 50, quantity: 1 }]), 250);
});

test("applyDiscount takes a percentage off", () => {
  assert.equal(applyDiscount(1000, 10), 900);
});
