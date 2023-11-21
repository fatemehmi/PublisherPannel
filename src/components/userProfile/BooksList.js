import BookCard from "@/components/ui/userProfile/BookCard";
import { Flex } from "@chakra-ui/react";
import React from "react";
import filterBooks from "@/helpers/filterBooks";

function BooksList(props) {
  const filteredBooks = filterBooks(props.searchValue, props.booksArray);
  return (
    <Flex
      width="100%"
      flexWrap="wrap"
      rowGap="20px"
      justifyContent="space-between"
    >
      {filteredBooks.map((book) => (
        <BookCard
          id={book.bookid}
          key={book.bookid}
          bookname={book.bookname}
          authorname={book.authorname}
          price={book.price}
          language={book.language}
          publisher={props.publisher}
          bookcoverimage={book.bookcoverimage}
        />
      ))}
    </Flex>
  );
}

export default BooksList;
