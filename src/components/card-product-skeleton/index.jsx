import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./card-product-skeleton.module.scss";

export default function CardProductSkeleton() {
  return (
    <SkeletonTheme baseColor="#dddddd" highlightColor="#b3b3b3">
      <div className={styles.card_product__skeleton}>
        <Skeleton height={200} />
        <h1>
          <Skeleton className={styles.card_product__title} />
        </h1>
        <p>
          <Skeleton className={styles.card_product__desc} />
        </p>
        <h3>
          <Skeleton />
        </h3>
      </div>
      <div className={styles.card_product__skeleton}>
        <Skeleton height={200} />
        <h1>
          <Skeleton className={styles.card_product__title} />
        </h1>
        <p>
          <Skeleton className={styles.card_product__desc} />
        </p>
        <h3>
          <Skeleton />
        </h3>
      </div>
      <div className={styles.card_product__skeleton}>
        <Skeleton height={200} />
        <h1>
          <Skeleton className={styles.card_product__title} />
        </h1>
        <p>
          <Skeleton className={styles.card_product__desc} />
        </p>
        <h3>
          <Skeleton />
        </h3>
      </div>
    </SkeletonTheme>
  );
}
