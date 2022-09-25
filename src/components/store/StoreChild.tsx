export const StoreChild = ({ count }: { count: {state: number} }) => {
	return (
		<div>
			<h2>StoreChild</h2>
      <p>Count: {count.state}</p>
		</div>
	);
};
