import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { API_ENDPOINTS } from "@/utils/api/endpoints";

const apiClient=new APIClient(API_ENDPOINTS.SEND_SIGNUP_EMAIL)

const useSendEmail=(setStepfunc)=> {
    return useMutation({
        mutationFn: apiClient.post,
        onSuccess: (data) => {
          console.log(data)
          setStepfunc(2)
        },
      });
}

export default useSendEmail