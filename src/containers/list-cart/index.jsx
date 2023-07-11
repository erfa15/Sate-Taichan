import React from "react";
import { CardCartProduct } from "@/src/components";

export default function ListCart({ payload, setProductCart }) {
  const handleUpdateCart = (updatedProduct) => {
    const updatedItems = payload.map((product) => {
      if (product.title === updatedProduct.title) {
        return { ...product, quantity: updatedProduct.quantity };
      }
      return product;
    });

    // filtered when product > 0
    const filteredItems = updatedItems.filter(
      (product) => product.quantity > 0
    );

    setProductCart(filteredItems);
  };

  const showCart = payload.map((item, i) => {
    return (
      <CardCartProduct key={i} cart={item} updateCart={handleUpdateCart} />
    );
  });

  return showCart;
}
