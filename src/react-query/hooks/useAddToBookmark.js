import { useMutation } from "@tanstack/react-query";
import APIClientToken from "../services/apiClient-token";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import axios from "axios";
import Cookies from "js-cookie";

const apiClient = new APIClientToken(API_ENDPOINTS.ADD_TO_BOOKMARKS);

function useAddToBookmark(book_id) {
    const token=Cookies.get("token")
  return useMutation({
    mutationFn: ()=>axios.post(
      "http://Localhost:8000" + API_ENDPOINTS.ADD_TO_BOOKMARKS,{ book_id:book_id},
      {
        headers: { Authorization: "Bearer " + token },
        
      }
    ),
    onSuccess: (data) => {
      console.log(data);
    },
  });
}

export default useAddToBookmark;
