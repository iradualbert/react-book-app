import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BookDetail = () => {
	const { bookId } = useParams();

	const res = useFetch(`/books/${bookId}`);

	if (res.isLoading) return <p>Loading...</p>;
	if (res.error) return <p>{JSON.stringify(res.error)}</p>;

	const {
		title,
		subtitle,
		authors,
		price,
		publisher,
		language,
		pages,
		year,
		rating,
		desc,
		image
	} = res.data;

	return (
		<div className="flex page-container">
			<div className="">
				<img src={image} alt={subtitle}/>
			</div>
			<div className="book-details">
				<table>
					<tr className="flex">
						<td className="left">Title</td>
						<td>{title}</td>
					</tr>
					<tr className="flex">
						<td className="left">Price</td>
						<td>{price}</td>
					</tr>
					<tr className="flex">
						<td className="left">Authors</td>
						<td>{authors}</td>
					</tr>
					<tr className="flex">
						<td className="left">Publisher</td>
						<td>{publisher}</td>
					</tr>
					<tr className="flex">
						<td className="left">Language</td>
						<td>{language}</td>
					</tr>
					<tr className="flex">
						<td className="left">Pages</td>
						<td>{pages}</td>
					</tr>
					<tr className="flex">
						<td className="left">Year</td>
						<td>{year}</td>
					</tr>
					<tr className="flex">
						<td className="left">Rating</td>
						<td>{rating}</td>
					</tr>
				</table>
				<p>{desc}</p>
			</div>
		</div>
	);
};

export default BookDetail;
