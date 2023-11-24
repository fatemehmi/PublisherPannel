import { useMutation } from "@tanstack/react-query";
import APIClientToken from "../services/apiClient-token";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const apiClient = new APIClientToken(API_ENDPOINTS.LOGIN);
var inhalfHours = new Date(new Date().getTime() + 30 * 60 * 1000);

const useLogin = () => {
	const router = useRouter();

	return useMutation({
		mutationFn: apiClient.post,
		onSuccess: (data) => {
			console.log(data.data);
			const token = data.data;
			Cookies.set("token", token, { expires: inhalfHours });
			router.push("/");
		},
	});
};

export default useLogin;
