import React from "react";
import FavoriteCocktailsList from ".";
import { render, screen } from "../../../../../../utils/test-utils";

describe("FavoriteCocktailsList component", function () {
    it("Test FavoriteCocktailsList component snapshot", () => {
        render(<FavoriteCocktailsList />)
        expect(screen).toMatchSnapshot();
    })
});