import { Virtuoso } from "react-virtuoso";

export const App = () => {
	return (
		<main className="stack center">
			<h1>react-virtuoso demo</h1>
			<p>Scroll the box below to see more items.</p>
			<p>
				Inspect the rendered DOM to see how elements are added and removed in
				real time while scrolling.
			</p>
			<section>
				<Virtuoso
					style={{ height: "400px" }}
					totalCount={200}
					itemContent={(index) => <div>Item {index}</div>}
				/>
			</section>
		</main>
	);
};
