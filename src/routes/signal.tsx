import { createSignal } from "solid-js";

const Signal = () => {
	const [getCount, setCount] = createSignal(0);

	return (
		<main>
			<h1>Signal</h1>
			<p>Count: {getCount()}</p>
			<button onClick={() => setCount((c) => c + 1)}>
				Increment
			</button>
		</main>
	);
};

export default Signal;