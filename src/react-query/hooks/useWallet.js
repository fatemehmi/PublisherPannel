import { useMutation } from "@tanstack/react-query";
import APIClientToken from "../services/apiClient-token";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import { useRouter } from "next/router";

const apiClient = new APIClientToken(API_ENDPOINTS.WALLET);

const useWalletMutation = () => {
	const router = useRouter();

	return useMutation({
		mutationFn: apiClient.post,
		onSuccess: (data) => {
			const paymentUrl = data.data;
			router.push(paymentUrl);
		},
		onError: (error) => {
			alert(
				"مشکلی در شارژ کیف پول شما به وجود آمده  است ،  مجددا تلاش کنید"
			);
			console.error("Error posting wallet data:", error);
		},
	});
};

export default useWalletMutation;
