import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";


function useSendReview() {
    const token=Cookies.get("token")
  return useMutation({
    mutationFn:(obj)=>{
        console.log(obj.value,obj.id)
        axios.post(`http://Localhost:6002/api/book/reviews`,{bookId:obj.id,rating:obj.value},{
        headers: { Authorization: "Bearer " + token },
      })},
    onSuccess: (data) => {
      console.log(data)
    }
  });
}

export default useSendReview