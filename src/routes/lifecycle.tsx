import { onCleanup, onMount } from "solid-js";

const Lifecycle = () => {
	console.log("created!");
	onMount(() => {
		console.log("mounted!");
	});
	onCleanup(() => {
		console.log("cleaned up!");
	});

	return (
		<main>
			<h1>Lifecycle</h1>
		</main>
	);
};
export default Lifecycle;
