export default function priceFormatted(price) {
  return price?.toLocaleString().replace(",", ".");
}
