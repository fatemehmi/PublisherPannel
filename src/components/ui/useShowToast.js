import { useToast } from "@chakra-ui/react";


function useShowToast() {
    const toast = useToast({
        isClosable: true,
          position: 'top-right',
          status: 'error',
          duration:5000
      });
      const toastId = "toast-id";
      const showToast=(text)=>{
        toast({description: text,id:toastId})
      }
      
  return showToast
}

export default useShowToast
