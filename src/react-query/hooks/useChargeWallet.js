import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const useChargeWallet = (data) => {
	const router = useRouter();
	const token = Cookies.get("token");
	console.log(data);

	return useMutation({
		mutationFn: () =>
			axios
				.post(
					`http://localhost:5000${API_ENDPOINTS.WALLET}?amount=${data}`,
					{},
					{
						headers: {
							Authorization: "Bearer " + token,
						},
					}
				)
				.then((res) => res.data),

		onSuccess: (data) => {
			const paymentUrl = data.data;
			router.push(paymentUrl);
		},
	});
};

export default useChargeWallet;
