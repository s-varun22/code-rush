import React from "react";
import { Header } from "../components/layout/Header";
import { Joke } from "../components/elements/Joke";

export const Jokes = () => {
	const heading = "ChuckNorris Joke";
	const subHeading = (
		<>
			<a href="https://api.chucknorris.io/" rel="noreferrer" target="_blank">
				api.chucknorris.io
			</a>{" "}
			is a free JSON API for hand curated Chuck Norris facts.
		</>
	);
	return (
		<>
			<Header heading={heading} subHeading={subHeading}></Header>
			<Joke />
		</>
	);
};
