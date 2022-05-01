import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
	const { title, image, url, isbn13, price } = book;
	return (
		<li className="card">
			<Link to={`books/${isbn13}`}>
				<img src={image} alt={title} />
				<div className="card-content">
					<h2>{title}</h2>
					<h3>{price}</h3>
				</div>
			</Link>
			<a target="_blank" href={url}>
				Buy the book
			</a>
		</li>
	);
};

export default BookCard;
