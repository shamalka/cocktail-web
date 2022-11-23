import React from "react";
import SearchBar from ".";
import { render, screen } from "../../../../utils/test-utils";


describe("SearchBar component", function () {
    it("Test SearchBar component snapshot", async () => {
        render(<SearchBar />)
        expect(screen).toMatchSnapshot();
    })
});

describe("SearchBar component", function () {
    it('Test input placeholder', async () => {
        render(<SearchBar />);
        const element = screen.getByPlaceholderText('Search Cocktails');
        expect(element).toBeInTheDocument();
    });
});
