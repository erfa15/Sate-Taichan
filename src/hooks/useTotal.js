import { priceFormatted } from "../utils";

export default function useTotal(data) {
  const price = data?.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const ordered = data?.reduce((total, product) => total + product.quantity, 0);

  const totalPrice = priceFormatted(price);

  return { totalPrice, totalOrdered: ordered };
}
