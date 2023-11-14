import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { API_ENDPOINTS } from "@/utils/api/endpoints";


const useSendEmail=(endpoint,setStepfunc)=> {

  const apiClient=endpoint==="send-signup-email"?new APIClient(API_ENDPOINTS.SEND_SIGNUP_EMAIL):new APIClient(API_ENDPOINTS.SEND_RESET_PASSWORD_CODE)
    return useMutation({
        mutationFn: apiClient.post,
        onSuccess: (data) => {
          console.log(data)
          setStepfunc(2)
        },
      });
}

export default useSendEmail