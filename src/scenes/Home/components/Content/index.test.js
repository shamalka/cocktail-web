import React from "react";
import Content from ".";
import { render, screen } from "../../../../utils/test-utils";

describe("Content component", function () {
    it("Test Content component snapshot", () => {
        render(<Content />)
        expect(screen).toMatchSnapshot();
    })
});