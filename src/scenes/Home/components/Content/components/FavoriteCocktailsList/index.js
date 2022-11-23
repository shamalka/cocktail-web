import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NotFound from "../../../../../../components/NotFound";
import CocktailItem from "../CocktailItem";

const FavoriteCocktailsList = () => {

    const favoriteCocktailData = useSelector(
        (state) => state.cocktailData.favoriteData
    )

    return (
        <div>
            {
                favoriteCocktailData.length > 0 ?
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-8 lg:mt-5">
                        {
                            favoriteCocktailData.map(item => {
                                return <CocktailItem key={item.idDrink} cocktailItem={item} isFavorite={true} />
                            })
                        }
                    </div> :
                    <div className="flex justify-center">
                        <p>No favorite items</p>
                    </div>
            }
        </div>

    );
};

export default FavoriteCocktailsList;
