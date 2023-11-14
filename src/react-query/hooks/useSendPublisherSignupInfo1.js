import { useMutation } from "@tanstack/react-query";
import APIClientToken from "../services/apiClient-token";
import { API_ENDPOINTS } from "@/utils/api/endpoints";

const apiClient=new APIClientToken(API_ENDPOINTS.PUBLISHER_SIGNUP1)

function useSendPublisherSignupInfo1(setStepfunc) {

console.log('mutate')
  return useMutation({
    mutationFn: apiClient.put,
    onSuccess: (data) => {
      console.log(data)
      setStepfunc(3)
    },
    onError:(err)=>{
        console.log(err)
    }
  });
}

export default useSendPublisherSignupInfo1