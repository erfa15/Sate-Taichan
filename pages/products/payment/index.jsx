/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "@/src/components";
import { FormPayment, ListItemPayment } from "@/src/containers";
import { useStorage } from "@/src/hooks";
import { useState, useEffect } from "react";
import styles from "./payment.module.scss";

export default function PaymentPage() {
  const storage = useStorage();
  const [productCart, setProductCart] = useState();

  useEffect(() => {
    const stored = storage.getItem("productCart");
    const valueData = stored !== null ? stored : [];
    setProductCart(valueData);
  }, []);

  return (
    <Layout title="Payment Page" active="Products">
      <div className={styles.payment__wrapper}>
        <h1 className={styles.payment__title}>Pembayaran</h1>
        <p className={styles.payment__desc}>
          Perhatikan kembali pesanan karena pesanan yang sudah di pesan tidak
          bisa dibatalkan
        </p>
      </div>
      <div className={styles.payment__form}>
        <FormPayment productCart={productCart} />
        <ListItemPayment payload={productCart} />
      </div>
    </Layout>
  );
}
