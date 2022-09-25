import { createStore } from "solid-js/store";
import { StoreChild } from "~/components/store/StoreChild";

const Store = () => {
	const [count, setCount] = createStore({ state: 0 });

	return (
		<div>
			<h1>Store</h1>
			<p>Count: {count.state}</p>
			<button onClick={() => setCount("state", (c) => c + 1)}>
				Increment
			</button>

			<StoreChild count={count} />
		</div>
	);
};

export default Store;
