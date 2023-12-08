import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import useGetBookReviews from "./useGetBookReviews";

function useSendReview(bookId) {
  const{refetch}=useGetBookReviews(bookId)
    const token=Cookies.get("token")
  return useMutation({
    mutationFn:(obj)=>{
        axios.post(`http://Localhost:6002/api/book/reviews`,{bookId:obj.id,rating:obj.value},{
        headers: { Authorization: "Bearer " + token },
      }).then(res=>refetch())},

  });
}

export default useSendReview