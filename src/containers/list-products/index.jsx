import { useState } from "react";
import { ListItemProducts, Cart } from "..";
import { CardTitleProduct, CardTitleProductSkeleton } from "@/src/components";
import styles from "./list-products.module.scss";

export default function ListProducts({ payload, isLoading }) {
  const [productCart, setProductCart] = useState([]);
  const [category, setCategory] = useState("sate_taichan");

  const navigationProducts = payload?.map((item, i) => (
    <CardTitleProduct
      key={i}
      data={item}
      category={category}
      setCategory={setCategory}
    />
  ));

  return (
    <div className={styles.list_products}>
      {/* left */}
      <div className={styles.list_products__shop}>
        <div className={styles.list_products__types}>
          {isLoading && <CardTitleProductSkeleton />}
          {navigationProducts}
        </div>
        <div className={styles.list_products__product}>
          <ListItemProducts
            category={category}
            productCart={productCart}
            setProductCart={setProductCart}
          />
        </div>
      </div>
      {/* right */}
      <Cart productCart={productCart} setProductCart={setProductCart} />
    </div>
  );
}
