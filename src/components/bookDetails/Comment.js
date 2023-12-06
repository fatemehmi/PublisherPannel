import React, { useRef } from "react";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";
import { HStack, VStack, Textarea,Center,Box } from "@chakra-ui/react";
import CommentList from "./CommentList";
import Rating from "./Rating";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useState } from "react";
import useGetComments from "@/react-query/hooks/useGetComments";
import useSendComments from "@/react-query/hooks/useSendComments";
import useSendReview from "@/react-query/hooks/useSendReview";
import useGetBookReviews from "@/react-query/hooks/useGetBookReviews";
function Comment(props) {
  const textareaRef=useRef()
  const[review,setReview]=useState(0)
  console.log(review)
  const [currentPage, setCurrentPage] = useState(1);
  const{data,isSuccess,refetch}=useGetComments(props.bookId,currentPage)
  // const{refetch:reviewRefetch}=useGetBookReviews(props.bookId)
  const{mutate}=useSendComments()
  const {mutate:sendReview}=useSendReview()

	let pageButtons;
	if (isSuccess) {

		const totalPages =  data.data.count;

		pageButtons = Array.from(
			{ length: Math.min(totalPages) },
			(_, index) => index + 1
		);
	}


  const submitHandler=(e)=>{
    e.preventDefault()
    // console.log(textareaRef.current.value)
    if(textareaRef.current.value.trim().length===0&&review===0){
      
    }
    else if(textareaRef.current.value.trim().length===0){
      console.log(review)
      sendReview({id:props.bookId,value:review})
      // reviewRefetch()
    }
    else if(review===0){
      mutate({id:props.bookId,value:textareaRef.current.value})
      // refetch()
    }
    
    else{
      sendReview({id:props.bookId,value:review})
      mutate({id:props.bookId,value:textareaRef.current.value})
      // refetch()
    }
  }
  if(isSuccess){

    return (
      <CustomCardContainer pt="16px" pb="16px" pr="20px" pl="20px">
        <div>
          <VStack gap="16px" paddingBottom="16px">
            <HStack justifyContent="space-between" width="100%">
              <VStack alignItems="flex-start">
                <p className="text-[20px] font-medium">
                  به این کتاب چه امتیازی میدی؟
                </p>
                <p className="text-[16px] font-normal">
                  بقیه رو از نظرت با خبر کن!
                </p>
              </VStack>
              <Rating setReview={setReview}/>
            </HStack>
            <form className="flex flex-col w-full gap-6" onSubmit={submitHandler}>
              <Textarea
                resize="none"
                h="162px"
                w="full"
                borderRadius="12px"
                border="1px"
                borderColor="primary"
                placeholder="نظر من اینه که..."
                ref={textareaRef}
              />
              <button type="submit" className="w-full bg-primary rounded-xl px-[44px] py-[10px] text-white text-[16px] font-medium">
                ثبت نظر
              </button>
            </form>
          </VStack>
          <CommentList commentList={data.data.data} />
          <Center marginTop="30px">
                <Box
                  dir="ltr"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="16px"
                >
                  <button
                    style={{
                      background: "rgba(87, 93, 251, 0.11)",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                    }}
                    onClick={() =>
                      setCurrentPage((prev) => prev - 1)
                    }
                    disabled={currentPage === 1}
                  >
                    <ChevronLeftIcon
                      style={{ color: "#575DFB" }}
                    />
                  </button>
  
                  {pageButtons.map((page) => (
                    <button
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        textDecoration:
                          currentPage === page
                            ? "underline"
                            : "none",
                        color: "#575DFB",
                      }}
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                      }}
                      disabled={currentPage === page}
                    >
                      {page}
                    </button>
                  ))}
  
                  <button
                    style={{
                      background: "rgba(87, 93, 251, 0.11)",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      console.log("clicked");
                      setCurrentPage((prev) => prev + 1);
                    }}
                    disabled={currentPage === data.data.count}
                  >
                    <ChevronRightIcon
                      style={{ color: "#575DFB" }}
                    />
                  </button>
                </Box>
                </Center>			
        </div>
      </CustomCardContainer>
    );
  }
}

export default Comment;
