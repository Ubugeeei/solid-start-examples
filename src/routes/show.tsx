import { createSignal, Show } from "solid-js";

const ShowSample = () => {
	const [count, setCount] = createSignal(0);

	return (
		<main>
			<h1>Show</h1>
			<p>Count: {count()}</p>
			<button onClick={() => setCount(count() + 1)}>Increment</button>

			<Show when={count() % 2 === 0} fallback={<p>Odd</p>}>
				<p>Even</p>
			</Show>
		</main>
	);
};

export default ShowSample;
