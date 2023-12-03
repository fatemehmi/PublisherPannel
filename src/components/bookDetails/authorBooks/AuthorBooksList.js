import AuthorBookItem from "./AuthorBookItem";
import { Flex } from "@chakra-ui/react";
import React from "react";
import filterBooks from "@/helpers/filterBooks";

function AuthorBooksList(props) {
//   const filteredBooks = filterBooks(props.searchValue, props.booksArray);
//   if(filteredBooks.length===0){
//     return<p>کتابی یافت نشد.</p>
//   }
  return (
    <Flex
    flexDir="column"
      width="100%"
      rowGap="20px"
    >
        <AuthorBookItem/>
        <AuthorBookItem/>
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

export default AuthorBooksList;
