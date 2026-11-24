import { test } from "node:test";
import assert from "node:assert/strict";
import { salesTax } from "./tax.js";

test("salesTax rounds to the nearest cent", () => {
  assert.equal(salesTax(1999, 8.25), 165);
});
