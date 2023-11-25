import BooksList from "../BooksList";
import useGetMyBooks from "@/react-query/hooks/useGetMyBooks";
import Sidebar from "@/components/Sidebar.js";

function MyBooks() {
	const { data, isLoading, isError } = useGetMyBooks();

	if (isLoading) {
		return (
			<Sidebar pageName="books">
				<p>isLoading...</p>
			</Sidebar>
		);
	}
	if (isError) {
		return (
			<Sidebar pageName="books">
				<p>Something went wrong...</p>
			</Sidebar>
		);
	}
	return (
		<Sidebar pageName="books">
			<BooksList booksArray={data.data} />
		</Sidebar>
	);
}

export default MyBooks;
