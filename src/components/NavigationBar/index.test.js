import React from "react";
import NavigationBar from ".";
import { render, screen } from "../../utils/test-utils";


describe("NavigationBar component", function () {
    it("Test NavigationBar component snapshot", () => {
        render(<NavigationBar />)
        expect(screen).toMatchSnapshot();
    })
});

describe("NavigationBar component", function() {
    it('Test title text', () => {
      render(<NavigationBar />);
      const element = screen.getByText("Cocktail Hub")
      expect(element).toBeInTheDocument();
    });
});
