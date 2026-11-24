import { test } from "node:test";
import assert from "node:assert/strict";
import { shippingCost } from "./shipping.js";

test("orders over the threshold ship free", () => {
  assert.equal(shippingCost(6000, 2500), 0);
});

test("small orders pay the base rate plus weight", () => {
  assert.equal(shippingCost(1000, 2000), 799);
});
