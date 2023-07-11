import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/api";

export default function useGetAllCategories() {
  const { data, isLoading, isError } = useQuery(["categories"], () =>
    getAllCategories()
  );
  return { categories: data, isLoading, isError };
}
