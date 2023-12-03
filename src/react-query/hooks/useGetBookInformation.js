import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";

const useGetBookInformation = (bookId) => {
  const showToast = useShowToast();
  return useQuery({
    queryKey: ["book"],
    queryFn: () =>
      axios
        .get(`http://Localhost:8000/api/books/${bookId}`)
        .then((res) => res.data)
        .catch((err) => {
          showToast(err.response.data.result.error_message);
        }),
  });
};

export default useGetBookInformation;
