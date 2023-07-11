import { Layout } from "@/src/components";
import { ListProducts } from "@/src/containers";
import styles from "./products.module.scss";
import { useGetAllCategories } from "@/src/hooks";

export default function ProductsPage() {
  const { categories, isLoading } = useGetAllCategories();

  return (
    <Layout title="Products Page" active="Products">
      <div className={styles.products__wrapper}>
        <h1 className={styles.products__title}>Menu Kami</h1>
        <p className={styles.products__desc}>
          Menu kami disajikan dengan sangat cepat dan memiliki bumbu rahasia
          yang unik.
        </p>
      </div>
      <ListProducts payload={categories} isLoading={isLoading} />
    </Layout>
  );
}
