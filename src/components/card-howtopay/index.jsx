import React from "react";
import Image from "next/image";
import styles from "./card-howtopay.module.scss";

export default function CardHowToPay({ payload, number }) {
  const { title, desc, img } = payload;

  return (
    <div className={styles.howtopay}>
      <Image
        src={img}
        alt={title}
        width={300}
        height={200}
        className={styles.howtopay_image}
      />
      <div className={styles.howtopay_content}>
        <h1 className={styles.howtopay_number}>{number}</h1>
        <div className={styles.howtopay_content__body}>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
