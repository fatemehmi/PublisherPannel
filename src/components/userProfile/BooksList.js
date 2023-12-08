import BookCard from "@/components/ui/userProfile/BookCard";
import { Flex } from "@chakra-ui/react";
import React from "react";
import filterBooks from "@/helpers/filterBooks";

function BooksList(props) {
  const filteredBooks = filterBooks(props.searchValue, props.booksArray);
  if(filteredBooks.length===0){
    return<p>کتابی یافت نشد.</p>
  }
  return (
    <Flex
    flexDir="column"
      width="100%"
      rowGap="20px"
    >
      {filteredBooks.map((book) => (
        <BookCard
          id={book.bookid}
          key={book.bookid}
          bookname={book.bookname}
          authorname={book.authorname}
          price={book.price}
          language={book.language}
          publisher={book.publisher}
          bookcoverimage={book.bookcoverimage}
          type={props.type}
        />
      ))}
    </Flex>
  );
}

export default BooksList;
