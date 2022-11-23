import React from "react";
import NotFound from ".";
import { render, screen } from "../../utils/test-utils";

describe("NotFound component", function () {
    it("Test NotFound component snapshot", () => {
        render(<NotFound />)
        expect(screen).toMatchSnapshot();
    })
});

describe("NotFound component", function () {
    it('Test not found text', () => {
        render(<NotFound />);
        const element = screen.getByText("Sorry.. Cocktail not found")
        expect(element).toBeInTheDocument();
    });
});
