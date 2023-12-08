import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import useGetComments from "./useGetComments";


function useSendComments(bookId,page) {
    const token=Cookies.get("token")
    const{refetch}=useGetComments(bookId,page)
  return useMutation({
    mutationFn:(obj)=>{
        axios.post(`http://Localhost:6002/api/book/comments`,{bookId:obj.id,comment:obj.value},{
        headers: { Authorization: "Bearer " + token },
      }).then(res=>refetch())},

  });
}

export default useSendComments