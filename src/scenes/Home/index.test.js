import React from "react";
import Home from ".";
import { render, screen } from "../../utils/test-utils";

describe("Home component", function () {
    it("Test Home component snapshot", () => {
        render(<Home />)
        expect(screen).toMatchSnapshot();
    })
});