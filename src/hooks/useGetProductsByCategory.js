import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../services/api";

export default function useGetProductsByCategory(queryKey = "", category) {
  const { data, isLoading, isError, refetch, isRefetching } = useQuery(
    [queryKey],
    () => getProductsByCategory(category),
    {
      enabled: !!category,
    }
  );

  return { products: data, isLoading, isError, refetch, isRefetching };
}
