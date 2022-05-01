import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage";
import BookDetail from "./pages/BookDetail";
import Header from "./components/Header";

axios.defaults.baseURL = "https://api.itbook.store/1.0";

const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/books/:bookId" element={<BookDetail />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
