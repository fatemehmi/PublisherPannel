import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import useGetComments from "./useGetComments";
import useShowToast from "@/components/ui/useShowToast";


function useSendComments(bookId,page) {
  const showToast=useShowToast()
    const token=Cookies.get("token")
    const{refetch}=useGetComments(bookId,page)
  return useMutation({
    mutationFn:(obj)=>{
        axios.post(`http://Localhost:6002/api/book/comments`,{bookId:obj.id,comment:obj.value},{
        headers: { Authorization: "Bearer " + token },
      }).then(res=>refetch()).catch(err=>showToast(err.response.data.result.error_message))},

  });
}

export default useSendComments