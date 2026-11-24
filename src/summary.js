import { applyDiscount, subtotal } from "./cart.js";
import { salesTax } from "./tax.js";

export function orderSummary(items, { discountPercent = 0, taxRatePercent = 0 } = {}) {
  const itemsTotal = subtotal(items);
  const discounted = applyDiscount(itemsTotal, discountPercent);
  const tax = salesTax(discounted, taxRatePercent);
  return { itemsTotal, discounted, tax, total: discounted + tax };
}
