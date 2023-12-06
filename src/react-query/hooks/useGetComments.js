import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";

const useGetComments = (bookId,page) => {
  const showToast = useShowToast();
  return useQuery({
    queryKey: ["book-comments",page],
    queryFn: () =>
      axios
        .get(`http://localhost:6002/api/book/comments/${bookId}?page=${page} `)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err)
          showToast(err.response.data.result.error_message);
        }),
  });
};

export default useGetComments;