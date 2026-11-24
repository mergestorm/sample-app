export function salesTax(amountCents, ratePercent) {
  return Math.round((amountCents * ratePercent) / 100);
}
