import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { useRouter } from "next/router";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import Cookies from "js-cookie";

const apiClient = new APIClient(API_ENDPOINTS.USER_SIGNUP);
var inhalfHours = new Date(new Date().getTime() + 30 * 60 * 1000);

const useSendUserSignupInfo = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: apiClient.post,
    onSuccess: (data) => {
      console.log(data);
      const token = data.data;
      Cookies.set("token", token, { expires: inhalfHours });
      router.push("/");
    },
  });
};

export default useSendUserSignupInfo;
