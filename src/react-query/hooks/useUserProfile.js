import { useMutation } from "@tanstack/react-query";
import APIClientToken from "../services/apiClient-token";
import { API_ENDPOINTS } from "@/utils/api/endpoints";

const apiClient = new APIClientToken(API_ENDPOINTS.USER_PROFILE);

const useUserProfile = () => {
	return useMutation({
		mutationFn: apiClient.getAll,
		onSuccess: (data) => {
			console.log(data.data);
		},
		onError: (error) => {
			console.error("Error fetching user data:", error);
		},
	});
};

export default useUserProfile;
