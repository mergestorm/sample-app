import { test } from "node:test";
import assert from "node:assert/strict";
import { orderSummary } from "./summary.js";

test("orderSummary applies the discount before tax", () => {
  const summary = orderSummary([{ price: 1000, quantity: 2 }], { discountPercent: 10, taxRatePercent: 10 });
  assert.deepEqual(summary, { itemsTotal: 2000, discounted: 1800, tax: 180, total: 1980 });
});
