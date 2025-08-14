import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Jokes } from "./pages/Jokes";
import { PageNotFound } from "./pages/PageNotFound";
import { WordCounter } from "./pages/WordCounter";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/word-counter" element={<WordCounter />} />
				<Route path="/jokes" element={<Jokes />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
