import { Link } from "react-router-dom";
import error from "../assets/error.avif";

export const PageNotFound = () => {
	return (
		<main>
			<section className="error">
				<div>
					<p>Error - Page Not Found!</p>
					<img src={error} alt="Error" />
					<Link to="/">
						<button>Back To Word Counter</button>
					</Link>
				</div>
			</section>
		</main>
	);
};
