import { useMutation } from "@tanstack/react-query";
import APIClientToken from "../services/apiClient-token";
import { API_ENDPOINTS } from "@/utils/api/endpoints";

const apiClient = new APIClientToken(API_ENDPOINTS.CHANGE_PASS);

const useChangePass = () => {
	return useMutation({
		mutationFn: apiClient.post,
		onSuccess: (data) => {
			console.log(data.data);
		},
	});
};

export default useChangePass;
