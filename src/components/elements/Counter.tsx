import React, { useRef, useState } from "react";

export const Counter = () => {
	const textRef = useRef<HTMLTextAreaElement>(null);
	const [text, setText] = useState<string | null>(null);
	const [characters, setCharacters] = useState(0);
	const [words, setWords] = useState(0);

	const handleCount = () => {
		if (textRef.current) {
			setText(textRef.current.value || "");
			setWords(textRef.current.value.trim().split(/\s+/).length);
			setCharacters(textRef.current.value.length);
		}
	};

	const handleButton = () => {
		setText("");
		if (textRef.current) {
			textRef.current.value = "";
		}
		setCharacters(0);
		setWords(0);
	};

	return (
		<section className="counter">
			<textarea
				id="textArea"
				value={text || ""}
				onChange={handleCount}
				ref={textRef}
				placeholder="Type or paste your text"></textarea>
			<button className="clearButton" onClick={handleButton} disabled={characters === 0}>
				Clear
			</button>

			<p className="result">
				<span>Character: {characters}</span>
				<span>Word: {words}</span>
			</p>
		</section>
	);
};
