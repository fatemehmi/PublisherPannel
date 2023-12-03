import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";
import Cookies from "js-cookie";
const useGetIsBookmark = (bookId, setLike) => {
  const showToast = useShowToast();
  const token = Cookies.get("token");

  return useQuery({
    queryKey: ["is-bookmark"],
    queryFn: () =>
      axios
        .get(`http://Localhost:5001/api/user/check-bookmark/${bookId}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          setLike(res.data.data);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          showToast(err.response.data.result.error_message);
        }),
  });
};

export default useGetIsBookmark;
