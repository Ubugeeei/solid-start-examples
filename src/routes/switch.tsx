import { createSignal, Match, Switch } from "solid-js";

const SwitchExample = () => {
	const [getCount, setCount] = createSignal(0);

	return (
		<main>
			<h1>Switch</h1>
			<p>Count: {getCount()}</p>
			<button onClick={() => setCount(getCount() + 1)}>
				Increment
			</button>

			<Switch fallback={<p>{getCount()}</p>}>
				<Match when={getCount() % 15 === 0}>
					<p>FizzBuzz</p>
				</Match>

				<Match when={getCount() % 3 === 0}>
					<p>Fizz</p>
				</Match>

				<Match when={getCount() % 5 === 0}>
					<p>Buzz</p>
				</Match>
			</Switch>
		</main>
	);
};

export default SwitchExample;
