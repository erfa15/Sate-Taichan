import { CardProduct, CardProductSkeleton } from "@/src/components";
import useGetProductsByCategory from "@/src/hooks/useGetProductsByCategory";

export default function ListItemProducts(props) {
  const { category, setProductCart, productCart } = props;

  const { products, isLoading } = useGetProductsByCategory(
    `/categories/${category}`,
    category
  );
  if (isLoading) return <CardProductSkeleton />;

  const showProduct = products?.results?.products?.map((item, i) => (
    <CardProduct
      key={i}
      product={item}
      productCart={productCart}
      setProductCart={setProductCart}
    />
  ));

  return showProduct;
}
