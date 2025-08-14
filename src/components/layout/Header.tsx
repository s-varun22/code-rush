import { ReactElement } from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
	heading: string;
	subHeading: string| ReactElement;
};

export const Header = ({ heading, subHeading }: HeaderProps) => {
	return (
		<>
			<header className="header">
				<nav>
					<ul className="nav-links">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/word-counter">Word Counter</Link>
						</li>
						<li>
							<Link to="/jokes">Chuck Norris Jokes</Link>
						</li>
					</ul>
				</nav>
			</header>
			<section className="heading">
				<div>
					<h1>{heading}</h1>
					<p>{subHeading}</p>
				</div>
			</section>
		</>
	);
};
