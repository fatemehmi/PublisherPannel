import { Flex } from "@chakra-ui/react";
import React from "react";
import SuggestedBookItem from "./SuggestedBookItem";
import useGetCategoryBooks from "@/react-query/hooks/useGetCategoryBooks";


function SuggestedBooksList(props) {
  
  const {data,isSuccess}=useGetCategoryBooks(props.category)
  if(isSuccess){
    const slicedBooks = data.data.slice(0,2)
  return (
    <Flex
      width="100%"
      columnGap="20px"
      justifyContent="center"
    >
        {slicedBooks.map((book) => ( 
           <SuggestedBookItem
             id={book.bookid}
             key={book.bookid}
             bookname={book.bookname}
             authorname={book.authorname}
             price={book.price}
             language={book.language}
             publisher={book.publisher}
             bookcoverimage={book.bookcoverimage}
           />
         ))}
    </Flex>
  )}
}

export default SuggestedBooksList;
