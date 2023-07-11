import Image from "next/image";
import styles from "./card-item-payment.module.scss";

export default function CardItemPayment({ item }) {
  return (
    <div className={styles.card_item__payment}>
      <Image
        className={styles.card_item__image}
        src={item.image}
        alt={item.title}
        width={150}
        height={150}
      />
      <div>
        <h1 className={styles.card_item__title}>{item.title}</h1>
        <p className={styles.card_item__desc}>Jumlah : {item.quantity}</p>
      </div>
    </div>
  );
}
