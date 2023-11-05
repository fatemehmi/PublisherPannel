import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import APIClient from "../services/apiClient";
import { API_ENDPOINTS } from "@/utils/api/endpoints";

const apiClient=new APIClient(API_ENDPOINTS.PUBLISHER_SIGNUP)

function useSendPublisherSignupInfo() {
  const router=useRouter()

  return useMutation({
    mutationFn: apiClient.post,
    onSuccess: (data) => {
      console.log(data)
      router.push('/login')
    },
  });
}

export default useSendPublisherSignupInfo