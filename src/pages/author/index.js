import AuthorBookItem from "@/components/bookDetails/authorBooks/AuthorBookItem";
import useGetAuthorBooks from "@/react-query/hooks/useGetAuthorBooks";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

function AuthorFilter() {
  const router = useRouter();
  const { data, isSuccess } = useGetAuthorBooks(router.query.author);
  if (isSuccess) {
    console.log(data.data)
    return (
      <div>
        {data.data.map((book) => 
          <AuthorBookItem
            id={book.bookid}
            key={book.bookid}
            bookname={book.bookname}
            authorname={book.authorname}
            price={book.price}
            language={book.language}
            publisher={book.publisher}
            bookcoverimage={book.bookcoverimage}
          />
        )}
      </div>
    );
  }
}

export default AuthorFilter;
