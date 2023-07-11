import Image from "next/image";
import { TiPlus as IconPlus, TiMinus as IconMin } from "react-icons/ti";
import { priceFormatted } from "@/src/utils";
import styles from "./card-cart-product.module.scss";

export default function CardCartProduct({ cart, updateCart }) {
  const handleIncrementQuantity = () => {
    const updatedQuantity = cart.quantity + 1;
    updateCart({ ...cart, quantity: updatedQuantity });
  };

  const handleDecrementQuantity = () => {
    const updatedQuantity = cart.quantity - 1;
    updateCart({ ...cart, quantity: updatedQuantity });
  };

  const totalPriceQuantity = cart.price * cart.quantity;

  return (
    <div className={styles.card_cart}>
      {/* <Image
        src={cart.image}
        alt={cart.title}
        className={styles.card_cart__image}
        width={80}
        height={80}
      /> */}
      <div className={styles.card_cart__content}>
        <h2 className={styles.card_cart__title}>{cart.title}</h2>
        <div className={styles.card_cart__body}>
          <p className={styles.card_cart__price}>
            Rp.{priceFormatted(totalPriceQuantity)}
          </p>
          <div className={styles.card_cart__quantity_container}>
            <IconMin
              className={styles.card_cart__quantity_icon}
              onClick={() => handleDecrementQuantity()}
            />
            <p className={styles.card_cart__quantity}>{cart.quantity}</p>
            <IconPlus
              className={styles.card_cart__quantity_icon}
              onClick={() => handleIncrementQuantity()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
