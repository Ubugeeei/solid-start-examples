import { createSignal } from "solid-js";

const SignalSample = () => {
	const [getCount, setCount] = createSignal(0, { equals: false });
	const [getCount2, setCount2] = createSignal(0, {
		equals: (c) => c === 1,
	});

	return (
		<main>
			<h1>Signal Option</h1>

			<p>Count (equals: false): {getCount()}</p>
			<button onClick={() => setCount((c) => c + 1)}>
				Increment
			</button>

			<p>Count (equals: equals: (c) =&gt; c === 1,): {getCount2()}</p>
			<button onClick={() => setCount2((c) => c + 1)}>
				Increment
			</button>
		</main>
	);
};

export default SignalSample;
