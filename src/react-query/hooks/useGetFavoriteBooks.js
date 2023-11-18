import { useQuery } from "@tanstack/react-query";
import APIClientToken from "../services/apiClient-token";
import { API_ENDPOINTS } from "@/utils/api/endpoints";

const apiClient = new APIClientToken('');

const useGetFavoriteBooks = () => {
  return useQuery({
    queryKey: ["favoriteBooks"],
    queryFn: apiClient.getAll,
    onSuccess: (data) => {
      console.log(data.data);
    },
  });
};

export default useGetFavoriteBooks;
