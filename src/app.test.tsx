import { render, screen } from "@testing-library/react";

import { App } from "./app";

describe("<App />", () => {
	it("displays the title", () => {
		render(<App />);

		expect(screen.getByText("react-virtuoso demo")).toBeInTheDocument();
	});
});
