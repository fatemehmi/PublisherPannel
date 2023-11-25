import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import useGetWalletInfo from "./useGetWalletInfo";
import { useRouter } from "next/router";

const useUpdateUserWallet = (refetch) => {
    const token = Cookies.get("token");
    const router=useRouter()

	return useMutation({
		mutationFn:()=>axios.put(`http://Localhost:5000/api/user/wallet/UpdateUserWallet${localStorage.getItem("id")}`,{},{headers: {
            Authorization: "Bearer " + token,
        },}).then(res=>res.data),
		onSuccess: () => {
            router.replace('/wallet')
			// refetch()
		}
	});
};

export default useUpdateUserWallet;