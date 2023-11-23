import APIClientToken from "../services/apiClient-token";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";
import Cookies from "js-cookie";

const useBalance = () => {
	const showToast = useShowToast();
	const token = Cookies.get("token");
	return useQuery({
		queryKey: ["balance"],
		queryFn: () =>
			axios
				.get("http://Localhost:8000" + API_ENDPOINTS.BALANCE, {
					headers: { Authorization: "Bearer " + token },
				})
				.then((res) => res.data)
				.catch((err) =>
					showToast(err.response.data.result.error_message)
				),
	});
};

export default useBalance;
