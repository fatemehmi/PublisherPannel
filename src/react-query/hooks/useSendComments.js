import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";


function useSendComments() {
    const token=Cookies.get("token")
  return useMutation({
    mutationFn:(obj)=>{
        axios.post(`http://Localhost:6002/api/book/comments`,{bookId:obj.id,comment:obj.value},{
        headers: { Authorization: "Bearer " + token },
      })},
    onSuccess: (data) => {
      console.log(data)
    }
  });
}

export default useSendComments