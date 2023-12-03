import React, { useRef } from "react";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";
import { HStack, VStack, Textarea } from "@chakra-ui/react";
import CommentList from "./CommentList";
import Rating from "./Rating";

function Comment() {
  const textareaRef=useRef()

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(textareaRef.current.value)
    console.log("submit...")
  }
  
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
            <Rating/>
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
        <CommentList />
      </div>
    </CustomCardContainer>
  );
}

export default Comment;
