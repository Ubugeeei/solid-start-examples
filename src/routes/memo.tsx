import { createMemo, createSignal } from "solid-js";

const Memo = () => {
	const [getCount, setCount] = createSignal(0);
	const getMemoDouble = createMemo(() => getCount() * 2);

	return (
		<main>
			<h1>Memo</h1>
			<p>Count: {getCount()}</p>
			<p>Memo Double: {getMemoDouble()}</p>
			<button onClick={() => setCount((c) => c + 1)}>
				Increment
			</button>
		</main>
	);
};

export default Memo;
