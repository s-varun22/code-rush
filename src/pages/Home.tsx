import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";

export const Home = () => {
	const heading = "Code Rush App";
	const subHeading = "Code Rush is a small app that includes a Word Counter and a Chuck Norris Joke generator";

	return (
		<>
			<Header heading={heading} subHeading={subHeading}></Header>

			<div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
				<Link to="/word-counter">
					<button>Word Counter</button>
				</Link>
				<Link to="/jokes">
					<button>Chuck Norris Jokes</button>
				</Link>
			</div>
		</>
	);
};
