import { priceFormatted } from "@/src/utils";
import Image from "next/image";
import styles from "./card-product.module.scss";

export default function CardProduct({ product, productCart, setProductCart }) {
  const addToCart = (product) => {
    const existingProductIndex = productCart.findIndex(
      (p) => p.title === product.title
    );
    if (existingProductIndex !== -1) {
      const updatedProductCart = [...productCart];
      updatedProductCart[existingProductIndex].quantity += 1;
      setProductCart(updatedProductCart);
    } else {
      setProductCart((prevProductCart) => [
        ...prevProductCart,
        { ...product, quantity: 1 },
      ]);
    }
  };

  return (
    <div className={styles.card_product} onClick={() => addToCart(product)}>
      <Image
        className={styles.card_product__image}
        src={product.image}
        alt={product.title}
        width={300}
        height={150}
        priority
      />
      <div className={styles.card_product__content}>
        <h2 className={styles.card_product__title}>{product.title}</h2>
        <p className={styles.card_product__desc}>{product.desc}</p>
        <h3 className={styles.card_product__price}>
          Rp.{priceFormatted(product.price)}
        </h3>
      </div>
    </div>
  );
}
