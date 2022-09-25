import { createSignal, For } from "solid-js";

const ForExample = () => {
	const [items, _] = createSignal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	return (
		<main>
			<h1>For</h1>
			<ul>
				<For each={items()}>
					{(item) => <li style="list-style: none;">{item}</li>}
				</For>
			</ul>
		</main>
	);
};

export default ForExample;
