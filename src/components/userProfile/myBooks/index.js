import BooksList from "../BooksList";
import useGetMyBooks from "@/react-query/hooks/useGetMyBooks";
import Sidebar from "@/components/Sidebar.js";


function MyBooks() {
  const { data, isLoading, isError } = useGetMyBooks();

  if (isLoading) {
    return (
      <Sidebar pageName="userProfile">
        <p>isLoading...</p>
      </Sidebar>
    );
  }
  if (isError) {
    return (
      <Sidebar pageName="userProfile">
        <p>Something went wrong...</p>
      </Sidebar>
    );
  }
  return (
    <Sidebar pageName="userProfile">
      <BooksList booksArray={data.data}/>
    </Sidebar>
  );
}

export default MyBooks;
