function filterBooks(value,myBooks) {
  return (myBooks.filter((book) =>
    book.book_name.includes(value)
  ));
}

export default filterBooks;
