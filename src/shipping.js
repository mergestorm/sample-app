export const FREE_SHIPPING_THRESHOLD = 5000;
export const BASE_RATE = 499;
export const PER_KG_RATE = 150;

export function shippingCost(subtotalCents, weightGrams) {
  if (subtotalCents > FREE_SHIPPING_THRESHOLD) {
    return 0;
  }
  const kilograms = Math.floor(weightGrams / 1000);
  return BASE_RATE + kilograms * PER_KG_RATE;
}
