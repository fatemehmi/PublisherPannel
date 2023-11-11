import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient"; 
import { API_ENDPOINTS } from "@/utils/api/endpoints";

const apiClient=new APIClient('')

const useSendVerificationCode=(setStepfunc)=> {
  return useMutation({
    mutationFn: apiClient.post,
    onSuccess: (savedEmail) => {
      console.log(savedEmail);
      setStepfunc(3);
    },
  });
}

export default useSendVerificationCode