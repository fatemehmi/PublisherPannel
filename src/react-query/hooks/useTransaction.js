import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";

const useTransaction = () => {
	const showToast = useShowToast();
	return useQuery({
		queryKey: ["transactionHistory"],
		queryFn: () =>
			axios
				.get("http://Localhost:8000" + API_ENDPOINTS.WALLET_HISTORY)
				.then((res) => res.data)
				.catch((err) =>
					showToast(err.response.data.result.error_message)
				),
	});
};

export default useTransaction;
