import { Counter } from "../components/elements/Counter";
import { Header } from "../components/layout/Header";

export const WordCounter = () => {
	const heading = "Word Counter";
	const subHeading = "Enter text below to count the number of words and characters.";

	return (
		<>
			<Header heading={heading} subHeading={subHeading}></Header>
			<Counter />
		</>
	);
};
