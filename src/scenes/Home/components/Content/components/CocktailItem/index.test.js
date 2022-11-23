import React from "react";
import CocktailItem from ".";
import { render, screen } from "../../../../../../utils/test-utils";


describe("CocktailItem component", function () {
    it("Test CocktailItem component snapshot", () => {
        const testItem = {
            "idDrink": "13940",
            "strDrink": "69 Special",
            "strDrinkAlternate": null,
            "strTags": null,
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": null,
            "strAlcoholic": "Alcoholic",
            "strGlass": "Collins Glass",
            "strInstructions": "Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up.",
            "strInstructionsES": null,
            "strInstructionsDE": "Gießen Sie 6 cl. Gin. Füge 12 cl. 7-up hinzu. Füge Zitronensaft für den Geschmack hinzu. Wenn Sie zu schwach sind, füllen Sie das Glas mit mehr 7-Up auf.",
            "strInstructionsFR": null,
            "strInstructionsIT": "Versare 60ml di Gin.\r\nAggiungi 120ml di  7 Up/Sprite.\r\nAggiungi il succo di limone per insaporire.\r\nSe sei debole, rabbocca il bicchiere con più 7-Up/Sprite.",
            "strInstructionsZH-HANS": null,
            "strInstructionsZH-HANT": null,
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
            "strIngredient1": "Gin",
            "strIngredient2": "7-Up",
            "strIngredient3": "Lemon juice",
            "strIngredient4": null,
            "strIngredient5": null,
            "strIngredient6": null,
            "strIngredient7": null,
            "strIngredient8": null,
            "strIngredient9": null,
            "strIngredient10": null,
            "strIngredient11": null,
            "strIngredient12": null,
            "strIngredient13": null,
            "strIngredient14": null,
            "strIngredient15": null,
            "strMeasure1": "2 oz dry ",
            "strMeasure2": "4 oz ",
            "strMeasure3": "0.75 oz ",
            "strMeasure4": null,
            "strMeasure5": null,
            "strMeasure6": null,
            "strMeasure7": null,
            "strMeasure8": null,
            "strMeasure9": null,
            "strMeasure10": null,
            "strMeasure11": null,
            "strMeasure12": null,
            "strMeasure13": null,
            "strMeasure14": null,
            "strMeasure15": null,
            "strImageSource": null,
            "strImageAttribution": null,
            "strCreativeCommonsConfirmed": "No",
            "dateModified": "2016-08-31 19:44:55"
        }

        render(<CocktailItem cocktailItem={testItem} isFavorite={false} />)
        // expect(screen).toMatchSnapshot();

        const cocktailItem = screen.getByTestId('cocktail-item');
        expect(cocktailItem).toBeInTheDocument();
        expect(cocktailItem).toHaveTextContent('69 Special');
        expect(cocktailItem).toHaveTextContent('Ordinary Drink');
    })
});