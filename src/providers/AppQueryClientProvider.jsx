import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import useShowToast from "@/components/ui/useShowToast";

const AppQueryClientProvider = ({ children }) => {
  
  const showToast=useShowToast();
  const { reload,redirect } = useRouter();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries:{
        retry:1,
        retryDelay:1000,
      },

      mutations: {
        onError(err) {
          // console.log(err.response.data.result.error_message)
          showToast(err.response.data.result.error_message)
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppQueryClientProvider;
