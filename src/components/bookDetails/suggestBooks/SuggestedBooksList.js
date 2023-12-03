import { Flex } from "@chakra-ui/react";
import React from "react";
import SuggestedBookItem from "./SuggestedBookItem";

function SuggestedBooksList(props) {
//   const filteredBooks = filterBooks(props.searchValue, props.booksArray);
//   if(filteredBooks.length===0){
//     return<p>کتابی یافت نشد.</p>
//   }
  return (
    <Flex
      width="100%"
      columnGap="20px"
      justifyContent="center"
    >
        <SuggestedBookItem/>
        <SuggestedBookItem/>
      {/* {filteredBooks.map((book) => ( */}
        {/* <AuthorBookItem
          id={book.bookid}
          key={book.bookid}
          bookname={book.bookname}
          authorname={book.authorname}
          price={book.price}
          language={book.language}
          publisher={props.publisher}
          bookcoverimage={book.bookcoverimage}
        /> */}
      {/* ))} */}
    </Flex>
  );
}

export default SuggestedBooksList;
