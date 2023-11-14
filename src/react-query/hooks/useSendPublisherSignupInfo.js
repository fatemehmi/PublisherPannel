import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import APIClient from "../services/apiClient";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import Cookies from 'js-cookie';

const apiClient=new APIClient(API_ENDPOINTS.PUBLISHER_SIGNUP)
var inhalfHours = new Date(new Date().getTime() + 30 * 60 * 1000);

function useSendPublisherSignupInfo(setStepfunc) {
  const router=useRouter()

  return useMutation({
    mutationFn: apiClient.post,
    onSuccess: (data) => {
      console.log(data)
      const token=data.data
          Cookies.set('token', token, { expires: inhalfHours});
      setStepfunc(2)
          
    },
    // onError:(err)=>{
    //   console.log(err)
    // }
  });
}

export default useSendPublisherSignupInfo