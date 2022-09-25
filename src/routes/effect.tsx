import { createSignal, createEffect } from "solid-js";

const Effect = () => {
	const [getCount, setCount] = createSignal(0);
  const [getDouble, setDouble] = createSignal(0);
	createEffect(() => setDouble(getCount() * 2));

	return (
		<main>
			<h1>Effect</h1>
      <p>Count: {getCount()}</p>
      <p>Double: {getDouble()}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
		</main>
	);
};

export default Effect;
