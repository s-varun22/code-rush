import { Link } from "react-router-dom";
import errorImage from "../assets/error.avif";

export const PageNotFound = () => {
	return (
		<main>
			<section className="error">
				<div>
					<p>Error - Page Not Found!</p>
					<img src={errorImage} alt="Error Image" />
					<Link to="/">
						<button>Back To Word Counter</button>
					</Link>
				</div>
			</section>
		</main>
	);
};
