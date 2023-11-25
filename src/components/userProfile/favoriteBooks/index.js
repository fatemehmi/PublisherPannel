import React, { useEffect } from "react";
import BooksList from "../BooksList";
import useGetBookmarks from "@/react-query/hooks/useGetBookmarks";
import Sidebar from "@/components/Sidebar.js";

function MyBookmarks() {
	const { data, isLoading, isError } = useGetBookmarks();
	if (isLoading) {
		return (
			<Sidebar pageName="bookmarks">
				<p>isLoading...</p>
			</Sidebar>
		);
	}
	if (isError) {
		return (
			<Sidebar pageName="bookmarks">
				<p>Something went wrong...</p>
			</Sidebar>
		);
	}

	return (
		<Sidebar pageName="bookmarks">
			{!isLoading && <BooksList booksArray={data?.data} />}
		</Sidebar>
	);
}

export default MyBookmarks;
