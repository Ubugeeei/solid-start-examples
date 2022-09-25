import { createResource } from "solid-js";

const Resource = () => {
	const fetchData = () => fetch("http://127.0.0.1:3001/resource");
	const [data, { mutate, refetch }] = createResource(fetchData);

	return (
		<main>
			<h1>Resource</h1>
			<p>data: {JSON.stringify(data())}</p>
			<p>data.loading: {`${data.loading}`}</p>
			<p>data.error: {`${data.error}`}</p>
			<button onClick={() => mutate()}>Mutate</button>
			<button onClick={() => refetch()}>Refetch</button>
		</main>
	);
};

export default Resource;
