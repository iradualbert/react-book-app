import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Book from "../components/Book";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [query, setQuery] = useState(searchParams.get('query') || "");
	const page = searchParams.get("page") || 0
	const res = useFetch(query ? `/search/${query}/${page}` : "/new");

	const handleChange = event => {
		const newQuery = event.target.value;
		setQuery(newQuery);
		setSearchParams({
			query: newQuery,
			page: 0
		})
	};


	if (res.isLoading) return <p>Loading</p>;
	if (res.error) return <p>{JSON.stringify(res.error)}</p>;
	const { books } = res.data;
	return (
		<div className="page-container">
			<p>Welcome to our home page</p>
			<h2>Explore New Books</h2>
			<form>
				<input
					value={query}
					placeholder="Search..."
					onChange={handleChange}
				/>
			</form>
			<ul className="book-list">
				{books.map((book) => (
					<Book book={book} key={book.isbn13} />
				))}
			</ul>
		</div>
	);
};

export default HomePage;
