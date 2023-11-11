import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { API_ENDPOINTS } from "@/utils/api/endpoints";

const apiClient=new APIClient()

const useSendEmail=(setStepfunc,endpoint)=> {

  const apiClient=endpoint==="send-signup-email"?new APIClient():new APIClient()
    return useMutation({
        mutationFn: apiClient.post,
        onSuccess: (data) => {
          endpoint==="send-signup-email"?console.log("...signup"):""
          console.log(data)
          setStepfunc(2)
        },
      });
}

export default useSendEmail