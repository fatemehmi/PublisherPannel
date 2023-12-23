import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const useIsBookBought = (bookId) => {
  const token = Cookies.get("token");
  return useQuery({
    queryKey: ["book-is-bought"],
    queryFn: () =>
      axios
        .get(`http://Localhost:5001/api/user/check-book/${bookId}`,{
            headers: { Authorization: "Bearer " + token },
          })
        .then((res) => res.data)
        .catch((err) => {
        }),
  });
};

export default useIsBookBought;
