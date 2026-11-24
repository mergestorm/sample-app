export function lineTotal(item) {
  return item.price * item.quantity;
}

export function subtotal(items) {
  return items.reduce((sum, item) => sum + lineTotal(item), 0);
}

export function applyDiscount(amount, percent) {
  if (percent < 0 || percent > 100) {
    throw new RangeError("percent must be between 0 and 100");
  }
  return Math.round(amount * (100 - percent)) / 100;
}
