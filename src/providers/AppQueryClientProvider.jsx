import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { useRef } from "react";

const AppQueryClientProvider = ({ children }) => {
  const toast = useToast({
    isClosable: true,
      position: 'top-right',
      status: 'error',
      duration:5000
  });
  const toastIdRef = useRef();

  const showToast = (text) => {
    toastIdRef.current = toast({
      description: text,
      
    });
  };
  const { reload } = useRouter();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        retryDelay: 1000,
        onError(err) {
          if (err.response.status === 401 || err.response.status === 403) {
            Cookies.delete("token");
            reload();
          }
        },
      },
      mutations: {
        onError(err) {
          // console.log(err.response.data.result.error_message)
          showToast(err.response.data.result.error_message);
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppQueryClientProvider;
