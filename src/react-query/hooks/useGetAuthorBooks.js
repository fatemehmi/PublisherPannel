import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";

const useGetAuthorBooks = (authorName) => {
  const showToast = useShowToast();
  return useQuery({
    queryKey: ["author-books"],
    queryFn: () =>
      axios
        .get(`http://localhost:7000/api/search/books?author=${authorName}`)
        .then((res) => res.data)
        .catch((err) => {
          showToast(err.response.data.result.error_message);
        }),
  });
};

export default useGetAuthorBooks;
