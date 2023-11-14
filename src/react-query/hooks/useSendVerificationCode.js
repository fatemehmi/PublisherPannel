import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient"; 
import { API_ENDPOINTS } from "@/utils/api/endpoints";

const apiClient=new APIClient(API_ENDPOINTS.VERIFY_CODE)

const useSendVerificationCode=(setStepfunc)=> {
  return useMutation({
    mutationFn: apiClient.post,
    onSuccess: (savedEmail) => {
      console.log(savedEmail);
      setStepfunc(3);
    },
    // onError:(e)=>{
    //   console.log(e.response.data.result.error_message
    //     )
    // }
  });
}

export default useSendVerificationCode