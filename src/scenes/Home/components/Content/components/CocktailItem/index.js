import { CloseOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { notification } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../../../../../components/Button";
import { setFavoriteCocktailData } from "../../../../../../features/cocktailData";

const CocktailItem = (props) => {

    const { idDrink, strDrinkThumb, strDrink, strCategory } = props.cocktailItem
    const dispatch = useDispatch();

    const addToFaviorite = () => {
        const favoritesArray = localStorage.getItem('faviorite_cocktails') !== null ? JSON.parse(localStorage.getItem('faviorite_cocktails')) : []
        let isExists;
        for (let i = 0; i < favoritesArray.length; i++) {
            if (favoritesArray[i].idDrink === idDrink) {
                isExists = true
                break
            } else {
                isExists = false
            }
        }
        if (!isExists) {
            favoritesArray.push(props.cocktailItem)
            localStorage.setItem('faviorite_cocktails', JSON.stringify(favoritesArray))
            dispatch(setFavoriteCocktailData(favoritesArray))
            notification.success({
                message: 'Added to favorites',
                duration: 2,
                description: strDrink + " is now on your favorites list",
            });
        }

    }

    const removeFromFavorites = () => {
        let favoritesArray = localStorage.getItem('faviorite_cocktails') !== null ? JSON.parse(localStorage.getItem('faviorite_cocktails')) : []
        for (let i = 0; i < favoritesArray.length; i++) {
            if (favoritesArray[i].idDrink === idDrink) {
                favoritesArray.splice(i, 1)
                break
            }
        }
        localStorage.setItem('faviorite_cocktails', JSON.stringify(favoritesArray))
        dispatch(setFavoriteCocktailData(favoritesArray))
    }

    return (
        <div data-testid="cocktail-item" className="shadow w-full h-auto bg-white rounded-3xl drop-shadow-xl opacity-90">
            {props.isFavorite && <Button onClick={removeFromFavorites} className={`absolute z-30 -right-2 -top-2 border-solid bg-gray-600 rounded-full hover:opacity-70 h-8 w-8`} icon={<CloseOutlined className="justify-center items-center text-base text-white" />} />}
            <img src={strDrinkThumb} className="object-cover rounded-3xl hover:opacity-75 ease-in duration-200 " />
            <div className="flex">
                <div className="flex-1">
                    <p className={`font-poppins font-extrabold lg:text-lg text-base mt-2 mr-3 ml-3 break-normal ${props.isFavorite ? 'lg:text-base text-sm' : 'lg:text-lg text-base'}`} >{strDrink}</p>
                    <p className={`font-poppins mt-1 mr-3 ml-3 mb-2 break-normal text-gray-500 ${props.isFavorite ? 'text-xs' : 'lg:text-sm text-xs'}`}>{strCategory}</p>
                </div>
                <div>
                    <Button onClick={props.isFavorite ? removeFromFavorites : addToFaviorite} className={`bg-white rounded-full hover:opacity-50 ${props.isFavorite ? 'h-8 w-8' : 'h-12 w-12 '}`} icon={props.isFavorite ? <HeartFilled className="text-md justify-center text-lg text-red-500" /> : <HeartOutlined className="text-md justify-center text-lg text-red-500" />} />
                </div>
            </div>
        </div>
    );
};

export default CocktailItem;
