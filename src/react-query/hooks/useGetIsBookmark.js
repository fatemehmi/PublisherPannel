import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const useGetIsBookmark = (bookId, setLike) => {
  const showToast = useShowToast();
  const token = Cookies.get("token");
  const { push } = useRouter();

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
          if (err.response.status === 401 || err.response.status === 403) {
            // token ? Cookies.remove("token") : "";
            // push("/login");
          }
        }),
  });
};

export default useGetIsBookmark;
