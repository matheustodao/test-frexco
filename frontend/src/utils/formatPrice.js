export function formatPrice(value, country = 'en-US', symbol = 'USD') {
  return new Intl.NumberFormat(country, { style: 'currency', currency: symbol }).format(value);
}
