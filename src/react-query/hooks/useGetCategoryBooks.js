import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";

const useGetCategoryBooks = (category) => {
  const showToast = useShowToast();
  return useQuery({
    queryKey: ["category-books"],
    queryFn: () =>
      axios
        .get(`http://localhost:7000/api/search/books?category=${category}`)
        .then((res) => res.data)
        .catch((err) => {
        
        }),
  });
};

export default useGetCategoryBooks;
