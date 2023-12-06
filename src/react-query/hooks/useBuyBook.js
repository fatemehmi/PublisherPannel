import useShowToast from "@/components/ui/useShowToast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";


function useBuyBook() {
    const token=Cookies.get("token")
    const showToast=useShowToast()
  return useMutation({
    mutationFn:(obj)=>{
        console.log(obj)
        axios.post(`http://Localhost:5001/api/user/purchase-book`,{book_Id:obj.book_Id,discount_Id:obj.discount_Id},{
        headers: { Authorization: "Bearer " + token },
      }).then(res=>{
        if(res.data.result.http_status_code===400){
            showToast(res.data.result.error_message)}
        return res.data})},
    onSuccess: (data) => {
      console.log(data)
    },
    onError:(err)=>{
        console.log(err)
    }
  });
}

export default useBuyBook