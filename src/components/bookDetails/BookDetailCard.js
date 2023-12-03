import {
  Flex,
  Image,
  Center,
  Stack,
  Heading,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";
import Stars from "./Stars";
import { useState } from "react";
import useAddToBookmark from "@/react-query/hooks/useAddToBookmark";
import useRemoveBookmark from "@/react-query/hooks/useRemoveBookmark";
import useGetIsBookmark from "@/react-query/hooks/useGetIsBookmark";
import useGetBookCategory from "@/react-query/hooks/useGetBookCategory";

function BookDetailCard(props) {
  const{mutate:addToBookmarks}=useAddToBookmark(props.data.book_id)
  const{mutate:removeBookmark}=useRemoveBookmark(props.data.book_id)
  const[liked,setLike]=useState()
  useGetIsBookmark(props.data.book_id,setLike)
  const{data}=useGetBookCategory(props.data.book_id)

  const likeHandler=(e)=>{
    if(liked){
      removeBookmark()
      setLike(false)
    }else{
      addToBookmarks()
      setLike(true)
    }
  }

  return (
    <CustomCardContainer minH="315px" pt="30px" pr="20px" pl="20px">
      <Flex>
        <div className="w-[250px] h-[339px] absolute top-[-12px] rounded-xl overflow-hidden shadow-[2px_3px_14px_0px_#00000038]">
          <Image
            objectFit="fill"
            width="250px"
            height="339px"
            src={props.data.bookcoverimage}
          />
        </div>
        <Flex width="100%" marginRight="280px">
          <Stack spacing="3" rowGap="18px" flexGrow="1">
            <Heading
              fontFamily="Vazirmatn"
              fontWeight="extrabold"
              fontSize="24px"
            >
              {props.data.bookname}
              
            </Heading>
            <Stars book_id={props.data.book_id}/>
            <div className="w-[65px] h-[27px] bg-[#575DFB1A] border-[1px] border-primary rounded-lg flex justify-center items-center ">
              <span className="text-primary text-[12px] font-medium">{data?data.data:''}</span>
            </div>
            <Stack rowGap="20px" flexGrow="1">
              <span className="text-[16px] font-medium text-[#000015]">
                زبان:&nbsp;{props.data.language}
              </span>
              <span className="text-[16px] font-medium text-[#000015]">
                نویسنده:&nbsp;{props.data.authorname}
              </span>
              <span className="text-[16px] font-medium text-[#000015]">
                ناشر:&nbsp;{props.data.publisher}
              </span>
            </Stack>
          </Stack>
          <Center
            width="48px"
            height="48px"
            borderRadius="10px"
            border="1px"
            borderColor="#C8C8C8"
            overflow="hidden"
          >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={liked?"red":"none"}
                viewBox="0 0 25 24"
                strokeWidth={1.5}
                stroke="red"

                  className="w-[30px] h-[30px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            
            <Checkbox
              _hover={{ backgroundColor: "white" }}
              bgColor="white"
              w="19px"
              h="19px"
              p="5px"
              opacity="0"
              onChange={likeHandler}
              position="absolute"
            >
            </Checkbox>
          </Center>
        </Flex>
      </Flex>
    </CustomCardContainer>
  );
}

export default BookDetailCard;
