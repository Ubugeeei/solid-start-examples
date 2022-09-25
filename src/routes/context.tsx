import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CounterContext = createContext([
	{ count: 0 },
	{
		increment() {},
		decrement() {},
	},
]);

function CounterProvider(props) {
	const [state, setState] = createStore({ count: props.count || 0 });
	const store = [
		state,
		{
			increment() {
				setState("count", (c) => c + 1);
			},
			decrement() {
				setState("count", (c) => c - 1);
			},
		},
	];

	return (
		<CounterContext.Provider value={store}>
			{props.children}
		</CounterContext.Provider>
	);
}

const ContextParent = () => {
	return (
		<CounterProvider count={0}>
			<ContextChild />
		</CounterProvider>
	);
};

const ContextChild = () => {
	const [state, actions] = useContext(CounterContext);

	return (
		<main>
			<h1>Context</h1>
			<p>Count: {state.count}</p>
			<button onClick={actions.increment}>Increment</button>

			<button
				onClick={actions.decrement}
				disabled={state.count === 0}
			>
				Decrement
			</button>
		</main>
	);
};

export default ContextParent;
