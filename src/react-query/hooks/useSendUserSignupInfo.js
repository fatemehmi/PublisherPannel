import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient"; 
import { useRouter } from "next/router";
import { API_ENDPOINTS } from "@/utils/api/endpoints";

const apiClient=new APIClient(API_ENDPOINTS.USER_SIGNUP)


const useSendUserSignupInfo=()=> {
  const router=useRouter()

  return useMutation({
    mutationFn: apiClient.post,
    onSuccess: (data) => {
      console.log(data);
      router.push('/login')
    },
  });
}

export default useSendUserSignupInfo