function filterBooks(value,myBooks) {
  return (myBooks.filter((book) =>
    book.bookname.includes(value)
  ));
}

export default filterBooks;
