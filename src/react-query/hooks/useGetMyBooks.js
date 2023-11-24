import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const useGetMyBooks = () => {
  const { push } = useRouter();
  const showToast = useShowToast();
  const token = Cookies.get("token");
  return useQuery({
    queryKey: ["userbooks"],
    queryFn: () =>
      axios
        .get("http://Localhost:8000" + API_ENDPOINTS.GET_BOOKS, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data)
        .catch((err) => {
          showToast(err.response.data.result.error_message);
          if (err.response.status === 401 || err.response.status === 403) {
            token ? Cookies.delete("token") : "";
            push("/login");
          }
        }),
  });
};

export default useGetMyBooks;
