import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";

const useGetBookCategory = (bookId) => {
  const showToast = useShowToast();
  return useQuery({
    queryKey: ["book-category"],
    queryFn: () =>
      axios
        .get(`http://Localhost:8000/api/books/${bookId}/categories`)
        .then((res) => res.data)
        .catch((err) => {
          showToast(err.response.data.result.error_message);
        }),
  });
};

export default useGetBookCategory;